const Navbar = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <header className="header fixed top-0 left-0 w-full z-[9999]">
      
      {/* Logo */}
      <div
        onClick={() => scrollTo('home')}
        className="w-12 h-12 sm:w-10 sm:h-10 rounded-lg bg-transparent
        items-center justify-center flex font-bold
        cursor-pointer"
      >
        <p className="blue-gradient_text text-xl sm:text-base">ZF</p>
      </div>

      {/* Navigation */}
      <nav className="flex text-lg gap-4 sm:gap-7 font-medium">
        <button
          onClick={() => scrollTo('about')}
          className="text-slate-100 hover:text-blue-500 transition text-sm sm:text-lg"
        >
          About
        </button>

        <button
          onClick={() => scrollTo('projects')}
          className="text-slate-100 hover:text-blue-500 transition text-sm sm:text-lg"
        >
          Projects
        </button>

        {/* <button
          onClick={() => scrollTo('contact')}
          className="text-slate-100 hover:text-blue-500 transition text-sm sm:text-lg"
        >
          Contact
        </button> */}
      </nav>
    </header>
  )
}

export default Navbar
