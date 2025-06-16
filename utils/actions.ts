"use server";
import prisma from "./db";
import { auth } from "@clerk/nextjs/server";
import { JobType, CreateAndEditJobType, createAndEditJobSchema } from "./types";
import { redirect } from "next/navigation";
import { Prisma } from "@/lib/generated/prisma";

// import dayjs from "dayjs";

async function authenticateAndRedirect(): Promise<string> {
  const { userId } = await auth();
  if (!userId) {
    redirect("/");
  }
  return userId;
}

export async function createJobAction(
  values: CreateAndEditJobType
): Promise<JobType | null> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const userId = await authenticateAndRedirect();
  try {
    createAndEditJobSchema.parse(values);
    const job: JobType = await prisma.job.create({
      data: {
        ...values,
        clerkId: userId,
      },
    });
    return job;
  } catch (error) {
    console.error(error);
    return null;
  }
}

//if we want to search in job pages ,we use ***getAllJobAction***

type GetAllJobAction = {
  search?: string;
  jobStatus?: string;
  page?: number;
  limit?: number;
};

export async function getAllJobAction({
  search,
  jobStatus,
  page = 1,
  limit = 10,
}: GetAllJobAction): Promise<{
  jobs: JobType[];
  count: number;
  page: number;
  totalPages: number;
}> {
  const userId = await authenticateAndRedirect();

  try {
    let whereClause: Prisma.JobWhereInput = {
      clerkId: userId,
    };
    if (search) {
      whereClause = {
        ...whereClause,
        OR: [
          { company: { contains: search } },
          { position: { contains: search } },
        ],
      };
    }
    if (jobStatus && jobStatus !== "all") {
      whereClause = {
        ...whereClause,
        status: jobStatus,
      };
    }
    const jobs: JobType[] = await prisma.job.findMany({
      where: whereClause,
      orderBy: {
        createdAt: "desc",
      },
    });
    return { jobs, count: 0, page: 1, totalPages: 0 };

  } catch (error) {
    console.error(error);
    return { jobs: [], count: 0, page: 1, totalPages: 0 };
  }
}
