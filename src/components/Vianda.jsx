
export const Vianda = ({v}) => {
  return (
    <>
      <div className="bg-white rounded-md shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={v.foto}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            loading="lazy"
            alt={v.nombre}
          />
          <div className="p-2 absolute top-0 left-0 bg-emerald-700 rounded-br-md text-xs text-white font-primary tracking-wider font-semibold">{v.dia}</div>
        </div>
        <div className="p-3 sm:p-5 flex flex-col justify-between gap-2">
          <h3 className="text-lg sm:text-xl text-emerald-700 font-primary">{v.nombre}</h3>
          <p className="text-gray-600 text-lg sm:text-base line-clamp-1 ">{v.descripcion}</p>
          <p className="mt-2 text-md font-primary self-end">$<span className="underline underline-offset-6 decoration-primary">{Number(v.precio).toLocaleString('es-AR', {maximumFractionDigits: 0 })}</span></p>
          </div>
        </div>
    </>
  )
}