import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function GET() {
  connectMongoDB();
  const Users = await User.find();
  return NextResponse.json(Users);
}

export async function POST(request) {
  try {
    const { name, email, image, password, ocupacion } = await request.json();
    const hashedPassword = await bcrypt.hash(password, 10);

    await connectMongoDB();
    await User.create({
      name,
      email,
      image,
      password: hashedPassword,
      ocupacion,
    });
    return NextResponse.json({ message: "Usuario creado" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error al crear usuario" },
      { status: 500 }
    );
  }
}
