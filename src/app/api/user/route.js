import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function GET() {
  connectMongoDB();
  const Users = await User.find();
  return NextResponse.json(Users);
}

export async function POST(request) {
  try {
    const data = await request.json();
    const nuevoUsuario = new User(data);
    const UsuarioGuardado = await nuevoUsuario.save();
    return NextResponse.json(UsuarioGuardado);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
