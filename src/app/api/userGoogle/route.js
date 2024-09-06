import UserGoogle from "@/models/userGoogle";
import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
    await connectMongoDB();
    try {
      const userGoogle = await UserGoogle.find({});
  
      return NextResponse.json(userGoogle);
    } catch (error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
