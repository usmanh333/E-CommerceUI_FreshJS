export default function Checkbox({ name }: any) {
  return (
    <div>
      <label className="label gap-2 justify-start cursor-pointer">
        <input type="checkbox" checked={true} className="checkbox" />
        <span className="label-text">{name}</span>
      </label>
    </div>
  );
}
