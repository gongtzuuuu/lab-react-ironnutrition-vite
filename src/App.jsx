import "./App.css";
import foodsData from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import { Row, Divider, Button } from "antd";
import { useState } from "react";

function App() {
  const [food, setFood] = useState(foodsData);
  const [prevFood, setPrevFood] = useState(foodsData);
  //setPrevFood(foodsData);
  // console.log("newFood", newFood);

  return (
    <div className="App">
      <h1>Food List</h1>
      <AddFoodForm
        setFood={setFood}
        prevFood={prevFood}
        setPrevFood={setPrevFood}
      />

      <Button> Hide Form / Add New Food</Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>
      <Row style={{ width: "100%", justifyContent: "center" }}>
        {food.map((eachFood) => {
          return <FoodBox food={eachFood} />;
        })}
      </Row>
    </div>
  );
}

export default App;
