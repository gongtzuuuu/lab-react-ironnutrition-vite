import "./App.css";
import foodsData from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";
import { Row, Divider, Button } from "antd";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// Add an id to each food
foodsData.forEach((eachFood) => {
  eachFood.id = uuidv4();
});

function App() {
  // Declare state of food - all food and displaying food
  const [allFood, setAllFood] = useState(foodsData);
  const [displayingFood, setDisplayingFood] = useState(foodsData);
  const [isHidden, setIsHidden] = useState(false);

  function createFood(newFood) {
    setAllFood([newFood, ...allFood]);
    setDisplayingFood([newFood, ...allFood]);
  }

  function searchFood(query) {
    const filteredFood = allFood.filter((eachFood) => {
      return eachFood.name.toLowerCase().includes(query.toLowerCase());
    });
    setDisplayingFood(filteredFood);
  }

  function deleteFood(id) {
    const updateFood = allFood.filter((currentFood) => {
      if (currentFood.id !== id) {
        return currentFood;
      }
    });
    setAllFood(updateFood);
    setDisplayingFood(updateFood);
  }

  return (
    <div className="App">
      <h1>Food List</h1>
      <AddFoodForm createFood={createFood} isHidden={isHidden} />

      <Button
        onClick={() => {
          setIsHidden(!isHidden);
        }}
      >
        {" "}
        {isHidden ? "Hide Form" : "Add New Food"}{" "}
      </Button>

      <Search searchFood={searchFood} />

      <Divider>Food List</Divider>
      <Row style={{ width: "100%", justifyContent: "center" }}>
        {displayingFood.map((eachFood) => {
          return <FoodBox food={eachFood} deleteFood={deleteFood} />;
        })}
      </Row>
    </div>
  );
}

export default App;
