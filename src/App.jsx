import "./App.css";
import foodsData from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";
import { Row, Divider, Button } from "antd";
import { useState } from "react";

function App() {
  // Declare state of food
  const [allFood, setAllFood] = useState(foodsData);
  const [displayingFood, setDisplayingFood] = useState(foodsData);
  // const [prevFood, setPrevFood] = useState(foodsData);

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

  return (
    <div className="App">
      <h1>Food List</h1>
      <AddFoodForm createFood={createFood} />

      <Button> Hide Form / Add New Food</Button>

      <Search searchFood={searchFood} />

      <Divider>Food List</Divider>
      <Row style={{ width: "100%", justifyContent: "center" }}>
        {displayingFood.map((eachFood) => {
          return <FoodBox food={eachFood} />;
        })}
      </Row>
    </div>
  );
}

export default App;
