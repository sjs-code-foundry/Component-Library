import { clsx } from "clsx";

export default function HeaderButton({ className, onClick, children }) {
  // function handleClick() {
  //   console.log("Button clicked.");
  // }

  return (
    <button className={clsx(className)} onClick={onClick}>
      {children}
    </button>
  );
}
