import { connectMongoDB } from "@/lib/mongodb";
import UserTeam from "@/models/userTeam";
import { NextResponse } from "next/server";

export async function GET() {
  connectMongoDB();
  const UsersTeam = await UserTeam.find();
  return NextResponse.json(UsersTeam);
}

export async function POST(req) {
  try {
    const data = await req.json();
    await connectMongoDB();
    await UserTeam.create(data);
    return NextResponse.json({ message: "Usuario registrado exitosamente." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Ha ocurrido un error al registrarse." },
      { status: 500 }
    );
  }
}