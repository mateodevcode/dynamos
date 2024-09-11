// middleware.js
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const sessionToken = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const { pathname } = req.nextUrl;

  // Verificar si la ruta es /admin
  if (pathname.startsWith("/admin")) {
    // Si no hay sesión, redirigir a la página de login
    if (!sessionToken) {
      const loginUrl = new URL('/login', req.url); // Redirige a login si no está autenticado
      return NextResponse.redirect(loginUrl);
    }

    // Verificar si el correo del usuario es el del administrador
    const adminEmail = process.env.NEXT_AUTH_ADMIN_EMAIL; // Reemplaza con el correo del admin
    if (sessionToken.email !== adminEmail) {
      const notAllowedUrl = new URL('/', req.url); // Redirige al home si no es admin
      return NextResponse.redirect(notAllowedUrl);
    }
  }

  // Permitir continuar si está autenticado y es admin
  return NextResponse.next();
}
