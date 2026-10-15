import Script from "next/script";
import { conteudo } from "./conteudo";

/* As telas do site são HTML estático; o /reino.js liga as interações
   (troca de telas pelo #, mapa, oráculo, simulador de d20, cartas, treino de RP). */
export default function Home() {
  return (
    <>
      <div id="reino" dangerouslySetInnerHTML={{ __html: conteudo }} />
      <Script src="/reino.js" strategy="afterInteractive" />
    </>
  );
}
