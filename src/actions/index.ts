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
        // New landlord fields
        minPrice: data.minPrice ? Number(data.minPrice) : null,
        maxPrice: data.maxPrice ? Number(data.maxPrice) : null,
        paymentType: data.paymentType || null,
        landlordPropertyType: data.landlordPropertyType || null,
        bedrooms: data.bedrooms || null,
        bathrooms: data.bathrooms || null,
        toilets: data.toilets || null,
        livingRooms: data.livingRooms || null,
        stayDuration: data.stayDuration || null,
        propertyCondition: data.propertyCondition || null,
        furnishing: data.furnishing || null,
        amenities: data.amenities ? data.amenities.join(',') : null,
        houseRules: data.houseRules ? data.houseRules.join(',') : null,
        availability: data.availability || null,
      },
    });
    return { success: "Added to waitlist", waitlist };
  } catch (error) {
    console.error("Unexpected error:", error);

    // Handle known Prisma errors
    if (error instanceof Error) {
      if (error.name === "PrismaClientInitializationError") {
        return { error: "Database connection error. Please try again later." };
      }
      if (
        error.name === "PrismaClientKnownRequestError" &&
        "code" in error &&
        error.code === "P2002"
      ) {
        return { error: "This email is already registered in our waitlist." };
      }
    }

    return { error: "Failed to add to waitlist. Please try again later." };
  }
}
