import "./globals.css";

const site = process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(site),
  title: "O Lar da Besta",
  description: "Um reino de RPG no Habblet. Crie um personagem, role o d20 e descubra o que a Fera guarda.",
  openGraph: {
    title: "O Lar da Besta",
    description: "Um reino de RPG no Habblet. Crie um personagem, role o d20 e descubra o que a Fera guarda.",
    images: ["/img/mapa.webp"],
    locale: "pt_BR",
    type: "website"
  }
};

export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#0d0a17" };

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IM+Fell+English+SC&family=IM+Fell+English:ital@0;1&family=Spectral:ital,wght@0,400;0,500;0,700;1,400&family=Cormorant+SC:wght@500;700&display=swap" />
      </head>
      <body>{children}</body>
    </html>
  );
}
