export default function TitleButton({ onClick, children }) {
  return (
    <button className="title-btn" onClick={onClick}>
      {children}
    </button>
  );
}
