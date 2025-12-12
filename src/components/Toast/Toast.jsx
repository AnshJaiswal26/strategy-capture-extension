import { useExtensionStore } from "@store";
import "./Toast.css";

export default function ToastContainer({}) {
  const removeToast = useExtensionStore((s) => s.removeToast);
  const toasts = useExtensionStore((s) => s.toasts);

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast toast--${toast.type}`}>
          <span>{toast.message}</span>

          <button className="toast-close" onClick={() => removeToast(toast.id)}>
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
