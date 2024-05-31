import styled from "styled-components";

const ContentCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid var(--green);
  padding: 0.2rem;
  width: 20rem;
  justify-content: center;
`;

export default function ContentCard({ img, title, description, price }) {
  return (
    <ContentCardDiv>
      <img src={img} />
      <h3>{title}</h3>
      <p>{description}</p>
      <h2>{price}</h2>
      <button>Buy Now!</button>
    </ContentCardDiv>
  );
}
