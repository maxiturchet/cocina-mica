import { useState } from "react"

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    {/* // Menu pantalla < 640px */}
    <nav className="w-full flex justify-between p-2">
      <section className="w-full pl-7">
        <div className="text-lg font-medium tracking-wider">
          <span className="text-primary">Cocina </span> 
          <span className="text-secondary">Mica</span>
        </div>
      </section>
      <section className="w-1/2 flex justify-around m-auto">
        <a className="flex justify-self-end " href="carrito">
          <svg width="26" height="28">
            <use href="/sprite.svg#carrito" />
          </svg>
        </a>
        <button 
          onClick={()=>setIsOpen(!isOpen)}
          className="cursor-pointer">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
        </button>
      </section>
    </nav>


    {/* // Menu pantalla > 640px */}
    <nav className="flex w-full h-10 justify-between items-center invisible">
      <ul className="flex justify-around w-1/3">
        <li><a href="nosotros">Nosotros</a></li>
        <li><a href="contacto">Contacto</a></li>
      </ul>
      <ul className="flex w-1/6 justify-around">
        <li><a href="login">Entrar</a></li>
        <li>
          <a href="carrito">
            <svg width="26" height="28">
              <use href="/sprite.svg#carrito" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
    </>
  )
}
