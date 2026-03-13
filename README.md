# 📦 SwagLabs - Automação de testes

## 📖 Sobre o projeto

```
Projeto de testes end-to-end (E2E) para um e-commerce fictício, utilizando Playwright para validar fluxos funcionais da aplicação.

Os testes simulam o comportamento real de um usuário, garantindo que as principais funcionalidades do sistema funcionem corretamente.
```

### 🌐 Site do projeto

```
https://www.saucedemo.com/
```

# 🚀 Começando

### 📥 Clonar o Projeto

```
git clone https://github.com/Hrqlv/swagLabsWebTests.git
```

### 📦 Instalar dependências

```
npm install
```

### 🎭 Instalar o Playwright

```
npx playwright install
```

## ▶️ Executando os testes

### Executar todos os testes
```
npm run tests
```

### 🌍 Executar testes em um navegador específico
```
npm run chrome
```
#### Opções:
- 🌐 chrome
- 🦊 webkit
- 🧭 firefox

### 🏷️ Executar testes por tag
```
npm run tests -- --grep @LOGIN
npm run tests -- --grep @COMPRA
```

#### Exemplos de opções:
- @COMPRA - Executa testes com a tag COMPRA
- @LOGIN - Executa testes Com a tag LOGIN

### 👀 Executar testes no modo headed (abrirá o navegador)
```
npm run headed
```

## 🐞 Depuração de testes

### 🔎 Depurar todos os testes (abrirá a janela de depuração do Playwright)
```
npm run debug
```

### 🎯 Depurar um teste por tag com um navegador específico
```
npm run chrome -- --debug --grep @COMPRA
npm run chrome -- --debug --grep @LOGIN
```

### 📊 Relatório de testes
```
npx playwright show-report
```

```
npm run allure
```

## 📝 Plano de teste no modo BDD - Gherkin

### A escrita dos cenários segue o padrão BDD com Gherkin, priorizando clareza e entendimento do ponto de vista do usuário.
```
https://flax-anglerfish-b42.notion.site/SwagLabs-Plano-de-testes-Gherkin-BDD-3131c05f8d6a8007a789e9674738be64
```