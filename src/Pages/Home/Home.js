import React from "react";
import Header from "../../Components/Header/Header";
import Word from "../../Components/Word/Word";
import Form from "../../Components/Form/Form";
import Footer from "../../Components/Footer/Footer";
const Home = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Word />
        <Form />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
