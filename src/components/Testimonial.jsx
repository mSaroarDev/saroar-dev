export default function Testimonial() {
  return (
    <>
      <div className="w-full flex flex-col items-center mt-5">
        <div className="w-14 h-14 rounded-full overflow-hidden ring ring-brandColor">
          <img src="/saroar2.png" className="w-full h-full object-cover" />
        </div>

        <p className="text-xs text-gray-300 my-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s,
        </p>

        <h3 className="text-brandColor font-semibold text-[15px]">John Doe</h3>
        <p className="text-gray">Senior Manager, SkF Group</p>
      </div>
    </>
  );
}
