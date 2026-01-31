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
        className="w-10 h-10 rounded-lg bg-transparent
        items-center justify-center flex font-bold
        cursor-pointer"
      >
        <p className="blue-gradient_text">ZF</p>
      </div>

      {/* Navigation */}
      <nav className="flex text-lg gap-7 font-medium">
        <button
          onClick={() => scrollTo('about')}
          className="text-slate-100 hover:text-blue-500 transition"
        >
          About
        </button>

        <button
          onClick={() => scrollTo('projects')}
          className="text-slate-100 hover:text-blue-500 transition"
        >
          Projects
        </button>

        {/* <button
          onClick={() => scrollTo('contact')}
          className="text-slate-100 hover:text-blue-500 transition"
        >
          Contact
        </button> */}
      </nav>
    </header>
  )
}

export default Navbar
