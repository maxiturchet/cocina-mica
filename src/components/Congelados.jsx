import { Congelado } from "../components/Congelado";

export const Congelados = () => {
  return (
    <section className="bg-[url('/fondo-mosaico.webp')] bg-fixed bg-cover">
      <div className="bg-gray-50/90">
        <div className="py-15 px-2 container mx-auto max-w-9xl ">
          <h2 className="font-bold text-3xl md:text-4xl font-sans text-gray-800 mb-10 text-center">
            Congelados <span className="text-secondary">Gluten Free</span>
          </h2>
          <section>
            <Congelado />
          </section>
        </div>
      </div>
    </section>
  );
}