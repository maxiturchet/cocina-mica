import { Congelado } from "../components/Congelado";

export const Congelados = () => {
  return (
    <section className="bg-[url('/fondo-congelados.webp')] bg-top-left">
      <div className="bg-black/40 ">
        <div className="py-15 lg:px-20 px-5">
          <h2 className="font-bold text-3xl md:text-4xl font-sans text-gray-300 mb-10 text-center">
            Congelados <span className="text-secondary">Gluten Free</span>
          </h2>
          <section className="flex flex-col lg:flex-row gap-10 items-center lg:justify-around">
            <Congelado nombre="Milanesas" precio="$30.000 (x kg)" img="milanesas.webp"/>
            <Congelado nombre="Chipa Relleno" precio="$12.000 (c/u)" img="/chipa.webp"/>
            <Congelado nombre="Viandas" precio="$12.000 (c/u)" img="/vianda.webp"/>
          </section>
        </div>
      </div>
    </section>
  );
}