import { Chart, ChartConfiguration, PositionType } from 'chart.js';
import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  align-items: center;
  margin-right: 50px;
  width: 90%;
`;
declare global {
  interface Window {
    myLine?: Chart;
  }
}
function CardLineChart() {
  React.useEffect(() => {
    const config: ChartConfiguration = {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: String(new Date().getFullYear()),
            backgroundColor: '#3182ce',
            borderColor: '#3182ce',
            data: [65, 78, 66, 44, 56, 67, 75],
            fill: false
          },
          {
            label: String(new Date().getFullYear() - 1),
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
          align: 'end' as const, // Specify the correct type
          position: 'bottom' as PositionType
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
                // borderDashOffset: [2],
                color: 'rgba(33, 37, 41, 0.3)',
                zeroLineColor: 'rgba(0, 0, 0, 0)',
                zeroLineBorderDash: [2]
                // zeroLineBorderDashOffset: [2]
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
                // borderDashOffset: [3],
                drawBorder: false,
                color: 'rgba(255, 255, 255, 0.15)',
                zeroLineColor: 'rgba(33, 37, 41, 0)',
                zeroLineBorderDash: [2]
                // zeroLineBorderDashOffset: [2]
              }
            }
          ]
        }
      }
    };
    const canvas = document.getElementById('line-chart') as HTMLCanvasElement;
    const ctx = canvas?.getContext('2d');

    if (ctx) {
      window.myLine = new Chart(ctx, config);
    }
  }, []);

  return (
    <>
      <Container className="bg-blueGray-700 relative m-6 mb-6 mt-6 flex w-full min-w-0 flex-col break-words rounded shadow-lg">
        <div className="mb-0 rounded-t bg-transparent px-4 py-3">
          <div className="flex flex-wrap items-center">
            <div className=" relative w-full max-w-full flex-1 flex-grow">
              {/* <h6 className="text-blueGray-100 mb-1 text-xs font-semibold uppercase">Sales View</h6> */}
              <h2 className="text-xl font-semibold text-white">Sales value</h2>
            </div>
          </div>
        </div>
        <div className="flex-auto p-4">
          {/* Chart */}
          <div className="h-400-px relative ml-auto">
            {' '}
            {/* Adicione a classe ml-auto */}
            <canvas id="line-chart" style={{ height: '140px', width: '500px' }}></canvas>
          </div>
        </div>
      </Container>
    </>
  );
}

export default CardLineChart;
