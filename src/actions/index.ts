"use server";

import { prisma } from "@/lib/prismaClient";

export async function addToWaitlist(data: any) {
  try {
    const waitlist = await prisma.waitlist.create({
      data: {
        email: data.email,
        fullName: data.fullName,
        role: data.role,
        city: data.city,
        phone: data.phone,
        message: data.message,
      },
    });
    return { success: "Added to waitlist", waitlist };
  } catch (error) {
    console.error(error);
    return { error: "Failed to add to waitlist" };
  }
}
