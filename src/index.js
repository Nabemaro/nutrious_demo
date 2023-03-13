import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddMeal from "./components/AddMeal/AddMeal";
import ViewMeals from "./components/ViewMeals/ViewMeals";
import Landing from "./components/Landing";
import MealCreator from "./components/MealCreator/MealCreator";
import LoginPage from "./components/Login/LoginPage";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/enterMeal" element={<AddMeal />} />
      <Route path="/viewMeals" element={<ViewMeals />} />
      <Route path="/mealCreator" element={<MealCreator />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
