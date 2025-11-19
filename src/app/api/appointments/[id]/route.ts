import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const appt = await prisma.appointment.findUnique({
    where: { id },
    include: { exam: true },
  });
  if (!appt)
    return NextResponse.json(
      { error: 'Appointment not found' },
      { status: 404 }
    );
  return NextResponse.json(appt);
}
