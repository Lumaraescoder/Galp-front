import React from 'react';
import useSWR from 'swr';

import {
  AvatarWrapper,
  Container,
  FlexDiv,
  StyledImg,
  StyledLink,
  StyledSvg,
  StyledTH,
  StyledTableCell,
  TableCell,
  TableHeaderCell,
  TableHeaderRow,
  UserInfo,
  UserName
} from './TableStyled';
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Table = () => {
  const { data, error } = useSWR('https://galp-api.vercel.app/stakeholders', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const renderTableRows = data.map((user: any, index: any): any => (
    <tr key={index} className="hover:bg-gray-50">
      <StyledTH>
        <AvatarWrapper>
          <StyledImg src={user.logo} alt="User Avatar" />
        </AvatarWrapper>
        <UserInfo>
          <UserName>{user.ceo}</UserName>
        </UserInfo>
      </StyledTH>
      <StyledTableCell>{user.business}</StyledTableCell>
      <StyledTableCell>12/12/2022</StyledTableCell>
      <StyledTableCell>{user.ceo}</StyledTableCell>
      <TableCell>
        <FlexDiv></FlexDiv>
      </TableCell>
      <TableCell>
        <FlexDiv>
          <StyledLink href="" title="Editar">
            <StyledSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </StyledSvg>
          </StyledLink>
          <StyledLink href="#" title="Excluir"></StyledLink>
        </FlexDiv>
      </TableCell>
    </tr>
  ));

  return (
    <Container>
      <div id="test" className="border-white-200 m-0 mt-5 overflow-hidden">
        <table className="w-full text-left text-sm text-gray-500 shadow-none">
          <thead className="">
            <TableHeaderRow>
              <TableHeaderCell>&nbsp;Name</TableHeaderCell>
              <TableHeaderCell>&nbsp;StakeHolders</TableHeaderCell>
              <TableHeaderCell>&nbsp;Last Edit</TableHeaderCell>
              <TableHeaderCell>&nbsp;Edited By</TableHeaderCell>
            </TableHeaderRow>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {renderTableRows}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default Table;
