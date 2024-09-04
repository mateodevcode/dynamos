import Podcast from "@/models/podcasts";
import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  try {
    const podcasts = await Podcast.find({});
    
    const formattedPodcasts = podcasts.map(podcast => ({
      ...podcast.toObject(),
      publishDate: new Date(podcast.publishDate).toLocaleDateString('es-ES', { year: 'numeric', month: 'long' }),
      updatedAt: new Date(podcast.updatedAt).toLocaleDateString('es-ES', { year: 'numeric', month: 'long' })
    }));

    return NextResponse.json(formattedPodcasts);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  await connectMongoDB();
  try {
    const data = await request.json();
    const newPodcast = new Podcast(data);
    const savedPodcast = await newPodcast.save();
    
    const formattedPodcast = {
      ...savedPodcast.toObject(),
      publishDate: new Date(savedPodcast.publishDate).toLocaleDateString('es-ES', { year: 'numeric', month: 'long' }),
      updatedAt: new Date(savedPodcast.updatedAt).toLocaleDateString('es-ES', { year: 'numeric', month: 'long' })
    };

    return NextResponse.json(formattedPodcast, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}