import { NextResponse } from "next/server";
import { prisma} from "@/utils/db";
import { createAndEditJobSchema } from "@/utils/types";
import { authenticateAndRedirect } from "@/utils/actions";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = createAndEditJobSchema.parse(body);
    const userId = await authenticateAndRedirect();

    const job = await prisma.job.create({
      data: {
        ...parsed,
        clerkId: userId,
      },
    });

    return NextResponse.json(job);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
