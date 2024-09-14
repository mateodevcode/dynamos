import "./globals.css";
import { AuthProvider } from "./Providers";
import { ChakraProvider } from '@chakra-ui/react'

export const metadata = {
  title: "Dynamos Movimientos",
  description:
    "Bienvenido a la Iglesia Dynamos, una comunidad cristiana vibrante en el Atlántico, Colombia. Únase a nosotros para adorar, aprender y crecer en la fe.",
  keywords:
    "Iglesia, Iglesia Cristiana, Atlántico, Colombia, Comunidad Cristiana, Servicios Religiosos, Fe, Adoración, Eventos Cristianos",
  ogTitle: "Iglesia Dynamos - Comunidad Cristiana en el Atlántico, Colombia",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="">
        <AuthProvider>
          <ChakraProvider>{children}</ChakraProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
