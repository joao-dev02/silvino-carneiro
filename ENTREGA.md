# Personalização — Silvino Carneiro Advocacia

## Arquivos

- `dist/index.html`: conteúdo institucional, quatro áreas de atuação, três etapas, contatos, título, descrição, Open Graph e textos acessíveis.
- `tailwind.config.cjs` e `styles/input.css`: cores centralizadas; fontes e dimensões preservadas.
- `dist/assets/site.css`: recompilado pelo Tailwind.
- `dist/assets/marca-placeholder.svg` e `dist/assets/foto-placeholder.svg`: espaços provisórios identificados pelo nome do escritório. Não são uma reprodução da logo oficial.
- `scripts/serve.cjs`: tipo MIME de SVG para servir os placeholders corretamente.
- Removidos `dist/assets/logo-modelo.png` e `dist/assets/foto-modelo.png`.

## Identidade e conteúdo

Paleta atualizada por solicitação do usuário: fundos e neutros originais do modelo (`#070B1A`, `#0F172A`, `#040712`), com os detalhes dourados substituídos por azul `#60A5FA`, azul claro `#93C5FD` e brilho `#BFDBFE`. Textos brancos e cinzas originais restaurados.

Textos atualizados para Direito Previdenciário e benefícios do INSS. Mantida a expressão “ex-servidor do INSS por 10 anos”. Os quatro cards apresentam planejamento previdenciário, aposentadorias, salário-maternidade e auxílio-reclusão. Não foram criadas seções adicionais. Avaliações permanecem como espaços explicitamente pendentes, sem estrelas, notas ou testemunhos fictícios.

## Canais

- WhatsApp: `https://wa.me/5586999970427`, com a mensagem automática integral informada no pedido, codificada no parâmetro `text`.
- Instagram institucional: https://www.instagram.com/silvinocarneiroadvocacia/
- Instagram profissional: https://www.instagram.com/silvinocarneiro.adv/
- Central de links: https://linktr.ee/silvinocarneiro

O Linktree foi acessado e seu botão aponta para `558699970427`, divergente do número explicitamente fornecido. Foi mantido o número do pedido; confirmar essa divergência antes da publicação.

## Pendências

- Arquivo original da logo: a imagem é visível no chat, mas seu arquivo não estava disponível nos anexos locais. Os espaços da marca usam apenas um placeholder textual.
- Fotografia autorizada do profissional.
- Avaliações reais e sua fonte.
- Endereço presencial, e-mail e OAB: não publicados por falta de confirmação nos canais oficiais. Os perfis do Instagram não puderam ser recuperados. Localização publicada apenas como Teresina/PI e Timon/MA, com atendimento em todo o Brasil.
- Favicon oficial: o genérico foi removido; nenhum favicon fictício foi criado.

## Verificação

- `npm ci`: concluído, auditoria sem vulnerabilidades reportadas.
- `npm run build`: concluído. Aviso de base Browserslist antiga; dependências preservadas.
- `node --check scripts/serve.cjs`: aprovado. Não há script de lint ou suíte de testes no projeto.
- Navegador Chrome automatizado e agent-browser: página carregada, conteúdo e links presentes, nenhum erro de JavaScript detectado.
- Viewports 1440×900, 768×1024, 390×844 e 320×740: sem transbordamento horizontal ou corte horizontal do título; imagens carregadas; menu móvel abre, fecha e navega.
- Vídeo: autoplay ativo, avanço de reprodução observado, mídia pronta e poster ocultado após início da reprodução. Os testes de viewport não equivalem a testes em dispositivos físicos.
- Comparação dos scripts HTML: JavaScript original integralmente idêntico, incluindo animações, triggers, delays e reprodução do vídeo.
- Seis seções e quatro cards de atuação preservados. Classes de tamanho, grid, espaçamento, fontes e breakpoints mantidas.
- SHA-256 dos dois vídeos e dos dois posters conferidos contra `MIDIA-SHA256.txt`: todos idênticos.
- Busca no conteúdo publicado por nomes e contatos antigos e placeholders institucionais: nenhuma ocorrência remanescente. Placeholders de marca, foto e avaliações são intencionais.

Evidências temporárias locais em `.verification/`; esse diretório não integra `dist`.
