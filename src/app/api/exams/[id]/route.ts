import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const exam = await prisma.exam.findUnique({
    where: { id },
    include: { appointments: true },
  });
  if (!exam)
    return NextResponse.json({ error: 'Exam not found' }, { status: 404 });
  return NextResponse.json(exam);
}
