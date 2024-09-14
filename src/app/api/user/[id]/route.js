import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";


export async function GET(request, { params }) {
  await connectMongoDB();
  try {
    const user = await User.findById(params.id);
    if (!user) {
      return NextResponse.json(
        { message: "Usuario no encontrado" },
        { status: 404 }
      );
    }
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  await connectMongoDB();
  try {
    const data = await request.json();
    const updatedUsuario = await User.findByIdAndUpdate(params.id, data);
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
    const deletedUser = await User.findByIdAndDelete(params.id);
    if (!deletedUser) {
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
