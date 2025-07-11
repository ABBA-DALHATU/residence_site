"use server";

import { prisma } from "@/lib/prismaClient";
import { Prisma } from "@/generated/prisma";

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
    console.error("Detailed error:", error);

    // Check if error is a Prisma error object
    if (error instanceof Object && "code" in error) {
      if (error.code === "P2002") {
        return {
          error:
            "This email is already registered in our waitlist. Please use a different email address.",
        };
      }
    }

    return { error: "Failed to add to waitlist. Please try again later." };
  }
}
