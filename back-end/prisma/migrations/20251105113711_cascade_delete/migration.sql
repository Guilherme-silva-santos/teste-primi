-- DropForeignKey
ALTER TABLE "public"."FilmingLocation" DROP CONSTRAINT "FilmingLocation_movieId_fkey";

-- AddForeignKey
ALTER TABLE "FilmingLocation" ADD CONSTRAINT "FilmingLocation_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;
