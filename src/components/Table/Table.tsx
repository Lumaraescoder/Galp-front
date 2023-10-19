import React from 'react';

import {
  AvatarWrapper,
  Container,
  FlexDiv,
  OnlineIndicator,
  RoundSpan,
  StatusBadge,
  StatusIndicator,
  StyledImg,
  StyledLink,
  StyledSvg,
  StyledTD,
  StyledTH,
  StyledTableCell,
  TableCell,
  TableHeaderCell,
  TableHeaderRow,
  UserEmail,
  UserInfo,
  UserName
} from './TableStyled';

// Array de dados representando usuários
const userData = [
  {
    name: 'Steven Jobs',
    email: 'jobs@sailboatui.com',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    state: 'Active',
    role: 'Product Designer',
    teams: ['Design', 'Product', 'Develop']
  },
  // Adicionando mais usuários
  {
    name: 'Susan Calvin',
    email: 'susan@irobottech.com',
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    state: 'Offline',
    role: 'Robot Psychologist',
    teams: ['Robotics', 'AI']
  },
  {
    name: 'Tony Stark',
    email: 'stark@avengers.com',
    avatar:
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    state: 'Busy',
    role: 'Inventor',
    teams: ['Innovations', 'Avengers']
  },
  {
    name: 'Ada Lovelace',
    email: 'ada@firstprogrammer.com',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    state: 'In a meeting',
    role: 'Computer Scientist',
    teams: ['Algorithm', 'Computation']
  }
  // ... mais usuários conforme necessário
];

const Table = () => {
  // Renderiza as equipes para cada usuário
  const renderTeams = (teams: any[]) => {
    return teams.map(
      (
        team:
          | string
          | number
          | boolean
          | React.ReactElement<any, string | React.JSXElementConstructor<any>>
          | Iterable<React.ReactNode>
          | React.ReactPortal
          | React.PromiseLikeOfReactNode
          | null
          | undefined,
        index: React.Key | null | undefined
      ) => (
        <RoundSpan key={index} bgColor="#EBF8FF" textColor="#3182CE">
          {team}
        </RoundSpan>
      )
    );
  };

  // Renderiza as linhas da tabela para cada usuário
  const renderTableRows = userData.map((user, index) => (
    <tr key={index} className="hover:bg-gray-50">
      <StyledTH>
        <AvatarWrapper>
          <StyledImg src={user.avatar} alt="User Avatar" />
          <OnlineIndicator />
        </AvatarWrapper>
        <UserInfo>
          <UserName>{user.name}</UserName>
          <UserEmail>{user.email}</UserEmail>
        </UserInfo>
      </StyledTH>
      <StyledTD>
        <StatusBadge>
          <StatusIndicator />
          {user.state}
        </StatusBadge>
      </StyledTD>
      <StyledTableCell>{user.role}</StyledTableCell>
      <TableCell>
        <FlexDiv>{renderTeams(user.teams)}</FlexDiv>
      </TableCell>
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
      <div className="m-0 mt-5 overflow-hidden rounded-lg border border-gray-200 shadow-md">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <TableHeaderRow>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>State</TableHeaderCell>
              <TableHeaderCell>Role</TableHeaderCell>
              <TableHeaderCell>Team</TableHeaderCell>
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
