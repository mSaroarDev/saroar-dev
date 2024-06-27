export default function CountCard({ extraClassname, text, value }) {
  return (
    <>
      <div className="col-span-6 md:col-span-3 py-10">
        <div
          className={`w-full flex flex-col items-center justify-center ${extraClassname}`}
        >
          <h3 className="font-bold text-[30px]">{value}+</h3>
          <p className="mt-3 text-sm font-light">{text}</p>
        </div>
      </div>
    </>
  );
}
