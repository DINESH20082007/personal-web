import React from 'react';

const Toast = ({ toasts }) => {
  return (
    <div className="toast-container" id="toastContainer" aria-live="assertive" aria-atomic="true">
      {toasts.map((toast) => (
        <div key={toast.id} className="toast show">
          <i
            className={`fa-solid ${
              toast.type === 'success' ? 'fa-circle-check toast-icon-success' : 'fa-circle-info toast-icon-info'
            } toast-icon`}
          ></i>
          <span className="toast-message">{toast.message}</span>
        </div>
      ))}
    </div>
  );
};

export default Toast;
