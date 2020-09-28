import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ImageCroppedEvent } from 'ngx-image-cropper';

import { AccountService, AlertService } from '@app/_services';

interface IRegisterObject {
    email: string,
    password: string,
    name: string, 
    cpf: string,
    cnpj: string,
    role: string,
    address: string,
    phone: string,
    socialMedia: string, 
    avatar: string
}

@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {
    imageChangedEvent: any = '';
    croppedImage: any = '';
    form: FormGroup;
    loading: Boolean = false;
    submitted: Boolean = false;
    cpf_cnpj: string = '';
    arrayRoles = ['Programador front-end', 'Designer', 'Gerente de projetos'];
    arraySocialMedia = ['Facebook', 'Instagram', 'LinkedIn', 'Pinterest'];
    selectedItem = '';
    objRegister: IRegisterObject = {
        email: '',
        password: '',
        name: '', 
        cpf: null,
        cnpj: null,
        role: '',
        address: '',
        phone: '',
        socialMedia: '', 
        avatar: ''
    };
    passwordAgain: string = '';
    radioSelected: string = '';
    croopedImg: Boolean = false;
    btnSaveCropp: Boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
            name: ['', Validators.required],
            cpf_cnpj: ['', Validators.required],
            address: ['', Validators.required],
            phone: ['', Validators.required],
            socialMedia: ['', Validators.required],
            avatar: ['', Validators.required],
            passwordAgain: ['', Validators.required],
            role: ['', Validators.required],
            radioPhones: ['', Validators.required],
        });
    }

    // convenience getter for easy access to form fields
    get fields() { return this.form.controls; }

    isCPF(): boolean {
        return this.cpf_cnpj == null ? true : this.cpf_cnpj.length < 12 ? true : false;
    }
    
    getCpfCnpjMask(): string {
        return this.isCPF() ? '000.000.000-009' : '00.000.000/0000-00';
    }

    onSubmit() {
        (this.isCPF()) ? this.objRegister.cpf = this.cpf_cnpj : this.objRegister.cnpj = this.cpf_cnpj;
        this.submitted = true; 
        
        // reset alerts on submit
        this.alertService.clear();

        //stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        if (!this.validCpfCnpj(this.cpf_cnpj)) {
            this,this.alertService.error("CPF or CNPJ Invalid")
            return;
        }

        this.loading = true;

        this.objRegister.phone += ` (${this.radioSelected})`;

        this.accountService.register(this.objRegister)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.alertService.success('Registration successful', { keepAfterRouteChange: true });
                    this.router.navigate(['../login'], { relativeTo: this.route });
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
    }

    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
        this.btnSaveCropp = true;
    }

    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
        this.objRegister.avatar = this.croppedImage;
    }

    saveCroppedImg() {
        this.croopedImg = true;
        this.btnSaveCropp = false;
    }

    validCpfCnpj(val) {
        if (val.length == 11) {
            var cpf = val.trim();
            
            var v1 = 0;
            var v2 = 0;
            var aux = false;
            
            for (var i = 1; cpf.length > i; i++) {
                if (cpf[i - 1] != cpf[i]) {
                    aux = true;   
                }
            } 
            
            if (aux == false) {
                return false; 
            } 
            
            for (var i = 0, p = 10; (cpf.length - 2) > i; i++, p--) {
                v1 += cpf[i] * p; 
            } 
            
            v1 = ((v1 * 10) % 11);
            
            if (v1 == 10) {
                v1 = 0; 
            }
            
            if (v1 != cpf[9]) {
                return false; 
            } 
            
            for (var i = 0, p = 11; (cpf.length - 1) > i; i++, p--) {
                v2 += cpf[i] * p; 
            } 
            
            v2 = ((v2 * 10) % 11);
            
            if (v2 == 10) {
                v2 = 0; 
            }
            
            if (v2 != cpf[10]) {
                return false; 
            } else {   
                return true; 
            }
        } else if (val.length == 14) {
            var cnpj = val.trim();
            
            var v1 = 0;
            var v2 = 0;
            var aux = false;
            
            for (var i = 1; cnpj.length > i; i++) { 
                if (cnpj[i - 1] != cnpj[i]) {  
                    aux = true;   
                } 
            } 
            
            if (aux == false) {  
                return false; 
            }
            
            for (var i = 0, p1 = 5, p2 = 13; (cnpj.length - 2) > i; i++, p1--, p2--) {
                if (p1 >= 2) {  
                    v1 += cnpj[i] * p1;  
                } else {  
                    v1 += cnpj[i] * p2;  
                } 
            } 
            
            v1 = (v1 % 11);
            
            if (v1 < 2) { 
                v1 = 0; 
            } else { 
                v1 = (11 - v1); 
            } 
            
            if (v1 != cnpj[12]) {  
                return false; 
            } 
            
            for (var i = 0, p1 = 6, p2 = 14; (cnpj.length - 1) > i; i++, p1--, p2--) { 
                if (p1 >= 2) {  
                    v2 += cnpj[i] * p1;  
                } else {   
                    v2 += cnpj[i] * p2; 
                } 
            }
            
            v2 = (v2 % 11); 
            
            if (v2 < 2) {  
                v2 = 0;
            } else { 
                v2 = (11 - v2); 
            } 
            
            if (v2 != cnpj[13]) {   
                return false; 
            } else {  
                return true; 
            }
        } else {
            return false;
        }
    }
}