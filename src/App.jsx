import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {content} from "./components/contentData";
import ContentCard from "./components/ContentCard";
import "./App.css";

console.log(content)

function App() {
  function renderContent() {
    return (
      <>
        {content.map((item) => {
          return (
            <ContentCard
              key={item.title}
              img={item.img}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          );
        })}
      </>
    );
  }

  return (
    <>
      <Header />
      <h1>lorumipsumdolor</h1>
      <div>{renderContent()}</div>

      <Footer />
    </>
  );
}

export default App;
