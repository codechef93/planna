import { confirmAlert } from "react-confirm-alert";

export const showAlert=(title, message)=>{
  confirmAlert({
    title: title,
    message: message,
    closeOnEscape: true,
    closeOnClickOutside: true,
    buttons: [
      {
        label: 'OK',
        className: 'error-ok-btn',
        onClick: () => {
        }
      }
    ]
  });
}