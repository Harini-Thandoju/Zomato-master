import React from "react";
import { useParams } from "react-router-dom";
import Delivery from "../components/Delivery";

function HomePage() {
  const { type } = useParams();
  console.log(type);
  return (
    <>
      <div className="my-5">{type === "delivery" && <Delivery />}</div>
      Hello
    </>
  );
}

export default HomePage;
