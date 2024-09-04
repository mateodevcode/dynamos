import { connectMongoDB } from "@/lib/mongodb";
import Testimonio from "@/models/testimonio";
import { NextResponse } from "next/server";

export async function GET() {
  connectMongoDB();
  const Testimonios = await Testimonio.find();
  return NextResponse.json(Testimonios);
}

export async function POST(req) {
  try {
    const data = await req.json();
    await connectMongoDB();
    await Testimonio.create(data);
    return NextResponse.json({ message: "Se ha creado el testimonio correctamente." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Ha ocurrido un error al registrar el testimonio." },
      { status: 500 }
    );
  }
}