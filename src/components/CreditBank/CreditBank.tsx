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
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  margin: 26px 21px;
`;

const DarkCard = styled(Card)`
  background-color: #333;
  color: #fff;
  height: 150px;
  position: relative;
  top: -36px;
`;

const LightCard = styled(Card)`
  background-color: #f6f0f0;
  color: #333;
  position: relative;
  top: 52px;
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
            <div>Total Profit</div>
            <div>$2,360.00</div>
          </DarkCard>

          <LightCard>
            <div>Total Income</div>
            <div>$6,169.00</div>
          </LightCard>
        </SmallCards>
        <Steam />
      </Container>
    </div>
  );
};
export default CreditBank;
