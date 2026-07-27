import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
    try {
        const yields = await prisma.yield.findMany();
        const totalYield = yields.reduce((sum, y) => sum + y.amount, 0);
        return NextResponse.json({ totalYield });
    } catch (err) {
        return NextResponse.json(
            { error: 'Failed to fetch yield.' },
            { status: 500 }
        );
    }
}

export async function POST(request) {
    try {
        const { amount } = await request.json();
        const parsedAmount = parseFloat(amount);

        if (isNaN(parsedAmount) || parsedAmount < 0) {
            return NextResponse.json(
                { error: 'A valid positive yield amount is required.' },
                { status: 400 }
            );
        }

        await prisma.yield.create({
            data: { amount: parsedAmount }
        });

        const yields = await prisma.yield.findMany();
        const totalYield = yields.reduce((sum, y) => sum + y.amount, 0);
        return NextResponse.json({ totalYield });
    } catch (err) {
        return NextResponse.json(
            { error: 'Failed to log yield.' },
            { status: 500 }
        );
    }
}