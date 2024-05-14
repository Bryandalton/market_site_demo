import styled from "styled-components"

const ContentCardDiv = styled.div`

`


export default function ContentCard({img, title, description, price}) {
    return(
        <ContentCardDiv>
            <img src={img} />
            <h3>{title}</h3>
            <p>{description}</p>
            <h2>{price}</h2>
            <button>Buy Now!</button>
        </ContentCardDiv>
    )
}