import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import UserGoogle from "@/models/userGoogle";

export async function GET(request, { params }) {
  await connectMongoDB();
  try {
    const userGoogle = await UserGoogle.findById(params.id);
    if (!userGoogle) {
      return NextResponse.json(
        { message: "Usuario no encontrado" },
        { status: 404 }
      );
    }
    return NextResponse.json(userGoogle);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  await connectMongoDB();
  try {
    const data = await request.json();
    const updatedUsuario = await UserGoogle.findByIdAndUpdate(params.id, data);
    if (!updatedUsuario) {
      return NextResponse.json(
        { message: "Usuario no encontrado" },
        { status: 404 }
      );
    }
    return NextResponse.json(updatedUsuario);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}

export async function DELETE(request, { params }) {
  await connectMongoDB();
  try {
    const deletedUserGoogle = await UserGoogle.findByIdAndDelete(params.id);
    if (!deletedUserGoogle) {
      return NextResponse.json(
        { message: "Usuario no encontrado" },
        { status: 404 }
      );
    }
    return NextResponse.json({ message: "Usuario eliminado con éxito" });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
