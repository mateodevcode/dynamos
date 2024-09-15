import { connectMongoDB } from "@/lib/mongodb";
import Email from "@/models/suscribirse";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  await connectMongoDB();
  try {
    const email = await Email.findById(params.id);
    if (!email) {
      return NextResponse.json(
        { message: "Email no encontrado." },
        { status: 404 }
      );
    }
    return NextResponse.json(email);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  await connectMongoDB();
  try {
    const data = await request.json();
    const updatedEmail = await Email.findByIdAndUpdate(params.id, data);
    if (!updatedEmail) {
      return NextResponse.json(
        { message: "Email no encontrado." },
        { status: 404 }
      );
    }
    return NextResponse.json(updatedEmail);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}

export async function DELETE(request, { params }) {
  await connectMongoDB();
  try {
    const deletedEmail = await Email.findByIdAndDelete(params.id);
    if (!deletedEmail) {
      return NextResponse.json(
        { message: "Email no encontrado." },
        { status: 404 }
      );
    }
    return NextResponse.json({ message: "Email eliminado con exito." });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
