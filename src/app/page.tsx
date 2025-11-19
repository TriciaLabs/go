import { prisma } from '../lib/prisma';

export default async function Home() {
  const exams = await prisma.exam.findMany();

  return (
    <div>
      <h1>GET DOS EXAMES</h1>
      <p>{JSON.stringify(exams, null, 2)}</p>
    </div>
  );
}
