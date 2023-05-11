import { Card, Col, Button } from "antd";

// Iteration 2
function FoodBox({ food, deleteFood }) {
  return (
    <Col>
      <Card title={food.name} style={{ width: 230, margin: 10 }}>
        <img src={food.image} height={60} alt="food" />
        <p>
          Calories: <b>{food.calories}</b>
        </p>
        <p>
          Servings: <b>{food.servings}</b>
        </p>
        <p>
          Total Calories: <b>{food.calories * food.servings}</b> kcal
        </p>
        <Button
          type="primary"
          onClick={() => {
            deleteFood(food.id);
          }}
        >
          {" "}
          Delete{" "}
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
