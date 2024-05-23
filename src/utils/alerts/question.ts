import Swal from "sweetalert2";
import { QuestionLoginToPinMessage } from "@utils/constants/alertMessage";

export const loginToPin = (onConfirm: () => void) =>
  Swal.fire({
    title: QuestionLoginToPinMessage.title,
    html: QuestionLoginToPinMessage.html,
    icon: "warning",
    color: "var(--color-black-0)",
    background: "var(--color-black-90)",
    iconColor: "var(--color-theme-main)",
    confirmButtonColor: "var(--color-theme-main)",
    cancelButtonColor: "var(--color-black-50)",
    showCancelButton: true,
    confirmButtonText: "확인",
    cancelButtonText: "취소",
    reverseButtons: true,
  }).then(res => {
    if (res.isConfirmed) onConfirm();
  });
