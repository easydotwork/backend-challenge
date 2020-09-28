import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService, AlertService } from '@app/_services';

@Component({ templateUrl: 'add-edit.component.html' })
export class AddEditComponent implements OnInit {
    form: FormGroup;
    id: string;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService
    ) {}

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];

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
            role: ['', Validators.required]
        });

        this.accountService.getById(this.id)
            .pipe(first())
            .subscribe(x => this.form.patchValue(x));

    }

    // convenience getter for easy access to form fields
    get fields() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        this.loading = true;
        this.updateUser();
        
    }

    private updateUser() {
        this.accountService.update(this.id, this.form.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.alertService.success('Update successful', { keepAfterRouteChange: true });
                    this.router.navigate(['../../'], { relativeTo: this.route });
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
    }
}