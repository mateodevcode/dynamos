import Evento from "@/models/evento";
import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  try {
    const eventos = await Evento.find({});

    const formatEventos = eventos.map(evento => ({
      ...evento.toObject(),
      fecha: new Date(evento.fecha).toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' }),
      createdAt: new Date(evento.createdAt).toLocaleDateString('es-ES', { year: 'numeric', month: 'long'}),
      updatedAt: new Date(evento.updatedAt).toLocaleDateString('es-ES', { year: 'numeric', month: 'long'})
    }));

    return NextResponse.json(formatEventos);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}


export async function POST(request) {
  await connectMongoDB();

  try {
    const data = await request.json();

    if (data.fecha) {
      const [day,month, year] = data.fecha.split("/");
      data.fecha = new Date(`${year}-${month}-${day}T00:00:00Z`);
    }

    const newEvento = new Evento(data);
    const savedEvento = await newEvento.save();

    const formatEvento = {
      ...savedEvento.toObject(),
      createdAt: new Date(savedEvento.createdAt).toLocaleDateString('es-ES', { year: 'numeric', month: 'long'}),
      updatedAt: new Date(savedEvento.updatedAt).toLocaleDateString('es-ES', { year: 'numeric', month: 'long'})
    };

    return NextResponse.json(formatEvento, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}