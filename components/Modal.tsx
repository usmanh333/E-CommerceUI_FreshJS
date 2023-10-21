export default function Modal() {
  const openModal = () => {
    const modal = document.getElementById("my_modal_3") as
      | HTMLDialogElement
      | null;
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <div>
      <button className="btn" onClick={openModal}>
        open modal
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box absolute top-8">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => {
                const modal = document.getElementById("my_modal_3") as
                  | HTMLDialogElement
                  | null;
                if (modal) {
                  modal.close();
                }
              }}
            >
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </div>
  );
}
