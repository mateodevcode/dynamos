import { ChakraProvider } from "@chakra-ui/react";
import "./globals.css";

export const metadata = {
  title: "Dynamos Movimientos",
  description: "iglesia,iglesia de camelot,iglesia de soledad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="light">
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
