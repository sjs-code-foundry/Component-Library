import { clsx } from "clsx";

export default function TitleButton({ className, onClick, children }) {
  return (
    <button className={clsx("title-btn", className)} onClick={onClick}>
      {children}
    </button>
  );
}
