import React, { useState } from "react";
import data from "./data";
import Tours from "./components/Tours";

const App = () => {

  // SET SATA IN TOUR VARIABLE
  const [tours, setTours] = useState(data);
  
  // REMOVE CARD ONE BY ONE
  function removeHandler(id) {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  }

  // REFERESH BUTTON HANDLE ALL CARD RENDER AGAIN
  function refereshHandler() {
    setTours(data);
  }
 
  // WHEN TOUR IS NOT PRESENT CONDITION
  if (tours.length === 0) {
    return (
      <div className=" w-[100vw] h-[100vh] flex justify-center items-center flex-col gap-10 text-3xl font-bold">
        <h1 className=" bg-purple-500 py-3 px-10 rounded text-white">Not Tour Left</h1>
        <button onClick={refereshHandler} className="text-white py-4 px-6 rounded hover:cursor-pointe shadow-lg shadow-black md:shadow-2xl  bg-purple-800 hover:bg-purple-500">Referesh</button>
      </div>
    );
  }
  
  //MAIN CONTENT
  return (
    <div >
      {/* TOURS COMPONENT */}
      <Tours tours={tours} removeHandler={removeHandler}></Tours>
    </div>
  );
};

export default App;
