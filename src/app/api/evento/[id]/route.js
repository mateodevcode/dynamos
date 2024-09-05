import Evento from "@/models/evento";
import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  await connectMongoDB();
  try {
    const evento = await Evento.findById(params.id);
    if (!evento) {
      return NextResponse.json({ message: "Evento no encontrado" }, { status: 404 });
    }

    const formattedEvento = {
      ...evento.toObject(),
      fecha: new Date(evento.fecha).toLocaleDateString('es-ES', { year: 'numeric',  day: '2-digit',  month: '2-digit'}),
      createdAt: new Date(evento.createdAt).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' }),
      updatedAt: new Date(evento.updatedAt).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })
    };

    return NextResponse.json(formattedEvento);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}


export async function PUT(request, { params }) {
    await connectMongoDB();
    try {
      const data = await request.json();
      const updatedEvento = await Evento.findByIdAndUpdate(params.id, data, { new: true, runValidators: true });
      if (!updatedEvento) {
        return NextResponse.json({ message: "Evento no encontrado" }, { status: 404 });
      }
      return NextResponse.json(updatedEvento);
    } catch (error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
  }

export async function DELETE(request, { params }) {
    await connectMongoDB();
    try {
      const deletedEvento = await Evento.findByIdAndDelete(params.id);
      if (!deletedEvento) {
        return NextResponse.json({ message: "Evento no encontrado" }, { status: 404 });
      }
      return NextResponse.json({ message: "Evento eliminado con éxito" });
    } catch (error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }