import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: 'Blog de Tomas Lecuenis',
  description: 'Creado por Tomás Lecuenis'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-200">
        <Header />
        {children}
      </body>
    </html>
  );
}
