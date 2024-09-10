import { connectMongoDB } from "@/lib/mongodb";
import Testimonio from "@/models/testimonio";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    connectMongoDB();
    const TestimonioEncontrado = await Testimonio.findById(params.id);
    if (!TestimonioEncontrado)
      return NextResponse.json(
        {
          message: "Testimonio no encontrado",
        },
        {
          status: 404,
        }
      );
    return NextResponse.json(TestimonioEncontrado);
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
    const updatedTestimonio = await Testimonio.findByIdAndUpdate(
      params.id,
      data
    );
    if (!updatedTestimonio) {
      return NextResponse.json(
        { message: "Testimonio no encontrado" },
        { status: 404 }
      );
    }
    return NextResponse.json(updatedTestimonio);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const TestimonioEliminado = await Testimonio.findOneAndDelete({
      _id: params.id,
    });
    if (!TestimonioEliminado)
      return NextResponse.json(
        {
          message: "Testimonio no encontrado",
        },
        {
          status: 404,
        }
      );
    return NextResponse.json(TestimonioEliminado);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
