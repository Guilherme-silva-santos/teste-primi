import { IconButton } from "../presentation/atomic/atoms/IconButton";
import { RowDetail } from "../presentation/atomic/atoms/RowDetail";

export function MovieDetail() {
  // const { id } = useParams<{ id: string }>();

  return (
    <div className="flex flex-wrap items-center justify-center md:flex-nowrap flex-row gap-10 ">
      <img
        src="https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg"
        alt=""
        className="rounded-lg h-120 object-cover opacity-80"
      />
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3">
          <IconButton iconName="MdArrowBack" text="Voltar" />
          <h1 className="text-3xl font-bold text-gray-100 ">
            Homem-Aranha: Através do Aranhaverso
          </h1>
          <RowDetail title="Gênero:" description="Animação, Aventura, Ação" />
          <RowDetail title="Ano:" description="2023" />
          <RowDetail title="Classificação:" description="4.5 / 5" />
        </div>
        <div>
          <p className="text-gray-300 text-justify">
            Do cineasta Yorgos Lanthimos e da produtora Emma Stone, vem o conto
            incrível e a evolução fantástica de Bella Baxter (Stone), uma jovem
            mulher trazida de volta à vida pelo brilhante e pouco ortodoxo
            cientista Dr. Godwin Baxter (Willem Dafoe). Sob a proteção de
            Baxter, Bella está ansiosa para aprender. Faminta pela mundanidade
            que lhe falta, Bella foge com Duncan Wedderburn (Mark Ruffalo), um
            advogado astuto e depravado, em uma aventura relâmpago pelos
            continentes. Livre dos preconceitos de sua época, Bella se torna
            firme em seu propósito de defender a igualdade e a libertação. Do
            cineasta Yorgos Lanthimos e da produtora Emma Stone, vem o conto
            incrível e a evolução fantástica de Bella Baxter (Stone), uma jovem
            mulher trazida de volta à vida pelo brilhante e pouco ortodoxo
            cientista Dr. Godwin Baxter (Willem Dafoe). Sob a proteção de
            Baxter, Bella está ansiosa para aprender. Faminta pela mundanidade
            que lhe falta, Bella foge com Duncan Wedderburn (Mark Ruffalo), um
            advogado astuto e depravado, em uma aventura relâmpago pelos
            continentes. Livre dos preconceitos de sua época, Bella se torna
            firme em seu propósito de defender a igualdade e a libertação.
          </p>
        </div>
      </div>
    </div>
  );
}
