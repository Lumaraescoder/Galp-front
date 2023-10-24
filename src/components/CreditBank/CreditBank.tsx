import styled from 'styled-components';

import { Steam } from '../Graph/Graph';

const Wrapper = styled.div`
  padding: 20px;
`;

const Container = styled.div`
  display: flex;
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 764px) {
    flex-direction: column;
  }
`;
const SmallCards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: 415px;

  @media only screen and (max-width: 764px) {
    min-height: 200px;
    justify-content: center;
    gap: 20px;
  }
`;

const Card = styled.div`
  width: 283px;
  height: 142px;
  border-radius: 12px;
  background-color: #f6f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  font-family: Arial, sans-serif;
`;

const LightCard = styled(Card)`
  display: flex;
  flex-direction: row;
  gap: 10px;
  color: #333;
  height: 174px;
`;

export const Money = styled.i`
  font-size: 40px;
  color: #ea5b0b;
`;
const SingleLineText = styled.p`
  font-size: 26px;
  gap: 10px;
  font-weight: 600;
`;
const IconTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
`;
const Image = styled.img`
  width: 49px;
`;
const Total = styled.p`
  color: #a5b3cd;
  font-size: 20px;
`;
const Value = styled.p`
  top: -21px !important;
  font-size: 20px;
`;

const Label = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const CreditBank = () => {
  return (
    <Wrapper>
      <IconTextContainer>
        <Money className="fa fa-money" aria-hidden="true"></Money>
        <SingleLineText>Financies</SingleLineText>
      </IconTextContainer>

      <Container>
        <SmallCards>
          <LightCard>
            <Image src="/images/growth-svgrepo-com.svg"></Image>
            <Label>
              <Total>Total Profit</Total>
              <Value>$2,360.00</Value>
            </Label>
          </LightCard>

          <LightCard>
            <Image src="/images/growth-svgrepo-com.svg"></Image>
            <Label>
              <Total>Total Income</Total>
              <Value>$6,169.00</Value>
            </Label>
          </LightCard>
        </SmallCards>
        <Steam />
      </Container>
    </Wrapper>
  );
};
export default CreditBank;
