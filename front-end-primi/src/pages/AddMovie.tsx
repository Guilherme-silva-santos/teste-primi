import { zodResolver } from "@hookform/resolvers/zod";
import {
  movieSchema,
  type MovieFormData,
} from "presentation/validators/create-movie-schema";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { Input } from "../presentation/atomic/molecules/Input";
import { UploadInput } from "../presentation/atomic/organisms/UploadInput";

export function AddMovie() {
  const { id } = useParams();

  const isEditable = Boolean(id);

  const {
    handleSubmit,
    formState: { errors },
  } = useForm<MovieFormData>({
    resolver: zodResolver(movieSchema),
  });

  function onSubmit(data: MovieFormData) {
    console.log(data);
  }

  return (
    <div className="flex flex-wrap items-start justify-center md:flex-nowrap flex-row gap-10">
      <UploadInput onChange={() => {}} />

      <form className="flex flex-col gap-4 w-full max-w-md">
        <h2 className="text-lg font-semibold text-gray-100">
          {isEditable ? "Editar filme" : "Adicionar filme"}
        </h2>

        <Input
          iconName="MdTitle"
          placeholder="Título"
          onChange={() => {}}
          value=""
        />

        <Input
          iconName="MdCalendarToday"
          placeholder="Ano de lançamento"
          onChange={() => {}}
          value=""
        />

        <Input
          iconName="MdStar"
          placeholder="Avaliação"
          onChange={() => {}}
          value=""
        />

        <textarea
          placeholder="Descrição"
          className=" border border-gray-500 text-gray-200 rounded-lg p-3 h-32 "
        />

        <Input
          iconName="MdPlace"
          placeholder="Nome do local"
          onChange={() => {}}
          value=""
        />
        <Input
          iconName="MdLocationOn"
          placeholder="Endereço"
          onChange={() => {}}
          value=""
        />

        <Input
          iconName="MdMap"
          placeholder="Latitude"
          onChange={() => {}}
          value=""
        />

        <Input
          iconName="MdMap"
          placeholder="Longitude"
          onChange={() => {}}
          value=""
        />

        <Input
          iconName="MdNotes"
          placeholder="Observações"
          onChange={() => {}}
          value=""
        />

        <div className="flex justify-end gap-3 mt-4">
          <button
            type="button"
            className="text-gray-400 hover:text-gray-200 transition"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md transition"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}
