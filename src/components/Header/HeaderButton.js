export default function HeaderButton({ children }) {
  function handleClick() {
    console.log("Button clicked.");
  }

  return <button onClick={handleClick}>{children}</button>;
}
