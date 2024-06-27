export default function ProgressBar({ text, percent }) {
  return (
    <>
      <div className="w-full mb-7">
        <label className="flex items-center justify-between">
          <span>{text}</span>
          <span>{percent}%</span>
        </label>
        <progress
          className="progress progress-info"
          value={percent}
          max="100"
        ></progress>
      </div>
    </>
  );
}
