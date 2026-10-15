# O Lar da Besta — site

Site do RPG “O Lar da Besta” em **Next.js** (App Router), pronto para a **Vercel**.

## Rodar no computador
```bash
npm install
npm run dev
```
Abra http://localhost:3000

## Publicar na Vercel
1. Suba esta pasta para um repositório no GitHub.
2. Em vercel.com → **Add New… → Project**, importe o repositório.
3. A Vercel reconhece o Next.js sozinha (Build: `next build`). Clique em **Deploy**.

Ou pela linha de comando: `npx vercel` (e `npx vercel --prod` para produção).

## Onde mexer
- `app/conteudo.js` — o texto e o HTML das telas (Início, A extensão, O reino, Personagens, Os dados, A vida, Mistérios, Como jogar).
- `app/globals.css` — as cores e o visual.
- `public/reino.js` — as interações e os dados (raças, vocações, lugares, bestiário, capítulos).
- `public/img/` — as fotos da extensão.

As telas trocam pelo `#` do endereço (ex.: `/#dados`), então os links funcionam direto.
