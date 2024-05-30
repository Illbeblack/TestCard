import styled, { css } from 'styled-components';
import CardHeader from '../ui/CardHeader';
import CardImg from '../ui/CardImg';
import CardText from '../ui/CardText';

const StyledCard = styled.div`
  position: relative;
  margin: 5rem;

  min-height: 18.5rem;
  width: 40rem;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  border-radius: 1.2rem;
  padding: 3.2rem;
  color: var(--color-white);

  background-color: var(--color-blue-primery);
  box-shadow: var(--shadow-primery);

  transition: ease-in-out 0.3s;
  cursor: pointer;
  ${(props) =>
    props.type === 'pink' &&
    css`
      background-color: var(--color-pink-additional);
      box-shadow: var(--shadow-pink);
    `}
  ${(props) =>
    props.type === 'primery' &&
    css`
      background: linear-gradient(
        to right,
        var(--color-blue-primery) 1rem,
        var(--color-white) 1rem
      );
      box-shadow: var(--shadow-gray);
      color: var(--color-black);
    `}
  ${(props) =>
    props.width === 'full' &&
    css`
      width: 82.4rem;
    `}
  ${(props) =>
    props.width === 'small' &&
    css`
      max-width: 37.5rem;
    `}


    &:hover {
    transform: scale(1.2);
  }
`;

function Card({ type, width, header, headerfs, text, clickHandler, ...props }) {
  return (
    <StyledCard type={type} width={width} onClick={(e) => clickHandler()}>
      <CardHeader headerfs={headerfs}>{header}</CardHeader>
      <CardText>{text}</CardText>
      {props.img && props.alt && <CardImg src={props.img} alt={props.alt} />}
    </StyledCard>
  );
}

export default Card;
