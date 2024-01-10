# Projeto - Basic

## Descrição

O projeto Basic é uma versão inicial da aplicação, construída com as seguintes tecnologias:

- **@prisma**
- **bcrypt**
- **prisma**
- **terminal-kit**
- **uuid**

### Estrutura de Diretórios

- **`basic`**: Contém a aplicação básica.
  - **`src`**:
    - **`core`**:
      - **`course`**: Módulo Course com modelos, portas e casos de uso.
      - **`user`**: Módulo User com modelos, portas e casos de uso.
      - **`shared`**: Contém objetos de valor compartilhados (Value Objects).
    - **`external`**:
      - **`adapters`**:
        - **`crypto`**: Adaptadores para operações de criptografia.
        - **`database`**: Adaptadores para operações de banco de dados.
      - **`ui`**: Adaptadores para a interface do usuário (Terminal Kit).

### Funcionalidades

- **Módulo de Usuário (User)**: Implementa a criação e gestão de usuários.
- **Módulo de Curso (Course)**: Gerencia a criação e informações sobre cursos.

### Comandos para Executar

1. Clone o repositório:

```bash
  git clone https://github.com/elvesbd/architecture-concept.git
```

2. Acesse o diretório do projeto basic:

```bash
  cd architecture-concept/basic
```

3. Instale as dependências:

```bash
  npm install
```

4.Execute a aplicação:

```bash
  npm start
```
