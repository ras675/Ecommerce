import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";
import getCurrentUser from "@/actions/getCurrentUser";

export async function POST(request: Request) {
    const currentUser = await getCurrentUser();

    if (!currentUser || currentUser.role !== 'ADMIN') {
        return NextResponse.error();
    }

    const body = await request.json();
    const { name, description, price, category, inStock, image } = body;

    const product = await prisma.product.create({
        data: {
            name,
            description,
            price: parseFloat(price),
            category,
            inStock,
            image
        }
    });

    return NextResponse.json(product);
}
