import React from 'react';
import useSWR from 'swr';

import Spinner from '../Spinner/Spinner';
import {
  AvatarWrapper,
  Container,
  FlexDiv,
  OnlineIndicator,
  StyledImg,
  StyledLink,
  StyledSvg,
  StyledTH,
  StyledTableCell,
  TableCell,
  TableHeaderCell,
  TableHeaderRow,
  UserEmail,
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
          <OnlineIndicator />
        </AvatarWrapper>
        <UserInfo>
          <UserName>{user.ceo}</UserName>
          <UserEmail>{user.email}</UserEmail>
        </UserInfo>
      </StyledTH>
      {/* <StyledTD>StyledTD>
        <StatusBadge>{user.cellphone}</StatusBadge>
      </StyledTD */}
      <StyledTableCell>{user.cellphone}</StyledTableCell>
      <StyledTableCell>{user.stakeholder}</StyledTableCell>
      <StyledTableCell>{user.business}</StyledTableCell>
      <TableCell>{/* <FlexDiv>{renderTeams(user.teams)}</FlexDiv> */}</TableCell>
      <TableCell>
        <FlexDiv></FlexDiv>
      </TableCell>
      <TableCell>
        <FlexDiv>
          <StyledLink href="#" title="Editar">
            <StyledSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </StyledSvg>
          </StyledLink>
          <StyledLink href="#" title="Excluir">
            <StyledSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18V9a1 1 0 011-1h10a1 1 0 011 1v9m-1 4a2 2 0 01-2 2H8a2 2 0 01-2-2v-2a2 2 0 012-2h6a2 2 0 012 2v2zM9 9h6M9 9a3 3 0 110-6 3 3 0 010 6zm6 0a3 3 0 110-6 3 3 0 010 6zm-6 0h6"
              />
            </StyledSvg>
          </StyledLink>
        </FlexDiv>
      </TableCell>
    </tr>
  ));

  return (
    <Container>
      <div className="border-white-200 m-0 mt-5 overflow-hidden  shadow-md">
        <table className="w-full  text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <TableHeaderRow>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>email</TableHeaderCell>
              <TableHeaderCell>StacekHolder</TableHeaderCell>
              <TableHeaderCell>Business</TableHeaderCell>
              <TableHeaderCell></TableHeaderCell>
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
