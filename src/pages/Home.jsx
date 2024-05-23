import React from "react";
import Calendars from "../components/Calendars";
import List from "../components/List";
import Form from "../components/Form";

const Home = () => {
  return (
    <div>
      <Form />
      <Calendars />
      <List />
    </div>
  );
};

export default Home;
