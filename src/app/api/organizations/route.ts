import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/db";
import { organizations } from "@/db/schema";

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { id, name, slug } = body;

    if (!id || !name || !slug) {
      return NextResponse.json({ error: "Missing required fields: id, name, slug" }, { status: 400 });
    }

    // Insert the organization into the database
    const newOrganization = await db
      .insert(organizations)
      .values({
        id,
        name,
        slug,
        createdBy: userId,
      })
      .returning();

    return NextResponse.json(
      {
        message: "Organization created successfully",
        organization: newOrganization[0],
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating organization:", error);

    // Handle unique constraint violation
    if (error instanceof Error && error.message.includes("unique constraint")) {
      return NextResponse.json({ error: "Organization with this slug already exists" }, { status: 409 });
    }

    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
