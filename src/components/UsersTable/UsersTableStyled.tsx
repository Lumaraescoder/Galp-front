import styled from 'styled-components';

export const TableHeaderRow = styled.tr`
  /* background-color: #f7fafc; */
`;

export const TableHeaderCell = styled.th`
  padding: 1rem;
  font-weight: bold;
  color: #333;
  font-size: 18px;
`;

export const StyledTH = styled.th`
  font-size: 18px;
  white-space: nowrap;
  display: flex;
  gap: 12px;
  padding: 24px;
  font-weight: normal;
  color: #111827;
`;

export const AvatarWrapper = styled.div`
  position: relative;
  height: 40px;
  width: 40px;
`;

export const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  object-fit: contain;
  object-position: center;
`;

export const OnlineIndicator = styled.span`
  position: absolute;
  right: 0;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: #10b981;
  box-shadow: 0 0 0 2px white;
`;

export const UserInfo = styled.div`
  font-size: 0.875rem;
`;

export const UserName = styled.div`
  font-weight: 500;
  color: #374151;
  font-size: 21px;
  margin: 9px 3px;
`;

export const UserEmail = styled.div`
  color: #9ca3af;
`;

export const StyledTD = styled.td`
  font-size: 18px;
  white-space: nowrap;
  padding: 24px;
`;

export const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  border-radius: 9999px;
  background-color: #dcffe4;
  padding: 8px 16px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #059669;
`;

export const StatusIndicator = styled.span`
  height: 6px;
  width: 6px;
  border-radius: 50%;
  background-color: #059669;
`;

export const StyledTableCell = styled.td`
  padding: 24px 24px;
  white-space: nowrap;

  font-size: 18px;
`;

export const TableCell = styled.td`
  padding: 24px;
`;
export const TableContainer = styled.td`
  white-space: nowrap;

  &:hover {
    /* box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2); */
  }
`;

export const FlexDiv = styled.div`
  display: flex;
  gap: 8px;
`;
type RoundSpanProps = {
  bgColor?: string;
  textColor?: string;
};

export const RoundSpan = styled.span<RoundSpanProps>`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  border-radius: 9999px;
  padding: 8px;
  font-size: 12px;
  font-weight: 600;
  background-color: ${(props) => props.bgColor || '#FFF'};
  color: ${(props) => props.textColor || '#000'};
`;

export const StyledLink = styled.a``;

export const StyledSvg = styled.svg`
  height: 24px;
  width: 24px;
  fill: none;
  stroke-width: 1.5;
  stroke: currentColor;
`;
export const Container = styled.div`
  width: 100%;
  padding: 30px 0 0;
  font-size: 18px;

  @media only screen and (max-width: 764px) {
    #wrapperTable {
      overflow-x: scroll;
    }
`;
