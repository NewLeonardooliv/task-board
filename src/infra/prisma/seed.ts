import { prisma } from './client'

async function main() {
  await prisma.profile.create({
    data: {
      id: '52142986-2755-41e1-97a1-0eadef85fc8c',
      name: 'Admin'
    }
  });

  await prisma.profile.create({
    data: {
      id: 'c59f3ebb-16c8-43a2-8556-c3ccfa595dd4',
      name: 'Developer'
    }
  });

  await prisma.profile.create({
    data: {
      id: '589bd262-771f-4cac-8bc8-d8c2bccf2449',
      name: 'Guest'
    }
  });

  await prisma.profile.create({
    data: {
      id: '5f17259c-6044-4d9e-a419-df9e969169e7',
      name: 'Reporter'
    }
  });

  await prisma.profile.create({
    data: {
      id: 'f7f36bc7-c8a8-42c9-8ef6-48fd6865b36d',
      name: 'Maintainer'
    }
  });
}

main();