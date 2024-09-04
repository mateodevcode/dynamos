import { connectMongoDB } from "@/lib/mongodb";
import Podcast from "@/models/podcasts";
import { NextResponse } from "next/server";

export async function GET(request) {
  await connectMongoDB();

  const url = new URL(request.url);
  const limit = parseInt(url.searchParams.get('limit')) || 5;

  try {
    const recentPodcasts = await Podcast.getRecentPodcasts(limit);
    
    const formattedPodcasts = recentPodcasts.map(podcast => ({
      ...podcast.toObject(),
      publishDate: new Date(podcast.publishDate).toLocaleDateString('es-ES', { year: 'numeric', month: 'long' }),
      updatedAt: new Date(podcast.updatedAt).toLocaleDateString('es-ES', { year: 'numeric', month: 'long' })
    }));

    return NextResponse.json(formattedPodcasts);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
