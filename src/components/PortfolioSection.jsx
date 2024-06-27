import PortfolioCard from "./PortfolioCard";

export default function PortfolioSection() {
    const projects = [
        {
            id: 1,
            name: "Eco Mart Shop",
            image: "/port1.png",
            link: "https://eco-mart.vercel.app",
        },
        {
            id: 2,
            name: "Buy and Sell Old or New Products",
            image: "/port2.png",
            link: "https://buy-sell-teamsaroar.vercel.app",
        },
        {
            id: 3,
            name: "DigiSkill Institute LMS (Next.js)",
            image: "/port3.png",
            link: "https://digiskill-institute.vercel.app",
        },
        {
            id: 4,
            name: "DigiSkill Institute LMS (MERN Stack)",
            image: "/port4.png",
            link: "https://www.digiskill-institute.com",
        },
    ]


  return (
    <>
        {/* portfolio section start */}
      <section className="py-20">
        <main className="px-5">
          <h6 className="text-[15px] font-medium text-brandColor uppercase text-center">
            Portfolio
          </h6>
          <h3 className="text-[27px] text-black font-medium mt-3 text-center">
            Some of my Recent Works
          </h3>

          <div className="mt-14">
            <div className="flex items-center justify-center gap-x-5 md:gap-x-10 text-sm md:text-[15px]">
              <a
                href="#"
                className="hover:underline hover:text-brandColor transition-all duration-300"
              >
                All
              </a>
              <a
                href="#"
                className="hover:underline hover:text-brandColor transition-all duration-300"
              >
                Web Design
              </a>
              <a
                href="#"
                className="hover:underline hover:text-brandColor transition-all duration-300"
              >
                Web Development
              </a>
              <a
                href="#"
                className="hover:underline hover:text-brandColor transition-all duration-300"
              >
                Wordpress
              </a>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-12 gap-5">
            {projects && projects.map((project)=> <PortfolioCard key={project.id} data={project} />)}
          </div>
        </main>
      </section>
      {/* portfolio section end */}
    </>
  )
}