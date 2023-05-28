import { Line } from 'react-chartjs-2'
import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { getCovidFluctiatedDataAPI } from '../globalfiles/GlobalAPI';
import { CovidOverAllData } from '../globalfiles/GlobalInterface';


const Charts = () => {
  const [covidData, setCovidData] = useState<CovidOverAllData | null>(null);

  const [dataTest, setDataTest] = useState<any>(null);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Covid-19 Cases',
      },
    },
  };

  useEffect(() => {
    getCovidData();
  }, [])


  const getCovidData = async () => {
    const fluctuatedData = await getCovidFluctiatedDataAPI();
    setCovidData(fluctuatedData);
  };

  useEffect(() => {
    if (covidData) {
      const labels = Object.keys(covidData.cases).map((date) => {
        // Convert date format from "1/22/20" to "January 22, 2020"
        const [month, day, year] = date.split('/');
        const formattedDate = new Date(Number(year) + 2000, Number(month) - 1, Number(day))
          .toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
        return formattedDate;
      });
      const caseData = Object.values(covidData.cases);
      const deathsData = Object.values(covidData.deaths);
      const reacoverdData = Object.values(covidData.recovered);
      const newData = {
        labels,
        datasets: [
          {
            label: 'Cases',
            data: caseData,
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            tension: 0.1,
          },
          {
            label: 'Deaths',
            data: deathsData,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            tension: 0.1,
          },
          {
            label: 'Recovered',
            data: reacoverdData,
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            tension: 0.1,
          },
        ],
      };

      setDataTest(newData);
    }
  }, [covidData])


  return (
    <div style={{ height: '100vh' }}>
      <div className="text-2xl leading-5" style={{ letterSpacing: '0.5em', padding: '1vh', fontFamily: 'monospace' }}>
        Charts
      </div>
      {dataTest !== null && <Line options={options} data={dataTest} />}
    </div>
  )
}

export default Charts
