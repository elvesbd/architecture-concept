# Projeto - Complete

## Descrição

O projeto Complete é uma evolução do projeto Basic, incorporando a arquitetura de monorepo com o Turbo Repo. Ele consiste em subprojetos tratados como pacotes independentes, proporcionando modularidade.

### Tecnologias e Conceitos Adicionais

- **Turbo Repo**: Organiza os subprojetos como pacotes independentes para facilitar a modularidade e reutilização.
- **Facade**: Utilizado para delimitar a comunicação entre a aplicação Terminal e o pacote Core.

### Estrutura de Diretórios

- **`complete`**: Contém a aplicação completa.
  - **`apps`**:
    - **`terminal`**: Aplicação Terminal encapsulada.
    - **`backend`**: Backend da aplicação.
    - **`frontend`**: Frontend da aplicação.
  - **`packages`**:
    - **`core`**: Pacote com toda lógica de negócios, casos de uso, modelos e objetos de valor compartilhados.
    - **`adapters`**: Pacote utilizado para comunicação entre a aplicação Terminal e o Core.

### Comandos para Executar

1. Clone o repositório:

```bash
  git clone https://github.com/elvesbd/architecture-concept.git
```

2. Acesse o diretório do projeto basic:

```bash
  cd architecture-concept/complete
```

3. Instale as dependências:

```bash
  npm install
```

4.Execute a aplicação:

```bash
  npm start
```
