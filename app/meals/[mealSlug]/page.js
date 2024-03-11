export default function MealDetailsPage({ params }) {
  return (
    <>
      <h1>Meal Details</h1>
      <h2>{params.mealSlug}</h2>
    </>
  );
}
