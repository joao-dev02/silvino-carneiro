# Instruções de personalização para o Codex

Use este projeto como modelo e personalize somente os conteúdos, a identidade visual e os contatos com os dados fornecidos abaixo. Preserve o vídeo inicial e todos os detalhes técnicos, layout, responsividade e animações existentes.

## Dados do novo escritório

Preencha ou forneça estes dados na conversa:

- Nome do escritório e nome do profissional/equipe:
- Site, Instagram ou outras fontes de informação:
- Logo e foto autorizadas:
- Paleta de cores (HEX) ou referência visual:
- Especialidades e descrição de cada serviço:
- História, apresentação e diferenciais confirmados:
- Formação e OAB, se fornecidas:
- WhatsApp com DDI e DDD:
- Instagram e demais canais:
- Endereço, cidade, região e modalidade de atendimento:
- Horários de atendimento:
- Avaliações reais, autores, nota, quantidade e link da fonte:

## Regras de implementação

1. Leia `README.md` e `dist/index.html` antes de editar. Trabalhe na stack existente, sem migrar frameworks ou alterar dependências por iniciativa própria.
2. Troque título, meta description, textos de todas as seções, rodapé e atributos acessíveis. Atualize logo e foto em todos os locais, incluindo loader, cabeçalho, favicon e rodapé. Preserve classes, IDs e wrappers usados pelas animações; ajuste dimensões intrínsecas de imagens apenas conforme os novos arquivos.
3. Preserve integralmente os vídeos `hero-background-loop.mp4` e `hero-background-mobile.mp4`, seus posters e a lógica de reprodução. Não altere enquadramento, opacidade, transições, preload, autoplay, muted, loop, playsinline nem seleção desktop/mobile.
4. Preserve loader, navegação com cursor animado, menu mobile, Lenis, GSAP, ScrollTrigger, text reveal, fold text, sequências de cards, marquee e animações das bordas dos botões. Mantenha os tempos, triggers, easing, espaçamentos, ordem das seções, breakpoints, foco de teclado, movimento reduzido e mecanismos de recuperação.
5. Personalize as cores em `tailwind.config.cjs` e nas ocorrências inline de `dist/index.html` (HEX e RGBA). Preserve os nomes técnicos das classes e animações, mesmo que contenham `gold` ou `midnight`. Recompile com `npm run build`; não edite o CSS gerado manualmente.
6. Substitua todos os links provisórios de atendimento por `https://wa.me/` com o número real informado. Atualize também telefone exibido, Instagram e link das avaliações. Não deixe links apontando para o escritório anterior nem invente contatos.
7. As avaliações são placeholders explícitos, não depoimentos reais. Só substitua por avaliações comprovadas. Mantenha cada grupo visual duplicado com o mesmo conteúdo para preservar a continuidade do marquee. Se faltarem dados, mantenha placeholders identificáveis e informe as pendências.
8. Não invente especialidades, OAB, experiência, endereços, números ou promessas de resultados. Use somente informações fornecidas ou verificadas nas fontes indicadas.
9. Verifique build, caminhos dos assets, navegação, menu mobile e textos em telas pequenas e grandes. Confira os hashes dos vídeos para assegurar que não foram alterados. Revise a reprodução do hero no navegador e relate limitações de teste, se existirem.

## Pedido pronto

“Personalize este modelo com as informações do escritório que vou enviar. Altere apenas informações, logo, foto, contatos e cores. Preserve integralmente o vídeo de início, as animações, o layout, a responsividade e os detalhes técnicos já existentes. Siga PERSONALIZAR-CODEX.md e não invente dados.”
