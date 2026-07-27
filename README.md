# Studio Up

App de gestão de serviços e prestadores autônomos do seguimento de beleza.

## Stack

- **Frontend:** React Native + Expo + TypeScript
- **Backend:** Fastify + TypeScript
- **Banco:** Neon Postgres + Prisma
- **Auth:** Clerk (e-mail/senha + Google)
- **Storage:** Wasabi S3
- **E-mail:** Resend
- **Push:** Expo Notifications

## Estrutura do Projeto

```
src/
├── components/        # Componentes reutilizáveis
│   ├── ui/           # Componentes de UI (Button, Input, Card)
│   └── layout/       # Componentes de layout (Header, TabBar)
├── screens/          # Telas do app
│   ├── auth/         # Tela de autenticação
│   ├── home/         # Tela inicial
│   ├── services/     # Gerenciamento de serviços
│   ├── providers/    # Gerenciamento de prestadores
│   ├── products/     # Gerenciamento de produtos
│   ├── cash/         # Controle de caixa
│   ├── profile/      # Perfil do usuário
│   └── settings/     # Configurações
├── navigation/       # Navegação do app
├── stores/           # Estado global (Zustand)
├── services/         # Serviços e API
├── types/            # Tipos TypeScript
├── hooks/            # Custom hooks
├── constants/        # Constantes
├── theme/            # Tema e design tokens
└── utils/            # Utilitários
```

## Setup

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o app:
   ```bash
   npm start
   ```

3. Execute no dispositivo/simulador:
   ```bash
   npm run ios
   # ou
   npm run android
   # ou
   npm run web
   ```

## Desenvolvimento

### Sprints

- **Sprint 0:** Decisões e arquitetura
- **Sprint 1:** Base do app (tema, navegação, componentes)
- **Sprint 2:** Login com Clerk
- **Sprint 3:** Onboarding
- **Sprint 4:** Backend base
- **Sprint 5:** Cadastros principais
- **Sprint 6:** Produtos e estoque
- **Sprint 7:** Serviço do dia
- **Sprint 8:** Caixa
- **Sprint 9:** Extrato do prestador
- **Sprint 10:** Wasabi storage
- **Sprint 11:** E-mails
- **Sprint 12:** Push notification
- **Sprint 13:** Link Studio
- **Sprint 14:** Relatórios
- **Sprint 15:** Polimento e QA

## Licença

MIT
