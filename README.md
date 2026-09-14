# 🛒 Checkout React — Sistema de Pagamento Assíncrono

Este projeto é uma aplicação Single Page Application (SPA) desenvolvida em **React** com **Vite**, simulando o fluxo completo de um carrinho de compras até a finalização do pagamento com validação de dados de cartão de crédito em tempo real.

O projeto faz parte da avaliação prática das turmas de Front-End React T1 e T2.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas

- **React 18** & **Vite** (Ambiente de desenvolvimento rápido)
- **React Router Dom** (Gerenciamento de rotas e navegação programática)
- **React Hook Form** (Manipulação e controle de estados do formulário)
- **Zod** (Validação de schemas e integridade dos dados informados)
- **JavaScript (ES6+)** e **JSX** (Sem uso de TypeScript ou bibliotecas externas de estado)
- **CSS3** (Responsividade e estilização sem frameworks adicionais)

---

## 💻 Fluxo e Funcionalidades do Sistema

1. **Carrinho de Compras (`/`):** Listagem nativa de produtos estáticos consumidos através de um array imutável local. O sistema computa automaticamente as quantidades, subtotais e o total geral em tempo real, formatando os valores na moeda local (R$).
2. **Dados do Cartão (`/pagamento`):** Formulário performático integrado com o **Zod** que valida as seguintes regras obrigatórias de negócio:
   - Nome do titular preenchido.
   - Número do cartão contendo estritamente 16 dígitos (desconsiderando espaços ou hífens).
   - Validade no formato `MM/AA` (com o mês restrito entre `01` e `12`).
   - Código de segurança (CVV) contendo obrigatoriamente 3 dígitos.
3. **Processamento Assíncrono:** Ao submeter o formulário, o sistema bloqueia novas submissões desabilitando o botão e exibe o feedback visual de `"Processando compra..."` utilizando uma simulação assíncrona baseada em Promises de 2 segundos.
4. **Regra de Detecção de Fraude:** Caso o número do cartão inserido possua todos os 16 dígitos idênticos (ex: `1111111111111111`), a aplicação barra a transação e redireciona programaticamente o fluxo para a rota `/falha`, exibindo a mensagem exata exigida: **`tentativa de golpe`**. Cartões normais e válidos encaminham o usuário para a rota de `/sucesso`.

---

## 🚀 Como Executar o Projeto Localmente

Certifique-se de possuir o **Node.js** (versão LTS recomendada) instalado em sua máquina.

1. Instale as dependências necessárias do projeto:
   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento local:
   ```bash
   npm run dev
   ```

3. Abra o navegador no endereço exibido no seu terminal (geralmente `http://localhost:5173`).

---

## 🐛 Investigação com Debugger e Boas Práticas

Durante o ciclo de desenvolvimento das regras de validação do cartão e comportamento assíncrono do Custom Hook `usePagamento.js`, utilizou-se ativamente as ferramentas de depuração do ecossistema do navegador (**React DevTools** e comandos `debugger` nativos no escopo das funções). 

Essa abordagem permitiu rastrear os estados de renderização da aplicação, acompanhar o ciclo de vida do carregamento do formulário e auditar se os seletores e comportamentos estavam adequados aos critérios de acessibilidade (foco visível, rótulos semânticos e tratamento correto de erros).
