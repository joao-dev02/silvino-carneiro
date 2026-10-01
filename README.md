# Modelo de site para advocacia

Base reutilizável para enviar ao Codex junto com as informações de um novo escritório. Textos, logo, foto, contatos e avaliações são placeholders. Os links de contato apontam para a seção Contato até serem substituídos por canais reais.

## Executar

Requer Node.js 22 ou superior e npm.

```sh
npm ci
npm run build
npm start
```

Abra http://127.0.0.1:4173. Para hospedagem estática, publique `dist`. A configuração da Vercel foi mantida.

## Arquivos

- `dist/index.html`: conteúdo, estilos complementares e JavaScript original das animações.
- `dist/assets/logo-modelo.png`: logo genérica para substituir.
- `dist/assets/foto-modelo.png`: foto genérica para substituir.
- `dist/assets/hero-background-loop.mp4`: vídeo original de desktop.
- `dist/assets/hero-background-mobile.mp4`: vídeo original de celular.
- `dist/assets/hero-poster-*.webp`: imagens originais de fallback do vídeo.
- `styles/input.css` e `tailwind.config.cjs`: geração do CSS.
- `PERSONALIZAR-CODEX.md`: instruções e campos para personalização.

## Preservação técnica

Mantidos os vídeos e posters originais, autoplay/muted/loop/playsinline, seleção de vídeo por tamanho de tela, tentativas de reprodução e transição entre poster e vídeo. Mantidos também loader, GSAP/ScrollTrigger, Lenis, revelação e dobra dos textos, sequência de cards, abas animadas, menu mobile, faixas de avaliações, bordas animadas dos botões, breakpoints, acessibilidade e fallback sem JavaScript ou com movimento reduzido.

A stack original é HTML, JavaScript e Tailwind CSS 3.4.17. Não é um projeto React/Next.js. As fontes e bibliotecas de animação continuam carregando pelos serviços externos originais.

O pacote não inclui dependências instaladas, ferramentas temporárias, histórico Git nem vínculos de hospedagem do escritório anterior. `package-lock.json` permanece disponível para reinstalação reproduzível.

Após alterar classes Tailwind ou cores da configuração, execute `npm run build`. Os estilos inline de `dist/index.html` também possuem cores que precisam acompanhar uma futura mudança de paleta.
