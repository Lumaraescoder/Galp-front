import React from 'react';
import useSWR from 'swr';

import {
  Container,
  StyledTH,
  StyledTableCell,
  TableHeaderCell,
  TableHeaderRow,
  UserEmail,
  UserInfo,
  UserName
} from './TableDetailsStyled';
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const TableDetails = () => {
  const { data, error } = useSWR('https://galp-api.vercel.app/stakeholders', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const renderTableRows = data.map((user: any, index: any): any => (
    <tr key={index} className="hover:bg-gray-50">
      <StyledTH>
        <UserInfo>
          <UserName>{user.ceo}</UserName>
          <UserEmail>{user.company}</UserEmail>
        </UserInfo>
      </StyledTH>
      <StyledTableCell>{user.role}</StyledTableCell>
      <StyledTableCell>{user.businesstype}</StyledTableCell>
      <StyledTableCell>{user.email}</StyledTableCell>
    </tr>
  ));

  return (
    <Container>
      <div className="border-white-200 m-0 mt-5 overflow-hidden">
        <table className="w-full  text-left text-sm text-gray-500">
          <thead className="">
            <TableHeaderRow>
              <TableHeaderCell>&nbsp;Name</TableHeaderCell>
              <TableHeaderCell>&nbsp;Role</TableHeaderCell>
              <TableHeaderCell>&nbsp;Department</TableHeaderCell>
              <TableHeaderCell>&nbsp;Business</TableHeaderCell>
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

export default TableDetails;
