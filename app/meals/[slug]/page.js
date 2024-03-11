export default function DynamicMeal({ params }) {
  return (
    <>
      <h1>DynamicMeal</h1>
      <h2>{params.slug}</h2>
    </>
  );
}
