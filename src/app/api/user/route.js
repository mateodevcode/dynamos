import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import UserGoogle from "@/models/userGoogle";
import { NextResponse } from "next/server";

export async function GET() {
  connectMongoDB();
  const Users = await User.find();
  return NextResponse.json(Users);
}

export async function POST(request) {
  const { name, email } = await request.json();
  await connectMongoDB();
  await UserGoogle.create({ name, email });
  return NextResponse.json({ message: "Usuario creado" }, { status: 201 });
}
