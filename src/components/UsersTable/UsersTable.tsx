import React from 'react';

import {
  Container,
  FlexDiv,
  StyledLink,
  StyledSvg,
  StyledTableCell,
  TableCell,
  TableHeaderCell,
  TableHeaderRow
} from './UsersTableStyled';

const data = [
  { name: 'João Ribeiro', role: 'MISA', email: 'joao.ribeiro@galp.pt' },
  { name: 'Ana Silva', role: 'MISA', email: 'ana.silva@galp.pt' },
  { name: 'Juliana Monteiro', role: 'Leadership', email: 'juliana.monteiro@galp.pt' },
  { name: 'Roberto Silva', role: 'Compliance', email: 'roberto.silva@galp.pt' }
];

const UsersTable = () => {
  const renderTableRows = data.map((user, index) => (
    <tr key={index} className="hover:bg-gray-50">
      <StyledTableCell>{user.name}</StyledTableCell>
      <StyledTableCell>{user.role}</StyledTableCell>
      <StyledTableCell>{user.email}</StyledTableCell>
      <TableCell>
        <FlexDiv></FlexDiv>
      </TableCell>
      <TableCell>
        <FlexDiv>
          <StyledLink title="Editar">
            <StyledSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </StyledSvg>
          </StyledLink>
        </FlexDiv>
      </TableCell>
    </tr>
  ));

  return (
    <Container>
      <div id="wrapperTable" className="border-white-200 m-0 mt-5 overflow-hidden">
        <table className="w-full text-left text-sm text-gray-500 shadow-none">
          <thead className="">
            <TableHeaderRow>
              <TableHeaderCell>&nbsp;Name</TableHeaderCell>
              <TableHeaderCell>&nbsp;Role</TableHeaderCell>
              <TableHeaderCell>&nbsp;E-mail</TableHeaderCell>
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

export default UsersTable;
