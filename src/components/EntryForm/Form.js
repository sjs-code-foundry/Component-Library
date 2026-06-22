export default function Form({ children, onSubmit }) {
  function handleSubmit(formData) {
    onSubmit(formData);
  }

  return (
    <form action={handleSubmit}>
      {children}
      <button type="submit">Submit</button>
    </form>
  );
}
