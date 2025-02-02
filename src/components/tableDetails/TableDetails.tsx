import React from 'react';

import { Container, StyledTableCell, TableHeaderCell, TableHeaderRow } from './TableDetailsStyled';

export const TableDetails = () => {
  const data = [
    {
      name: 'John Doe',
      role: 'Manager',
      department: 'Sales',
      email: 'john.doe@gmail.com'
    },
    {
      name: 'Jane Smith',
      role: 'Engineer',
      department: 'Engineering',
      email: 'jane.smith@gmail.com'
    },
    {
      name: 'Michael Johnson',
      role: 'Developer',
      department: 'IT',
      email: 'michael.johnson@gmail.com'
    },
    {
      name: 'Sarah Williams',
      role: 'Analyst',
      department: 'Finance',
      email: 'sarah.williams@gmail.com'
    }
  ];

  const renderTableRows = data.map((user: any, index: any): any => (
    <tr key={index} className="hover:bg-gray-50">
      <StyledTableCell>{user.name}</StyledTableCell>
      <StyledTableCell>{user.role}</StyledTableCell>
      <StyledTableCell>{user.department}</StyledTableCell>
      <StyledTableCell>{user.email}</StyledTableCell>
    </tr>
  ));

  return (
    <Container>
      <div id="wrapperTable" className="border-white-200 m-0 mt-5 overflow-hidden">
        <table className="w-full  text-left text-sm text-gray-500">
          <thead className="">
            <TableHeaderRow>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Role</TableHeaderCell>
              <TableHeaderCell>Department</TableHeaderCell>
              <TableHeaderCell>E-mail</TableHeaderCell>
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
