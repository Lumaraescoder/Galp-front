import styled from 'styled-components';

import { Steam } from '../Graph/Graph';
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const SmallCards = styled.div`
  flex-direction: column;
  margin-top: 80px;
`;
const Card = styled.div`
  width: 283px;
  height: 142px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  font-family: Arial, sans-serif;
  border: 1px solid #e0e0e0;
  margin: 26px 21px;
`;

const DarkCard = styled(Card)`
  background-color: #090d1f;
  color: #fff;
  height: 174px;
  position: relative;
  top: -9px;
`;

const LightCard = styled(Card)`
  background-color: #f6f0f0;
  color: #333;
  height: 174px;
  position: relative;
  top: 30px;
`;

export const Money = styled.i`
  font-size: 40px;
  color: #ea5b0b;
  margin: 0px 17px;
  position: relative;
  top: 20px;
`;
const SingleLineText = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 26px;
  gap: 10px;
  position: relative;
  top: 20px;
  font-weight: 600;
`;
const IconTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Image = styled.img`
  max-width: 100%;
  height: auto;
  position: relative;
  top: 18px !important;
  left: -74px;
  width: 49px;
`;
const Image2 = styled.img`
  max-width: 100%;
  height: auto;
  position: relative;
  top: 23px;
  left: -74px;
  width: 49px;
`;
const Total = styled.p`
  position: relative !important;
  top: -29px !important;
  color: #a5b3cd;
`;
const Value = styled.p`
  position: relative !important;
  top: -23px !important;
  color: white;
`;
const Total2 = styled.p`
  position: relative !important;
  top: -30px !important;
  color: #a5b3cd;
`;
const Value2 = styled.p`
  position: relative !important;
  top: -21px !important;
`;
const CreditBank = () => {
  return (
    <div>
      <IconTextContainer>
        <Money className="fa fa-money" aria-hidden="true"></Money>
        <SingleLineText>Crédito bancário</SingleLineText>
      </IconTextContainer>

      <Container>
        <SmallCards>
          <DarkCard>
            <div>
              <Image src="/images/growth-svgrepo-com.svg"></Image>
              <Total>Total Profit</Total>
            </div>
            <div>
              <Value>$2,360.00</Value>
            </div>
          </DarkCard>

          <LightCard>
            <div>
              <Image2 src="/images/growth-svgrepo-com.svg"></Image2>
              <Total2>Total Income</Total2>
            </div>
            <div>
              <Value2>$6,169.00</Value2>
            </div>
          </LightCard>
        </SmallCards>
        <Steam />
      </Container>
    </div>
  );
};
export default CreditBank;
