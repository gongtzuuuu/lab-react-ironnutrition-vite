import "./App.css";
import foodsData from "./foods.json";
import FoodBox from "./components/FoodBox";
import { Row, Divider, Button } from "antd";

function App() {
  return (
    <div className="App">
      <h1>Food List</h1>

      <Button> Hide Form </Button>
      <Button> Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>
      <Row style={{ width: "100%", justifyContent: "center" }}>
        {foodsData.map((eachFood) => {
          return (
            <FoodBox
              food={{
                name: eachFood.name,
                calories: eachFood.calories,
                image: eachFood.image,
                servings: eachFood.servings,
              }}
            />
          );
        })}
      </Row>
    </div>
  );
}

export default App;
