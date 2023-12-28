import { useState  , useEffect} from "react"
import mobile from "./images/image-hero-desktop.png"
import desktop from "./images/image-hero-desktop.png"
import audiophile from "./images/client-audiophile.svg"
import databiz from "./images/client-databiz.svg"
import maker from "./images/client-maker.svg"
import meet from "./images/client-meet.svg"
import logo from "./images/logo.svg"
import chevronDown from "./images/icon-arrow-down.svg"
import chevronUp from "./images/icon-arrow-up.svg"
import menuOpen from "./images/icon-menu.svg"
import closeMenu from "./images/icon-close-menu.svg"
import todolist from "./images/icon-todo.svg"
import calendar from "./images/icon-calendar.svg"
import reminders from "./images/icon-reminders.svg"
import planning from "./images/icon-planning.svg"

function App() {
  const [openFeatures, setOpenFeatures] = useState(false)
  const [openCompany, setOpenCompany] = useState(false)
  const [scrolling, setScrolling] = useState(false);

  const handleOpenMenu = () => {
    const navbar = document.querySelector(".navbar")
    const menuButton = document.querySelector(".menu-button")

    navbar.classList.toggle("open")

    if (navbar.classList.contains("open")) {
      menuButton.src = closeMenu
    } else {
      menuButton.src = menuOpen
    }
  }

  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`bg-headerHover lg:fixed lg:top-0 left-0 right-0 p-5 flex items-center justify-between ${
          scrolling ? "bg-headerHover" : "bg-header"
        } transition-bg-color`}>
        <div className="lg:flex lg:items-start lg:justify-start">
          <img src={logo} alt="" className="lg:mr-12" />
          <nav className="navbar max-auto">
            <div className="ml-8">
              <button
                onClick={() => setOpenFeatures(!openFeatures)}
                className="flex items-center justify-start"
              >
                Features{" "}
                {openFeatures ? (
                  <img src={chevronUp} alt="" className="ml-2" />
                ) : (
                  <img src={chevronDown} alt="" className="ml-2" />
                )}
              </button>
              {openFeatures && (
                <ul className="mt-2 ml-3 lg:ml-0 lg:p-3 lg:shadow">
                  <li className="flex items-center justify-start text-sm mb-2">
                    <img src={todolist} alt="" className="mr-2" /> Todo List
                  </li>
                  <li className="flex items-center justify-start text-sm mb-2">
                    <img src={calendar} alt="" className="mr-2" /> Calendar
                  </li>
                  <li className="flex items-center justify-start text-sm mb-2">
                    <img src={reminders} alt="" className="mr-2" /> Reminders
                  </li>
                  <li className="flex items-center justify-start text-sm mb-2">
                    <img src={planning} alt="" className="mr-2" /> Planning
                  </li>
                </ul>
              )}
            </div>

            <div className="ml-8">
              <button
                onClick={() => setOpenCompany(!openCompany)}
                className="flex items-center justify-start"
              >
                Company{" "}
                {openCompany ? (
                  <img src={chevronUp} alt="" className="ml-2" />
                ) : (
                  <img src={chevronDown} alt="" className="ml-2" />
                )}
              </button>
              {openCompany && (
                <ul className="mt-2 ml-3 lg:ml-0 lg:p-3 lg:shadow">
                  <li className="flex items-center justify-start text-sm mb-2">
                    History
                  </li>
                  <li className="flex items-center justify-start text-sm mb-2">
                    Our Team
                  </li>
                  <li className="flex items-center justify-start text-sm mb-2">
                    Blog
                  </li>
                </ul>
              )}
            </div>
            <div className="mb-2 lg:mb-0 ml-8">
              <button>Careers</button>
            </div>
            <div className="ml-8">
              <button>About</button>
            </div>
          </nav>
        </div>

        <div className="lg:hidden">
          <button onClick={handleOpenMenu}>
            <img src={menuOpen} alt="" className="menu-button" />
          </button>
        </div>

        <div className="hidden lg:block">
          <button className="mr-10 opacity-75">Login</button>
          <button className="border-2 border-black opacity-75 px-6 py-2 rounded-2xl">
            Register
          </button>
        </div>
      </header>

      <section className="bg-section py-20 md:grid md:gap-10 md:grid-cols-2 md:place-items-center max-auto">
  

  <article className="md:order-2 text-center md:text-left px-5 xl:px-0 md:mt-0">
    <h1 className="font-bold text-4xl lg:text-6xl xl:text-7xl mb-5">
      Dummy Header
    </h1>
    <p className="mb-5">
      Get your team in sync, no matter your location. Streamline processes,
      create team rituals, and watch productivity soar. Get your team in sync, no matter your location. Streamline processes,
      create team rituals, and watch productivity soar. Get your team in sync, no matter your location. Streamline processes,
      create team rituals, and watch productivity soar.
    </p>
    <button className="bg-black rounded-lg shadow text-white font-bold hover:opacity-75 transition-all duration-150 pt-3 pb-2 px-6 cursor-pointer">
      Get Started
    </button>

    <ul className="grid grid-cols-4 gap-1 mt-10 place-items-center md:place-items-start">
      <li>
        <img src={databiz} alt="" className="w-16 md:w-24" />
      </li>
      <li>
        <img src={audiophile} alt="" className="w-16 md:w-24" />
      </li>
      <li>
        <img src={meet} alt="" className="w-16 md:w-24" />
      </li>
      <li>
        <img src={maker} alt="" className="w-16 md:w-24" />
      </li>
    </ul>
  </article>
  <article className="md:order-1 mt-10 md:mt-0 md:mr-5">
    <picture>
      <source media="(min-width: 768px)" srcSet={desktop} />
      <img src={mobile} alt="" className="w-full md:h-auto" />
    </picture>
  </article>
</section>



    
    </>
  )
}

export default App
