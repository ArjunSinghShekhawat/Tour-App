import Card from "./Card";

function Tours({ tours, removeHandler }) {
  return (
    <div className="max-w[1300px] mx-auto flex flex-col items-center gap-10">
      {/* HEADER SECTION  */}
      <div>
        <h1 className="text-5xl font-bold text-yellow-950">
          Plan With Arjun Singh
        </h1>
      </div>

      {/* ALL CARDS GIVEN DATA ONE BY ONE USING MAP FUNCTION */}
      <div className="w-[1300px] flex flex-wrap gap">
        {tours.map((tour) => {
          return <Card key={tour.id} {...tour} removeHandler={removeHandler}></Card>;
        })}
      </div>
    </div>
  );
}
export default Tours;