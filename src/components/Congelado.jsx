import OptimizedImage from "./OptimizedImage"

export const Congelado = () => {
  return (
    <>
    <section>
      <div className="w-1/3">
        <OptimizedImage
          src={'/milanesas.webp'}
          className="w-20 h-20"
          alt={'milanesas'}
        />
      </div>
    </section>
    </>
  )
}
