import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
    try {
        const crops = await prisma.crop.findMany({
            orderBy: { createdAt: 'desc' }
        });
        return NextResponse.json(crops);
    } catch (err) {
        return NextResponse.json(
            { error: 'Failed to fetch crops.' },
            { status: 500 }
        );
    }
}

export async function POST(request) {
    try {
        const { name, growth } = await request.json();

        if (!name || typeof name !== 'string' || !name.trim()) {
            return NextResponse.json(
                { error: 'A valid crop name is required.' },
                { status: 400 }
            );
        }
        if (!growth || typeof growth !== 'string' || !growth.trim()) {
            return NextResponse.json(
                { error: 'A valid growth time is required.' },
                { status: 400 }
            );
        }

        const newCrop = await prisma.crop.create({
            data: { name: name.trim(), growth: growth.trim() }
        });
        return NextResponse.json(newCrop, { status: 201 });
    } catch (err) {
        return NextResponse.json(
            { error: 'Failed to create crop.' },
            { status: 500 }
        );
    }
}