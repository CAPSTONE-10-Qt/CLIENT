import Swal from "sweetalert2";
import { AuthNotYetOAuthMessage } from "@utils/constants/alertMessage";

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
