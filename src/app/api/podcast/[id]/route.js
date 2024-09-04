import Podcast from "@/models/podcasts";
import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  await connectMongoDB();
  try {
    const podcast = await Podcast.findById(params.id);
    if (!podcast) {
      return NextResponse.json({ message: "Podcast no encontrado" }, { status: 404 });
    }

    podcast.publishDate = new Date(podcast.publishDate).toLocaleDateString('es-ES', { year: 'numeric', month: 'long' });
    podcast.updatedAt = new Date(podcast.updatedAt).toLocaleDateString('es-ES', { year: 'numeric', month: 'long' });

    return NextResponse.json(podcast);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  await connectMongoDB();
  try {
    const data = await request.json();
    const updatedPodcast = await Podcast.findByIdAndUpdate(params.id, data, { new: true, runValidators: true });
    if (!updatedPodcast) {
      return NextResponse.json({ message: "Podcast no encontrado" }, { status: 404 });
    }
    return NextResponse.json(updatedPodcast);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}

// export async function PATCH(request, { params }) {
//   await connectMongoDB();
//   try {
//     const data = await request.json();
//     const partialUpdatedPodcast = await Podcast.findByIdAndUpdate(params.id, data, { new: true, runValidators: true });
//     if (!partialUpdatedPodcast) {
//       return NextResponse.json({ message: "Podcast no encontrado" }, { status: 404 });
//     }
//     return NextResponse.json(partialUpdatedPodcast);
//   } catch (error) {
//     return NextResponse.json({ message: error.message }, { status: 400 });
//   }
// }

export async function DELETE(request, { params }) {
  await connectMongoDB();
  try {
    const deletedPodcast = await Podcast.findByIdAndDelete(params.id);
    if (!deletedPodcast) {
      return NextResponse.json({ message: "Podcast no encontrado" }, { status: 404 });
    }
    return NextResponse.json({ message: "Podcast eliminado con éxito" });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}