function DeleteConfirmationDialog({ transaction, onCancel, onConfirm }) {
  if (!transaction) return null;

  return (
    <div className="delete-dialog-backdrop" onClick={onCancel}>
      <div
        className="delete-dialog"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="delete-dialog-title"
        aria-describedby="delete-dialog-description"
        onClick={(event) => event.stopPropagation()}
      >
        <h3 id="delete-dialog-title">Delete transaction?</h3>
        <p id="delete-dialog-description">
          Are you sure you want to delete this transaction? It can’t be recovered.
        </p>
        <div className="delete-dialog-actions">
          <button type="button" onClick={onCancel}>Cancel</button>
          <button type="button" className="delete-dialog-confirm" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmationDialog;
