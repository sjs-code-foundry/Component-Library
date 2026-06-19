export default function HeaderButton({ onClick, children }) {
  // function handleClick() {
  //   console.log("Button clicked.");
  // }

  return <button onClick={onClick}>{children}</button>;
}
