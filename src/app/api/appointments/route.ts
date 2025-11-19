import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

export async function GET() {
  const appts = await prisma.appointment.findMany({
    include: { exam: true },
    orderBy: { scheduledAt: 'desc' },
  });
  return NextResponse.json(appts);
}
