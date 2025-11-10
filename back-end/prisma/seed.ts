import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const streamingPlatforms = [
    {
      name: "Netflix",
      kind: "STREAMING",
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    },
    {
      name: "HBO Max",
      kind: "STREAMING",
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg",
    },
    {
      name: "Prime Video",
      kind: "STREAMING",
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png",
    },
    {
      name: "Disney+",
      kind: "STREAMING",
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg",
    },
    {
      name: "Apple TV+",
      kind: "STREAMING",
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/19/Apple_TV%2B_logo.svg",
    },
    {
      name: "Paramount+",
      kind: "STREAMING",
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/commons/5/56/Paramount%2B_logo.svg",
    },
    {
      name: "Star+",
      kind: "STREAMING",
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/Star%2B_logo.svg",
    },
    {
      name: "Globoplay",
      kind: "STREAMING",
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/commons/5/59/Globoplay_logo_2021.svg",
    },
    {
      name: "Crunchyroll",
      kind: "STREAMING",
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/commons/7/75/Crunchyroll_Logo.svg",
    },
    {
      name: "YouTube Premium",
      kind: "STREAMING",
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_Premium_logo_%282018%29.svg",
    },
  ];

  const platforms: { [key: string]: any } = {};
  for (const platform of streamingPlatforms) {
    const created = await prisma.platform.upsert({
      where: { name: platform.name },
      update: {},
      create: platform,
    });
    platforms[platform.name] = created;
  }

  const netflix = await prisma.platform.upsert({
    where: { name: "Netflix" },
    update: {},
    create: {
      name: "Netflix",
      kind: "STREAMING",
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    },
  });

  const hbo = await prisma.platform.upsert({
    where: { name: "HBO Max" },
    update: {},
    create: {
      name: "HBO Max",
      kind: "STREAMING",
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg",
    },
  });

  const action = await prisma.genre.upsert({
    where: { name: "Ação" },
    update: {},
    create: { name: "Ação" },
  });

  const sciFi = await prisma.genre.upsert({
    where: { name: "Ficção Científica" },
    update: {},
    create: { name: "Ficção Científica" },
  });

  const drama = await prisma.genre.upsert({
    where: { name: "Drama" },
    update: {},
    create: { name: "Drama" },
  });
  const inception = await prisma.movie.create({
    data: {
      title: "Inception",
      description:
        "Um ladrão que rouba segredos corporativos através do uso de tecnologia de compartilhamento de sonhos é encarregado de plantar uma ideia na mente de um CEO.",
      releaseYear: 2010,
      rating: 8.8,
      imageUrl: "https://m.media-amazon.com/images/I/51nbVEuw1HL._AC_.jpg",
      platforms: {
        create: [
          {
            platformId: netflix.id,
            url: "https://www.netflix.com/title/70131314",
          },
          {
            platformId: hbo.id,
            url: "https://www.hbomax.com/br/pt/feature/urn:hbo:feature:GXrG8DgHz8MQJrAEAAABV",
          },
        ],
      },
      genres: {
        create: [{ genreId: sciFi.id }, { genreId: action.id }],
      },
      locations: {
        create: [
          {
            name: "Paris",
            address: "França",
            lat: 48.8566,
            lng: 2.3522,
            notes: "Cena do dobrar da cidade.",
          },
          {
            name: "Los Angeles",
            address: "Estados Unidos",
            lat: 34.0522,
            lng: -118.2437,
            notes: "Cenas do sonho no hotel.",
          },
        ],
      },
    },
  });

  const matrix = await prisma.movie.create({
    data: {
      title: "The Matrix",
      description:
        "Um hacker descobre a verdadeira natureza de sua realidade e seu papel na guerra contra seus controladores.",
      releaseYear: 1999,
      rating: 8.7,
      imageUrl: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg",
      platforms: {
        create: [
          {
            platformId: netflix.id,
            url: "https://www.netflix.com/title/20557937",
          },
        ],
      },
      genres: {
        create: [{ genreId: sciFi.id }, { genreId: action.id }],
      },
      locations: {
        create: [
          {
            name: "Sydney",
            address: "Austrália",
            lat: -33.8688,
            lng: 151.2093,
            notes: "Cenas do prédio e perseguição.",
          },
        ],
      },
    },
  });

  const interstellar = await prisma.movie.create({
    data: {
      title: "Interstellar",
      description:
        "Um grupo de exploradores viaja através de um buraco de minhoca no espaço em uma tentativa de garantir a sobrevivência da humanidade.",
      releaseYear: 2014,
      rating: 8.6,
      imageUrl:
        "https://m.media-amazon.com/images/I/71n58VxqFjL._AC_SL1024_.jpg",
      platforms: {
        create: [
          {
            platformId: hbo.id,
            url: "https://www.hbomax.com/br/pt/feature/urn:hbo:feature:GXdZ4Nw6mE8LCwwEAAABU",
          },
        ],
      },
      genres: {
        create: [{ genreId: sciFi.id }, { genreId: drama.id }],
      },
      locations: {
        create: [
          {
            name: "Islândia",
            address: "Svínafellsjökull Glacier",
            lat: 64.0167,
            lng: -16.9667,
            notes: "Cenas dos planetas gelados.",
          },
        ],
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
