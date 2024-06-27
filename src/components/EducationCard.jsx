export default function EducationCard({ name, description, subject, year }) {
  return (
    <>
      <div className="shadow border-l-[3px] border-blue-600 p-5">
        <h2 className="text-[16px] font-semibold">
          {name}{" "}
          <span className="text-sm text-gray-400 font-light">({year})</span>
        </h2>
        <p className="text-sm font-light my-3">{description}</p>
        <p className="bg-blue-600/10 text-blue-600 px-4 rounded-full mt-5 w-fit text-sm">
          {subject}
        </p>
      </div>
    </>
  );
}
