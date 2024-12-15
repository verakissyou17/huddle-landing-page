import { StyledCard } from "./styles/Card.styled";
 function Card({item: {id, title, body, image}}) {
  return (
    <StyledCard layout={id % 2 !== 0 ? 'row-reverse' : 'row'}>
      <div>
        <img src={`./images/${image}`} alt={title} />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </StyledCard>
  )
}


export default Card;
