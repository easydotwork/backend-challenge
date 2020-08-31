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


Instruções de instalação:

	1 - Clonar o repositório e dar checkout no branch challenge-kim-delevati
	2 - Navegar até a pasta backend/ através de alguma ferramenta de linha de comando
	3 - Executar o comando npm install
	4 - Renomear o arquivo .env.example para .env e editar o secret
	5 - Na pasta config/ , renomear o arquivo config.json.example para config.json e editar as variáveis de acesso ao banco de dados
	6 - Executar o comando: npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all

**Para execução local:**

	7 - Executar o comando: serverless offline start --skipCacheInvalidation

A API estará disponível para acesso no endereço `http://localhost:3000/`

**Para execução remota:** (requer credenciais AWS configuradas no sistema)

	7 - Executar o comando: serverless deploy
O comando retornará o endereço da API provisionada no API Gateway.
<br><br>
O arquivo de coleção Postman está disponível na pasta `postman_collection/`

## Casos de uso

>Utilize este espaço para nos apresentar sua aplicação, mostre casos de uso reais que possam nos ajudar a simular cenários e obter a melhor experiência com seu produto.

## Instruções de contribuição

1. Realize um fork deste repositório (<https://github.com/easydotwork/backend-challenge/fork>)
2. Desenvolva sua solução no seu projeto criado a partir do fork
3. Assim que finalizar crie um Pull Request do seu repositório para este aqui como forma de entrega
(Obs: Descreva como criou a solução na descrição do PR)
