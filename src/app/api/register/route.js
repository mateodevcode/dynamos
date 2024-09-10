import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { name, email, image } = await req.json();
    // const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    await User.create({ name, email, image});

    return NextResponse.json({ message: "Usuario registrado exitosamente." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Ha ocurrido un error al registrarse." },
      { status: 500 }
    );
  }
}
