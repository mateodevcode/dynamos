import UserGoogle from "@/models/userGoogle";
import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
    await connectMongoDB();
    try {
      const userGoogle = await UserGoogle.find({});
  
      return NextResponse.json(userGoogle);
    } catch (error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }

export async function POST(request) {
    const { name, email, image } = await request.json();
    await connectMongoDB();
    await UserGoogle.create({ name, email, image });
    return NextResponse.json({ message: "Usuario creado" }, { status: 201 });
  }
