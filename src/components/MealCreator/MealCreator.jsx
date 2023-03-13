import { useState } from "react";
import { Button, Card, Form, ListGroup, Row } from "react-bootstrap";
import "./styles.scss";

export default function MealCreator() {
  const foods = [
    {
      name: "Apple",
      info: "healthy",
      calories: "95",
      sugar: "19g",
      protein: "0.5g",
      carbs: "25g"
    },
    {
      name: "Pear",
      info: "healthy",
      calories: "102",
      sugar: "17g",
      protein: "0.6g",
      carbs: "27g"
    },
    {
      name: "Potato",
      info: "healthy",
      calories: "163",
      sugar: "1.7g",
      protein: "4.3g",
      carbs: "37g"
    },
    {
      name: "Cheeseburger",
      info: "healthy",
      calories: "303",
      sugar: "5g",
      protein: "15g",
      carbs: "30g"
    },
    {
      name: "Hot Dog",
      info: "healthy",
      calories: "151",
      sugar: "0g",
      protein: "5g",
      carbs: "2.2g"
    },
    {
      name: "French Fries",
      info: "healthy",
      calories: "365",
      sugar: "0.4g",
      protein: "4g",
      carbs: "48g"
    },
    {
      name: "Blackberries",
      info: "healthy",
      calories: "62",
      sugar: "7g",
      protein: "2g",
      carbs: "14g"
    },
    {
      name: "Carrots",
      info: "healthy",
      calories: "30",
      sugar: "4g",
      protein: "0.5g",
      carbs: "7g"
    },
    {
      name: "Milkshake",
      info: "healthy",
      calories: "350",
      sugar: "56g",
      protein: "12g",
      carbs: "56g"
    },
    {
      name: "Coca-Cola",
      info: "healthy",
      calories: "138",
      sugar: "33g",
      protein: "0.3g",
      carbs: "35g"
    }
  ];
  const [item, setItem] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [meal, setMeal] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);
  const foodInfo = (item) => {
    if (item) {
      return (
        <Card style={{ width: "27rem", margin: "auto", height: 350 }}>
          <Card.Title>{item.name}</Card.Title>
          <Card.Body>
            <p>Calories: {item.calories}</p>
            <p>Carbohydrates: {item.carbs}</p>
            <p>Protein: {item.protein}</p>
            <p>Sugar: {item.sugar}</p>
          </Card.Body>
          <Card.Footer>
            <Button className="selectButton" onClick={() => addToMeal(item)}>
              Add to Meal
            </Button>
          </Card.Footer>
        </Card>
      );
    } else return null;
  };

  function MealBox() {
    let mealBody = null;
    if (meal.length === 0) {
      mealBody = <p>Your meal is empty</p>;
    } else {
      mealBody = (
        <>
          <Row>
            <p style={{ position: "absolute" }}>Item Name</p>
            <p style={{ marginLeft: "75%" }}>Quantity</p>
          </Row>
          {meal.map((x) => (
            <>
              <Row>
                <p style={{ position: "absolute" }}>{x.name}</p>
                <p style={{ marginLeft: "82%" }}>{x.quantity}</p>
              </Row>
            </>
          ))}
        </>
      );
    }
    return (
      <Card style={{ width: "27rem", margin: "auto", height: 350 }}>
        <Card.Title>New Meal</Card.Title>
        <Card.Body>{mealBody}</Card.Body>
        <Card.Footer>
          <p>Total Calories: {totalCalories}</p>
          <Button className="selectButton">Save Meal</Button>
        </Card.Footer>
      </Card>
    );
  }

  const addToMeal = (item) => {
    let mealCopy = [...meal];
    for (let i = 0; i < mealCopy.length; i++) {
      if (mealCopy[i].name === item.name) {
        mealCopy[i].quantity += 1;
        setMeal(mealCopy);
        setTotalCalories(totalCalories + parseInt(item.calories));
        return;
      }
    }
    mealCopy.push({
      name: item.name,
      quantity: 1
    });
    setMeal(mealCopy);
    setTotalCalories(totalCalories + parseInt(item.calories));
  };

  return (
    <div
      className="background"
      style={{ margin: "0 auto", display: "inline-block" }}
    >
      <Row>
        <MealBox meal={meal} />
        <Card style={{ width: "27rem", margin: "auto", height: 350 }}>
          <Card.Title>Meal Creator</Card.Title>
          <Form.Control
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <div style={{ height: 300, overflowY: "auto" }}>
            <ListGroup>
              {foods
                .filter((y) => y.name.includes(item))
                .map((x) => (
                  <ListGroup.Item onClick={() => setSelectedItem(x)}>
                    {x.name}
                  </ListGroup.Item>
                ))}
            </ListGroup>
          </div>
        </Card>
        {foodInfo(selectedItem)}
      </Row>
    </div>
  );
}
