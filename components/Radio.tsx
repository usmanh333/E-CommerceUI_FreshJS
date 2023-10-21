export default function Radio({ checked }: any) {
  return (
    <div class={'form-control'}>
      <input type="radio" name="radio-1" className="radio" checked={checked} />
    </div>
  );
}
