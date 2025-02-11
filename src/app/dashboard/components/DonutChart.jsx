"use client";
import dynamic from 'next/dynamic';
import 'chart.js/auto';
const Donut = dynamic(() => import('react-chartjs-2').then((mod) => mod.Doughnut), {
  ssr: false,
});

const DATA_COUNT = 5;
const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

const data = {
    labels: ['FRESA', 'HIGO', 'CEBOLLA', 'AGAVE', 'CEREZA'],
    datasets: [
        {
          label: 'Cantidad de productos',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
};
const DoughnutChart = () => {
  return (
    <div style={{ width: '400px', height: '400px' }}>
      <Donut data={data} />
    </div>
  );
};
export default DoughnutChart;