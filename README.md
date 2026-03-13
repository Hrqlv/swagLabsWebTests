# SwagLabs - Automação de testes

### Clonar o Projeto

```
git clone https://github.com/Hrqlv/swagLabsWebTests.git
```
### Instalar dependências

```
npm install
```

### Instalar o Playwright

```
npx playwright install
```

## Como executar os testes

### Executando todos os testes
```
npm run tests
```
### Executando testes em um navegador específico
```
npm run chrome
```
#### Opções:
- chrome
- webkit
- firefox

### Executando um teste por tag
```
npm run tests -- --grep @LOGIN
npm run tests -- --grep @COMPRA
```

#### Exemplos de opções:
- @COMPRA - Executa testes com a tag COMPRA
- @LOGIN - Executa testes Com a tag LOGIN

### Executando testes no modo automático (abrirá o navegador)
```
npm run headed
```

## Depurando testes

### Depurando todos os testes (abrirá a janela de depuração do Playwright)
```
npm run debug
```

### Depurando um teste por tag com um navegador específico
```
npm run chrome -- --debug --grep @COMPRA
npm run chrome -- --debug --grep @LOGIN
```

### Exibindo relatório de testes
```
npx playwright show-report
```