export default function Button({name}:any) {
  return (
    <div class={''}>
      <button name="_action" value="register" class="btn btn-primary">
        {name}
      </button>
    </div>
  );
}
