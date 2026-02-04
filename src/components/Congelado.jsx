import OptimizedImage from "./OptimizedImage"

export const Congelado = ({nombre, precio, img}) => {
  return (
    <>
    <section className="lg:w-1/4 md:w-1/2">
      <div className="flex justify-center pb-5">
        <OptimizedImage
          src={img}
          className="w-20 h-20"
          alt={{nombre}}
        />
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl text-center font-bold text-secondary">{nombre}</h2>
        <p className="text-2xl text-gray-300 font-bold text-center">{precio}</p>
      </div>
    </section>
    </>
  )
}
