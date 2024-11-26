# Projeto DND - Testes de API com Postman

Este projeto contém uma suíte de testes automatizados para a API pública de Dungeons & Dragons 5ª edição (DND API). Os testes verificam endpoints para buscar informações sobre monstros, classes, magias e cenários esperados de erro.

## Estrutura do Projeto

- **DND.postman_collection.json**: Coleção de testes contendo requisições organizadas por categorias de sucesso e falha.
- **DND.postman_environment.json**: Arquivo de configuração de ambiente para definir a URL base da API.
- **exercicio2.txt**: Respostas do exercício da lista.

---

## Requests e Testes

### Requisições de Sucesso (GET-Sucesso)
1. **Busca informações sobre um dragão negro adulto**  
   - Verifica o tempo de resposta e as estatísticas do dragão retornadas.
2. **Busca todas as classes disponíveis**  
   - Valida o tempo de resposta e verifica se os nomes das classes estão na lista esperada.
3. **Busca magia "Power Word Kill"**  
   - Testa o tempo de resposta e se os componentes da magia são válidos (`V`, `S` ou `M`).
4. **Busca informações sobre a classe "Rogue"**  
   - Confirma o nome da classe e a presença do dado de vida (`hit_die`) na resposta.

### Requisições de Falha (GET-Falha)
1. **Busca informações sobre um dragão roxo adulto**  
   - Testa se o endpoint inexistente retorna o status HTTP `404`.
2. **Busca informações sobre a classe "roge"**  
   - Verifica o status HTTP `404` para um nome de classe incorreto.

---

## Pré-Requisitos

- **Postman**: [Baixe aqui](https://www.postman.com/downloads/)
- **Node.js** (para executar testes com o Newman): [Baixe aqui](https://nodejs.org/)

---

## Como Executar os Testes

### Passo 1: Configurar o Ambiente
1. Importe o arquivo `DND.postman_environment.json` no Postman.
2. Certifique-se de que o ambiente `DND` está ativo.

### Passo 2: Importar a Coleção
1. Importe o arquivo `DND.postman_collection.json` no Postman.

### Passo 3: Executar os Testes
1. No Postman, selecione a coleção `DND` e clique em **Run**.

### Passo 4: Gerar Relatórios
1. Instale o Newman:
   ```bash
   npm install -g newman
   npm install -g newman-reporter-htmlextra
   ```
2. Execute os testes pelo Newman:
   ```bash
   newman run DND.postman_collection.json -e DND.postman_environment.json -r htmlextra
   ```
3. O relatório HTML será gerado no diretório.
