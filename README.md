# Teste de Pré Seleção
> O objetivo deste teste é avaliar o perfil técnico do candidato mostrando uma prévia dos desafios que podem ser enfrentados em situações do dia a dia. A fim de criar um cenário realista estamos disponibilizando este repositório para que você possa desenvolver o desafio proposto submetendo suas PRs para revisão de nossa equipe técnica.


## Desafio

> Considere o seguinte cenário hipotético onde nosso cliente deseja desenvolver uma plataforma para coleta de dados corporativos de seus colaboradores a fim de criar uma base profissional dos envolvidos via preenchimento de um formulário que deve ser realizado através de uma collection do Postman ou página WEB (opcional).
É de interesse do cliente que os colaboradores cadastrados na base recebam como resposta via Postman ou sejam redirecionados para uma página WEB (opcional) contendo suas credenciais de acesso logo após o cadastro realizado com sucesso para que seja possível realizar a edição de seus dados cadastrais em acessos futuros.
Para esta aplicação consideramos um diferencial o uso de uma infraestrutura serverless com serviço AWS Lambda utilizando plugin Serverless Offline para simular o ambiente da Amazon, porém não é um requisito obrigatório sendo possível o desenvolvimento utilizando uma estrutura local monolítica em Node.js.


## Lista de requisitos técnicos

* A aplicação deve implementar um CRUD utilizando Node.js com framework Express ou Lambda (opcional).
* Para utilização de recursos serverless da AWS recomendamos o uso de Serverless Framework com o plugin Serverless Offline para emular serviços como AWS Lambda.
* O banco de dados utilizado deve ser relacional e os dados devem ser manipulados via ORM, de preferência utilizar o Sequelize.
* O banco de dados possui informações pré-definidas pelo cliente que devem ser populadas através de arquivos seeders e a sua criação direcionada por arquivos migrations, a manipulação de dados diretamente na base para esta aplicação deve ser evitada.
* Dados sensíveis como IDs do banco de dados não devem trafegar de maneira exposta entre as requisições, para a proteção deste tipo de informação sugerimos o uso de padrão JSON Web Token para criptografar este tipo dado utilizando uma chave privada que deve ser armazenada no arquivo de ambiente da aplicação no servidor.
* Os formulários de entrada devem ser criados via collection do Postman ou com um front-end WEB (opcional) utilizando JavaScript, jQuery, Angular, React ou outra plataforma que o candidato se sinta familiarizado.

## Formulário de Acesso

* E-mail
* Senha
* Botão para realizar o primeiro cadastro


## Formulário de cadastro

* Foto de perfil (Upload de imagem com resolução máxima de 250px de largura por 250px de altura) (Opcional)
* Nome/Razão Social
* CPF/CNPJ
* Função/Cargo (Verificar dados pré-definidos)
* E-mail de acesso 
* Endereços (Verificar dados pré-definidos)
* Telefones (Verificar dados pré-definidos)
* Redes sociais (Verificar dados pré-definidos)


## Dados pré-definidos

### Tipos de cargos
* Programador front-end
* Programador back-end
* Designer
* Gerente de projetos

### Tipos de telefones
* Fixo
* Celular
* WhatsApp

### Tipos de redes sociais
* Facebook
* Instagram
* LinkedIn
* Pinterest


## Instalação

>FrontEnd
- cd ./frontend
- npm install

>BackEnd
- cd ./backend
- npm install
- Necessário criar um database com nome: db_easywork
- migration das tabelas será realizado quando subir o backend pela primeira vez.

>Database
- PostgreSQL
- Criar database local com nome: db_easywork
- Migration das tabelas será feito após subir o backend pela primeira vez.

## Casos de uso

>API (construção)
- Feita com FW baseado em ExpressJS
- JWT
- Proteção dos endpoints
- Autenticação

>API
- Após instalação
- execute npm start
- Acesso http://localhost:3000
- Terás uma tela da API como essa: [Imagem API](https://ibb.co/gy4Jp13)
- Para executar os testes, executar npm test
- Link para acesso aos endpoints da API > https://documenter.getpostman.com/view/94139/TVKHUFbD

>FrontEnd
- Após instalação
- execute npm start
- Abrirá um nova página web como essa: [Imagem Front](https://ibb.co/0tvjNYY)
- http://localhost:4200/
- Após o primeiro registro, já será possível se logar na aplicação.

## Instruções de contribuição

1. Realize um fork deste repositório (<https://github.com/easydotwork/backend-challenge/fork>)
2. Desenvolva sua solução no seu projeto criado a partir do fork
3. Assim que finalizar crie um Pull Request do seu repositório para este aqui como forma de entrega
(Obs: Descreva como criou a solução na descrição do PR)
