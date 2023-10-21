export default function Label({name}:any) {
  return (
    <div>
      <label class="label">
        <span class="label-text">{name}</span>
      </label>
    </div>
  );
}
