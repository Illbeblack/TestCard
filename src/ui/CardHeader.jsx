import styled, { css } from 'styled-components';

const CardHeader = styled.h2`
  line-height: 4.4rem;
  font-size: 2.4rem;

  ${(props) =>
    props.headerfs === 'sm' &&
    css`
      font-size: 1.8rem;
    `}
  ${(props) =>
    props.headerfs === 'l' &&
    css`
      font-size: 3.2rem;
    `}
  ${(props) =>
    props.headerfs === 'xl' &&
    css`
      font-size: 4.8rem;
    `}
`;

export default CardHeader;
