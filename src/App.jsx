import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { content } from "./components/contentData";
import ContentCard from "./components/ContentCard";
import "./App.css";
import styled from "styled-components";

console.log(content);

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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
      <ContentContainer>{renderContent()}</ContentContainer>
      <Footer />
    </>
  );
}

export default App;
