import Swal from "sweetalert2";
import {
  AuthLoginToUseMessage,
  AuthNotYetOAuthMessage,
} from "@utils/constants/alertMessage";

export const loginToUse = (onConfirm: () => void) =>
  Swal.fire({
    title: AuthLoginToUseMessage.title,
    html: AuthLoginToUseMessage.html,
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

export const notYetOAuth = () =>
  Swal.fire({
    title: AuthNotYetOAuthMessage.title,
    html: AuthNotYetOAuthMessage.html,
    icon: "warning",
    color: "var(--color-black-0)",
    background: "var(--color-black-90)",
    iconColor: "var(--color-theme-main)",
    confirmButtonColor: "var(--color-theme-main)",
    confirmButtonText: "확인",
  }).then(res => {});
