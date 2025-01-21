import "./globals.css";
import Header from "@/components/Header/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header
        title="Bryson Davis" 
        description=""
        image=""
        url=""/>
      <body 
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
