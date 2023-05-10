import { Card, Col, Button } from "antd";

// Iteration 2
function FoodBox(props) {
  return (
    <Col>
      <Card
        title={props.food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={props.food.image} height={60} alt="food" />
        <p>
          Calories: <b>{props.food.calories}</b>
        </p>
        <p>
          Servings: <b>{props.food.servings}</b>
        </p>
        <p>
          Total Calories: <b>{props.food.calories * props.food.servings}</b>{" "}
          kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
