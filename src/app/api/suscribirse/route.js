import { connectMongoDB } from "@/lib/mongodb";
import Email from "@/models/suscribirse";
import { NextResponse } from "next/server";

export async function GET() {
  connectMongoDB();
  const emails = await Email.find();
  return NextResponse.json(emails);
}

export async function POST(req) {
  try {
    const data = await req.json();
    await connectMongoDB();
    await Email.create(data);
    return NextResponse.json({ message: "Se ha agregado el email correctamente." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Ha ocurrido un error al agregar el email." },
      { status: 500 }
    );
  }
}