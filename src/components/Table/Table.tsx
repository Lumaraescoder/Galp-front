import Link from 'next/link';
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
// interface UserData {
//   _id: string;
// }

const Table = () => {
  const { data, error } = useSWR('https://galp-api.vercel.app/stakeholders', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  // const deleteUser = async (userId: string) => {
  //   try {
  //     const response = await fetch(`https://galp-api.vercel.app/stakeholders/${userId}`, {
  //       method: 'DELETE'
  //     });

  //     if (!response.ok) {
  //       throw new Error('Server-side deletion failed.');
  //     }

  //     const updatedData: UserData[] = data.filter((user: UserData) => user._id !== userId);

  //     mutate('https://galp-api.vercel.app/stakeholders', updatedData, false);
  //   } catch (error) {
  //     console.error('Error deleting user:', error);
  //   }
  // };

  const renderTableRows = data.map((user: any, index: any): any => (
    <tr key={index} className="hover:bg-gray-50">
      <StyledTH>
        <AvatarWrapper>
          <StyledImg src={user.logo} alt="User Avatar" />
        </AvatarWrapper>
        <UserInfo>
          <UserName>{user.business}</UserName>
        </UserInfo>
      </StyledTH>
      <StyledTableCell>{user.businesstype}</StyledTableCell>
      <StyledTableCell>{user.contractDate}</StyledTableCell>
      <StyledTableCell>{user.editedby}</StyledTableCell>
      <TableCell>
        <FlexDiv></FlexDiv>
      </TableCell>
      <TableCell>
        <FlexDiv>
          <Link href={`/stakeholderedit/${user._id}`} passHref>
            <StyledLink title="Editar">
              <StyledSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </StyledSvg>
            </StyledLink>
          </Link>
          {/* <FlexDiv>
            <button
              onClick={() => deleteUser(user._id)}
              className="ml-2 rounded p-1 hover:bg-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </FlexDiv> */}
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
              <TableHeaderCell>&nbsp;Business</TableHeaderCell>
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
