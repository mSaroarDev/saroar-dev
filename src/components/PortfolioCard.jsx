export default function PortfolioCard({ data }) {
  return (
    <>
      <div className="col-span-12 md:col-span-4 h-[270px] overflow-hidden relative">
        <img
          src={data?.image}
          alt=""
          className="hover:scale-105 transition-all duration-300 image-portfolio object-cover w-full h-full"
        />

        <div className="show-p-info">Hfdfjl</div>
      </div>
    </>
  );
}
