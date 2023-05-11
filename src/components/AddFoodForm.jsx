import { Divider, Input } from "antd";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// Iteration 4
function AddFoodForm({ createFood, isHidden }) {
  // const [newFood, setNewFood] = useState();
  const [name, setFoodName] = useState("");
  const [image, setFoodImage] = useState("");
  const [calories, setFoodCalories] = useState(0);
  const [servings, setFoodServings] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    const newFood = {
      name,
      image,
      calories,
      servings,
      id: uuidv4(),
    };

    createFood(newFood);

    setFoodName("");
    setFoodImage("");
    setFoodCalories(0);
    setFoodServings(0);
  };

  return (
    <form onSubmit={handleSubmit} hidden={!isHidden}>
      <Divider>Add Food Entry</Divider>

      <label className="addFoodFormLabel">
        <p>Name: </p>
        <Input
          placeholder="Name:"
          value={name}
          name="name"
          type="text"
          onChange={(event) => {
            setFoodName(event.target.value);
          }}
        />
      </label>

      <label className="addFoodFormLabel">
        <p>Image: </p>
        <Input
          placeholder="Image:"
          value={image}
          name="image"
          type="text"
          onChange={(event) => {
            setFoodImage(event.target.value);
          }}
        />
      </label>

      <label className="addFoodFormLabel">
        <p>Calories:</p>
        <Input
          placeholder="Calories:"
          value={calories}
          name="calories"
          type="number"
          onChange={(event) => {
            setFoodCalories(event.target.value);
          }}
        />
      </label>

      <label className="addFoodFormLabel">
        <p>Servings</p>
        <Input
          placeholder="Servings:"
          value={servings}
          name="servings"
          type="number"
          onChange={(event) => {
            setFoodServings(event.target.value);
          }}
        />
      </label>

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
