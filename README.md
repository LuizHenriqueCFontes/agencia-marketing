# Lume — Agência de Marketing Digital

Site institucional responsivo para uma agência de marketing digital fictícia. A página apresenta os serviços, a marca, projetos de exemplo, um depoimento e uma chamada para contato.

## Tecnologias

- React 19
- TypeScript
- Vite 8
- CSS

## Requisitos

- Node.js compatível com o Vite 8
- npm

## Como executar

No Prompt de Comando, na pasta do projeto:

```cmd
npm install
npm run dev
```

O Vite exibirá no terminal o endereço local para abrir no navegador.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Verifica os tipos TypeScript e gera a versão de produção em `dist/` |
| `npm run preview` | Exibe localmente a versão gerada para produção |
| `npm run lint` | Executa o ESLint |

## Estrutura do projeto

```text
src/
├── components/
│   ├── AboutSection.tsx
│   ├── ArrowIcon.tsx
│   ├── ContactSection.tsx
│   ├── HeroSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ServicesSection.tsx
│   ├── SiteFooter.tsx
│   ├── SiteHeader.tsx
│   ├── TestimonialSection.tsx
│   └── TrustStrip.tsx
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

O `App.tsx` compõe as seções da página. Os componentes reutilizáveis e as seções estão em `src/components/`; os estilos gerais ficam em `index.css` e os estilos da página em `App.css`.

## Personalização

- Atualize o endereço `oi@lume.agency` no componente `ContactSection` para usar o e-mail real da agência.
- Edite os nomes, métricas, projetos e depoimento de exemplo nos componentes `TrustStrip`, `ProjectsSection` e `TestimonialSection` antes de publicar.
- As imagens dos projetos são carregadas do Unsplash e a tipografia utiliza o Google Fonts; ambos precisam de conexão com a internet

--

## Orientador
Professor Hudson Neves
