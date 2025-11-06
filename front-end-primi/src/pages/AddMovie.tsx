import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useMovie } from "../data/Movies";
import { Input } from "../presentation/atomic/molecules/Input";
import { UploadInput } from "../presentation/atomic/organisms/UploadInput";
import {
  movieSchema,
  type MovieFormData,
} from "../presentation/validators/create-movie-schema";

import { Button } from "../presentation/atomic/atoms/Button";

export function AddMovie() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { createMovie, editMovie, findMovieById, movieById } = useMovie();
  const isEditable = Boolean(id);

  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    if (id) {
      findMovieById(id);
    }
  }, [id]);

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<MovieFormData>({
    resolver: zodResolver(movieSchema),
  });

  const onSubmit = async (data: MovieFormData) => {
    const payload = {
      title: data.title,
      description: data.description,
      releaseYear: Number(data.year),
      rating: Number(data.rating),
      imageUrl,
      locations: [
        {
          name: data.placeName,
          address: data.address,
          lat: Number(data.latitude || 0),
          lng: Number(data.longitude || 0),
          notes: data.notes,
        },
      ],
    };

    if (isEditable && id) {
      await editMovie(id, payload);
    } else {
      await createMovie(payload);
    }

    navigate("/");
  };

  useEffect(() => {
    if (isEditable && movieById) {
      reset({
        title: movieById.title || "",
        year: movieById.releaseYear?.toString() || "",
        rating: movieById.rating?.toString() || "",
        description: movieById.description || "",
        placeName: movieById.locations?.[0]?.name || "",
        address: movieById.locations?.[0]?.address || "",
        latitude: movieById.locations?.[0]?.lat?.toString() || "",
        longitude: movieById.locations?.[0]?.lng?.toString() || "",
        notes: movieById.locations?.[0]?.notes || "",
      });
      setImageUrl(movieById.imageUrl || "");
    }
  }, [movieById, isEditable, reset]);

  useEffect(() => {
    if (id) {
      findMovieById(id);
    } else {
      reset({
        title: "",
        year: "",
        rating: "",
        description: "",
        placeName: "",
        address: "",
        latitude: "",
        longitude: "",
        notes: "",
      });
      setImageUrl("");
    }
  }, [id, reset]);

  return (
    <div className="flex flex-wrap items-start justify-center md:flex-nowrap flex-row gap-10">
      <UploadInput
        onChange={(url) => setImageUrl(url)}
        value={id ? movieById?.imageUrl : imageUrl}
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full max-w-md"
      >
        <h2 className="text-lg font-semibold text-gray-100">
          {isEditable ? "Editar filme" : "Adicionar filme"}
        </h2>

        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <>
              <Input iconName="MdTitle" placeholder="Título" {...field} />
              {errors.title && (
                <span className="text-red-400 text-sm">
                  {errors.title.message}
                </span>
              )}
            </>
          )}
        />

        <Controller
          name="year"
          control={control}
          render={({ field }) => (
            <>
              <Input
                iconName="MdCalendarToday"
                placeholder="Ano de lançamento"
                {...field}
              />
              {errors.year && (
                <span className="text-red-400 text-sm">
                  {errors.year.message}
                </span>
              )}
            </>
          )}
        />

        <Controller
          name="rating"
          control={control}
          render={({ field }) => (
            <>
              <Input iconName="MdStar" placeholder="Avaliação" {...field} />
              {errors.rating && (
                <span className="text-red-400 text-sm">
                  {errors.rating.message}
                </span>
              )}
            </>
          )}
        />

        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <>
              <textarea
                {...field}
                placeholder="Descrição"
                className="border border-gray-500 text-gray-200 rounded-lg p-3 h-32"
              />
              {errors.description && (
                <span className="text-red-400 text-sm">
                  {errors.description.message}
                </span>
              )}
            </>
          )}
        />

        <h2 className="text-lg font-semibold text-gray-100">
          Local de Gravação
        </h2>

        <Controller
          name="placeName"
          control={control}
          render={({ field }) => (
            <>
              <Input
                iconName="MdPlace"
                placeholder="Nome do local"
                {...field}
              />
              {errors.placeName && (
                <span className="text-red-400 text-sm">
                  {errors.placeName.message}
                </span>
              )}
            </>
          )}
        />

        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <>
              <Input
                iconName="MdLocationOn"
                placeholder="Endereço"
                {...field}
              />
              {errors.address && (
                <span className="text-red-400 text-sm">
                  {errors.address.message}
                </span>
              )}
            </>
          )}
        />

        <Controller
          name="latitude"
          control={control}
          render={({ field }) => (
            <>
              <Input
                iconName="MdMap"
                placeholder="Latitude -23.561684"
                {...field}
              />
              {errors.latitude && (
                <span className="text-red-400 text-sm">
                  {errors.latitude.message}
                </span>
              )}
            </>
          )}
        />

        <Controller
          name="longitude"
          control={control}
          render={({ field }) => (
            <>
              <Input
                iconName="MdMap"
                placeholder="Longitude -46.656139"
                {...field}
              />
              {errors.longitude && (
                <span className="text-red-400 text-sm">
                  {errors.longitude.message}
                </span>
              )}
            </>
          )}
        />

        <Controller
          name="notes"
          control={control}
          render={({ field }) => (
            <>
              <Input iconName="MdNotes" placeholder="Observações" {...field} />
              {errors.notes && (
                <span className="text-red-400 text-sm">
                  {errors.notes.message}
                </span>
              )}
            </>
          )}
        />

        <div className="flex justify-end gap-3 mt-4">
          <Button variant="cancel" />
          <Button variant="save" />
        </div>
      </form>
    </div>
  );
}
