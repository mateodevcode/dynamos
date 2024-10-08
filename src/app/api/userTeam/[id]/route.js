import UserTeam from "@/models/userTeam";
import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    connectMongoDB();
    const UserEncontrado = await UserTeam.findById(params.id);
    if (!UserEncontrado)
      return NextResponse.json(
        {
          message: "Usuario no encontrado",
        },
        {
          status: 404,
        }
      );
    return NextResponse.json(UserEncontrado);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 404,
    });
  }
}

export async function PUT(request, { params }) {
  await connectMongoDB();
  try {
    const data = await request.json();
    const updatedUsuario = await UserTeam.findByIdAndUpdate(params.id, data);
    if (!updatedUsuario) {
      return NextResponse.json({ message: "Usuario no encontrado" }, { status: 404 });
    }
    return NextResponse.json(updatedUsuario);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}


export async function DELETE(request, { params }) {
  try {
    const UsuarioEliminado = await UserTeam.findOneAndDelete({"_id":params.id});
    if (!UsuarioEliminado)
      return NextResponse.json(
        {
          message: "Usuario no encontrado",
        },
        {
          status: 404,
        }
      );
    return NextResponse.json(UsuarioEliminado);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}