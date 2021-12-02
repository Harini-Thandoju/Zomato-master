import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Redirect } from "react-router-dom";

// Hoc
import HomeLayoutHoc from "./HOC/Home.hoc";
import RestaurantLayoutHoc from "./HOC/Restaurant.hoc";

// Pages
import HomePage from "./pages/HomePage";
import RestaurantPage from "./pages/RestaurantPage";

function App() {
  return (
    <>
      <Redirect from="/" to="/delivery" />
      <HomeLayoutHoc path="/:type" exact component={HomePage} />
      <RestaurantLayoutHoc
        path="/restaurant/:id"
        exact
        component={RestaurantPage}
      />
    </>
  );
}

export default App;
