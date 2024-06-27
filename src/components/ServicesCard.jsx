import { Dribbble } from "lucide-react";
// import { Link } from 'react-router-dom';

export default function ServicesCard({icon, text, description, link}) {
  return (
    <>
      <div className="col-span-6 md:col-span-4 border border-borderColor p-5 md:p-7 rounded-md flex flex-col lg:flex-row items-start justify-start gap-5 hover:shadow transition-all duration-200">
        <div className="bg-blue-700/10 text-blue-700 min-w-14 min-h-14 flex items-center justify-center rounded-full">
          {icon}
        </div>
        <div>
          <h3 className="text-[18px] font-bold">{text}</h3>
          <p className="text-xs my-2">
            {description}
          </p>

          <a href={link} className="underline text-sm">
            Explore More
          </a>
        </div>
      </div>
    </>
  );
}
