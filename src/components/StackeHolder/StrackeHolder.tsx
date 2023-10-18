import Chart from 'chart.js';
import React, { useState } from 'react';
import styled from 'styled-components';

import Table from '../Table/Table';

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1300px;
  width: 100%;
  /* outros estilos... */
`;
const CenteredItem = styled.div`
  /* Styles for your centered item */
`;
const CardContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  justify-content: space-between;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;

  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  }
  // Inicia o layout responsivo aqui
  @media screen and (max-width: 992px) {
    flex-direction: column; // Faz os itens irem um abaixo do outro em telas menores
    width: auto; // Ocupa a largura disponível
  }

  @media screen and (max-width: 600px) {
    padding: 10px; // Diminui o padding para telas muito pequenas
  }
`;
const ColumnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  margin-top: 30px;
`;
const InfoContainer = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const Subtitle = styled.p`
  margin: 5px 0;
  font-size: 18px;
`;

const LogoContainer = styled.div`
  width: 150px;
  height: 150px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const CardContainers = styled.div`
  width: 300px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 17px 22px 10px 21px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  flex: 1;
  padding: 3px 14px;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;

const CardTitle = styled.h2`
  font-size: 20px;
  color: #333;
  margin: 0;
  font-weight: 600;
  padding: 11px 0px 0px 0px;
`;

const CardItem = styled.div`
  margin-bottom: 16px;
`;

const CardLabel = styled.label`
  font-weight: bold;
  color: #555;
`;

const CardValue = styled.span`
  margin-left: 10px;
  color: #777;
`;

const ContractsContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 400px;
  padding: 13px 0px;
  flex: 1;
`;

const ContractItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  margin: 10px 10px;
  width: 90%;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const ContractName = styled.span`
  font-size: 18px;
`;
const Icon = styled.i`
  font-size: 30px;
  color: #ea5b0b !important;
`;
const IconUser = styled.i`
  font-size: 30px;
  color: #ea5b0b !important;
`;
const DownloadIcon = styled.img`
  width: 20px;
  height: 20px;
`;
const ContractsHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  margin-bottom: 20px;
  margin: 0px 4px;
  p {
    padding: 0px 1px;
  }
`;
function CardLineChart() {
  React.useEffect(() => {
    const config = {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: '#3182ce',
            borderColor: '#3182ce',
            data: [65, 78, 66, 44, 56, 67, 75],
            fill: false
          },
          {
            label: new Date().getFullYear() - 1,
            fill: false,
            backgroundColor: '#ed64a6',
            borderColor: '#ed64a6',
            data: [40, 68, 86, 74, 56, 60, 87]
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: 'Sales Charts',
          fontColor: 'white'
        },
        legend: {
          labels: {
            fontColor: 'white'
          },
          align: 'end',
          position: 'bottom'
        },
        tooltips: {
          mode: 'index',
          intersect: false
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: 'rgba(255,255,255,.7)'
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: 'Month',
                fontColor: 'white'
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: 'rgba(33, 37, 41, 0.3)',
                zeroLineColor: 'rgba(0, 0, 0, 0)',
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2]
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                fontColor: 'rgba(255,255,255,.7)'
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: 'Value',
                fontColor: 'white'
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: 'rgba(255, 255, 255, 0.15)',
                zeroLineColor: 'rgba(33, 37, 41, 0)',
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2]
              }
            }
          ]
        }
      }
    };
    const ctx = document.getElementById('line-chart').getContext('2d');
    window.myLine = new Chart(ctx, config);
  }, []);

  return (
    <>
      <div className="bg-blueGray-700 relative mb-6 flex w-full min-w-0 flex-col break-words rounded shadow-lg">
        <div className="mb-0 rounded-t bg-transparent px-4 py-3">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-1 flex-grow">
              <h6 className="text-blueGray-100 mb-1 text-xs font-semibold uppercase">Overview</h6>
              <h2 className="text-xl font-semibold text-white">Sales value</h2>
            </div>
          </div>
        </div>
        <div className="flex-auto p-4">
          {/* Chart */}
          <div className="h-350-px relative">
            <canvas id="line-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
const ContractList = () => {
  const staticContracts = [
    { name: 'Contract 1', downloadLink: '#' },
    { name: 'Contract 2', downloadLink: '#' },
    { name: 'Contract 2', downloadLink: '#' }
  ];

  return (
    <ContractsContainer>
      {/* contract list  */}
      <ContractsHeader>
        <Icon className="fa fa-pencil-square-o" />
        <p> &nbsp; Contracts</p>
      </ContractsHeader>
      {/* <h1>ss</h1> */}
      {staticContracts.map((contract, index) => (
        <ContractItem key={index}>
          <ContractName>{contract.name}</ContractName>
          <a href={contract.downloadLink} target="_blank" rel="noopener noreferrer">
            <DownloadIcon src="url-do-ícone-de-download-aqui" alt="Do" />
          </a>
        </ContractItem>
      ))}
    </ContractsContainer>
  );
};

const StakeholderDetails: React.FC = () => {
  return (
    <CenteredContainer>
      <CenteredItem>
        <CardContainer>
          <InfoContainer>
            <Title>NLNG (Nigeria LNG Limited)</Title>
            <Subtitle>LNG producing company</Subtitle>
            <Subtitle>Bonny Island, Nigéria</Subtitle>
            <Subtitle>+1 213 456 789</Subtitle>
            <Subtitle>teste@teste.ng</Subtitle>
          </InfoContainer>

          <LogoContainer>
            <img src="images/galp.png" alt="Company Logo" />
          </LogoContainer>
        </CardContainer>

        <ColumnContainer>
          <CardContainers>
            <CardHeader>
              <CardTitle>
                <IconUser className="fa fa-users" aria-hidden="true"></IconUser>
                &nbsp; Stakeholder Details
              </CardTitle>
            </CardHeader>

            <CardItem>
              <CardLabel>Company</CardLabel>
              <CardValue>LNG producing company</CardValue>
            </CardItem>
            <CardItem>
              <CardLabel>Stakeholder</CardLabel>
              <CardValue>John Doe</CardValue>
            </CardItem>
            <CardItem>
              <CardLabel>Address:</CardLabel>
              <CardValue>123 Main Street, Cityville, Country</CardValue>
            </CardItem>
          </CardContainers>

          <ContractList />
        </ColumnContainer>

        <CardLineChart></CardLineChart>
        <Table></Table>
      </CenteredItem>
    </CenteredContainer>
  );
};

export default StakeholderDetails;
