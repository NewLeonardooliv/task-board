import { randomUUID } from 'crypto'
import { prisma } from './client'

async function main() {
  await prisma.profile.create({
    data: {
      id: randomUUID(),
      name: 'Admin'
    }
  });

  await prisma.profile.create({
    data: {
      id: randomUUID(),
      name: 'Developer'
    }
  });

  await prisma.profile.create({
    data: {
      id: randomUUID(),
      name: 'Guest'
    }
  });

  await prisma.profile.create({
    data: {
      id: randomUUID(),
      name: 'Reporter'
    }
  });

  await prisma.profile.create({
    data: {
      id: randomUUID(),
      name: 'Maintainer'
    }
  });
}

main();