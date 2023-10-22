/* eslint-disable @typescript-eslint/ban-ts-comment */
import dynamic from 'next/dynamic';
import React from 'react';
import { Props } from 'react-apexcharts';
import styled from 'styled-components';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Box = styled.div`
  box-sizing: border-box;
  width: 90%;
  z-index: 5;
  margin-top: 100px;
  height: auto;
  background-color: #f6f0f0;
  border-radius: 12px;
  position: relative;
  right: 18px;
`;
const state: Props['series'] = [
  {
    name: 'Series1',
    data: [31, 40, 28, 51, 42, 109, 100]
  },
  {
    name: 'Series2',
    data: [11, 32, 45, 32, 34, 52, 41]
  }
];

const options: Props['options'] = {
  chart: {
    type: 'area',
    animations: {
      easing: 'linear',
      speed: 300
    },
    sparkline: {
      enabled: false
    },
    brush: {
      enabled: false
    },
    id: 'basic-bar',
    fontFamily: 'Inter, sans-serif',
    foreColor: 'var(--nextui-colors-accents9)',
    stacked: true,
    toolbar: {
      show: false
    }
  },

  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    labels: {
      // show: false,
      style: {
        colors: 'var(--nextui-colors-accents8)',
        fontFamily: 'Inter, sans-serif'
      }
    },
    axisBorder: {
      color: 'var(--nextui-colors-border)'
    },
    axisTicks: {
      color: 'var(--nextui-colors-border)'
    }
  },
  yaxis: {
    labels: {
      style: {
        colors: 'var(--nextui-colors-accents8)',
        fontFamily: 'Inter, sans-serif'
      }
    }
  },
  tooltip: {
    enabled: false
  },
  grid: {
    show: true,
    borderColor: 'var(--nextui-colors-border)',
    strokeDashArray: 0,
    position: 'back'
  },
  stroke: {
    curve: 'smooth',
    fill: {
      colors: ['red']
    }
  },
  // @ts-ignore
  markers: false
};

export const Steam = () => {
  return (
    <>
      <Box>
        <div id="chart">
          <Chart options={options} series={state} type="area" height={400} /* width removido */ />
        </div>
      </Box>
    </>
  );
};
