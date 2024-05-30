import GlobalStyles from './styles/GlobalStyles';

import picture from './assets/picture.svg';
import money from './assets/money.svg';
import turbo from './assets/turbo.svg';

import Card from './components/Card/Card';
import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

function App() {
  function followLink() {
    window.location.href = 'https://shvartsdenis-developer.netlify.app/';
  }
  return (
    <>
      <GlobalStyles />
      <FlexContainer>
        <Card
          header="Follow leading global markets"
          headerfs="l"
          text="Popular markets such as the S&P 500, the MSCI World of the FTSE 100 "
          img={picture}
          alt="pic"
        />
        <Card
          type="pink"
          header="Earn 5.12% Money market funds"
          headerfs="l"
          text="Low-risk, flexible, easy-to-use funds, average interest rate 5.12%"
          img={money}
          alt="money"
        />
        <Card
          type="primery"
          header="Portfolios built for you"
          text="Fill in our simple questionaire, and our investment managers will biuld and manage a low-cost portfolio that suits you"
          img={turbo}
          alt="turbo"
        />
        <Card
          header="Follow leading global markets"
          headerfs="l"
          text="Popular markets such as the S&P 500, the MSCI World of the FTSE 100 "
        />
        <Card
          type="primery"
          width="full"
          header="Portfolios built for you"
          headerfs="xl"
          text="Fill in our simple questionaire, and our investment managers will biuld and manage a low-cost portfolio that suits you"
          img={turbo}
          alt="turbo"
        />
      </FlexContainer>

      <Card
        width="small"
        header="Follow leading global markets"
        headerfs="sm"
        text="Popular markets such as the S&P 500, the MSCI World of the FTSE 100 "
        img={picture}
        alt="pic"
      />
      <Card
        type="pink"
        width="small"
        header="Earn 5.12% Money market funds"
        text="Low-risk, flexible, easy-to-use funds, average interest rate 5.12%"
        img={money}
        alt="money"
      />
      <Card
        type="primery"
        width="small"
        header="Portfolios built for you"
        headerfs="l"
        text="Fill in our simple questionaire, and our investment managers will biuld and manage a low-cost portfolio that suits you"
        img={turbo}
        alt="turbo"
        clickHandler={followLink}
      />
    </>
  );
}
export default App;
