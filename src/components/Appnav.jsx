import { useEffect, useState } from "react";

export default function Appnav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* navbar */}
      <div
        className={`w-full px-5 py-3 bg-white ${
          scrolled ? "navbar-scrolled fixed top-0 left-0 right-0 z-50 transition-all duration-300" : ""
        }`}
      >
        <main>
          <nav className="w-full flex items-center justify-between">
            <h1 className="font-semibold text-[25px]">Saroar<span className="text-red-500 font-bold">.</span></h1>

            <div className="menu__items hidden md:block">
              <ul>
                <a href="/">
                  <li className="nav__links">Homepage</li>
                </a>
                <a href="#about">
                  <li className="nav__links">About</li>
                </a>
                <a href="#services">
                  <li className="nav__links">Services</li>
                </a>
                <a href="#portfolio">
                  <li className="nav__links">Projects</li>
                </a>
                <a href="#blog">
                  <li className="nav__links">Blogs</li>
                </a>
              </ul>
            </div>

            <div className="hidden md:flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 text-brandColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <span>msaroar.dev@gmail.com</span>
            </div>

            {/* mobile nav */}
            <div className="drawer flex md:hidden items-center justify-end">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label
                  htmlFor="my-drawer"
                  className="drawer-button cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </label>
              </div>
              <div className="drawer-side z-50">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                  {/* Sidebar content here */}
                  <li>
                    <a>Sidebar Item 1</a>
                  </li>
                  <li>
                    <a>Sidebar Item 2</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </main>
      </div>
      {/* navbar end */}
    </>
  );
}
