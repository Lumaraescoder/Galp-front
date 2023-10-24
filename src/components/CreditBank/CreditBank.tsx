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
`;
const SmallCards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
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
  max-width: 100%;
  height: auto;
  position: relative;
  top: 18px !important;
  left: -74px;
  width: 49px;
`;
const Total = styled.p`
  position: relative !important;
  top: -30px !important;
  color: #a5b3cd;
  font-size: 22px;
`;
const Value = styled.p`
  position: relative !important;
  top: -21px !important;
  font-size: 22px;
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
            <div>
              <Image src="/images/growth-svgrepo-com.svg"></Image>
              <Total>Total Profit</Total>
            </div>
            <div>
              <Value>$2,360.00</Value>
            </div>
          </LightCard>

          <LightCard>
            <div>
              <Image src="/images/growth-svgrepo-com.svg"></Image>
              <Total>Total Income</Total>
            </div>
            <div>
              <Value>$6,169.00</Value>
            </div>
          </LightCard>
        </SmallCards>
        <Steam />
      </Container>
    </Wrapper>
  );
};
export default CreditBank;
