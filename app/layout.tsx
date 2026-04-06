import type { Metadata, Viewport } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#34A853",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Grupo Nossa Farmácia | O Futuro da Farmácia em Portugal",
  description: "Junte-se ao maior grupo de farmácias de Portugal. Poder de negociação, marketing centralizado, formação e tecnologia para o seu negócio crescer.",
  keywords: ["farmácia", "grupo farmácias", "parceria farmácia", "Portugal", "saúde"],
  authors: [{ name: "Grupo Nossa Farmácia" }],
  creator: "Grupo Nossa Farmácia",
  publisher: "Grupo Nossa Farmácia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://nossafarmacia.pt",
    title: "Grupo Nossa Farmácia | O Futuro da Farmácia em Portugal",
    description: "Junte-se ao maior grupo de farmácias de Portugal. Poder de negociação, marketing centralizado, formação e tecnologia.",
    siteName: "Grupo Nossa Farmácia",
    images: [
      {
        url: "https://nossafarmacia.vtexassets.com/assets/vtex.file-manager-graphql/images/f432f301-b5fa-4453-aa24-22ea02396e16___13e59f7056915bc23b198375758778f6.png",
        width: 1200,
        height: 630,
        alt: "Grupo Nossa Farmácia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grupo Nossa Farmácia | O Futuro da Farmácia em Portugal",
    description: "Junte-se ao maior grupo de farmácias de Portugal.",
    images: ["https://nossafarmacia.vtexassets.com/assets/vtex.file-manager-graphql/images/f432f301-b5fa-4453-aa24-22ea02396e16___13e59f7056915bc23b198375758778f6.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT" className="scroll-smooth">
      <head>
        <link 
          rel="icon" 
          type="image/svg+xml" 
          href="https://nossafarmacia.vtexassets.com/assets/vtex.file-manager-graphql/images/b024c86e-9f88-4f27-b201-a37ce4b1f88d___a54a39ce545532ee7bd6250d74466acb.svg" 
        />
        <link rel="apple-touch-icon" href="https://nossafarmacia.vtexassets.com/assets/vtex.file-manager-graphql/images/b024c86e-9f88-4f27-b201-a37ce4b1f88d___a54a39ce545532ee7bd6250d74466acb.svg" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}