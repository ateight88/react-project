import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import _ from 'lodash';
import { useState, useEffect } from 'react';

const PieChart = () => {
  const [database, setDatabase] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:9000/api/stocks/');
        const data = await response.json();
        setDatabase(data);
        setLoading(false);
        console.log('Response:', data);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const options = database.length
    ? () => ({
        chart: {
          type: 'pie',
          width: null,
          height: (9 / 16) * 50 + '%',
        },
        title: {
          text: 'Holdings by Company',
        },
        series: [
          {
            name: 'Holdings',
            data: database.map(({ name, holdings }) => ({
              name,
              y: holdings,
            })),
          },
        ],
      })
    : '...???...';

  if (loading) {
    return <div>Pie Chart Loading...</div>;
  }

  if (!database || database.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div style={{ maxWidth: '80%', margin: '4rem' }}>
      <h1>Portfolio Performance</h1>

      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default PieChart;

// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';
// import _ from 'lodash';

// const getOptions = type => ({
//   chart: {
//     type,
//     width: null,
//     height: (9 / 16) * 50 + '%',
//   },
//   title: {
//     text: _.startCase(`${type} chart`),
//   },
//   yAxis: {
//     title: {
//       text: 'Values',
//     },
//   },
//   series: [
//     {
//       data: [1, 2, 1, 4, 3, 6],
//     },
//     {
//       data: [2, 7, 0, 4, 6, 2],
//     },
//   ],
// });

// const PieChart = () => {
//   return (
//     <div style={{ maxWidth: '80%', margin: '4rem' }}>
//       <h1>HighChartsStock.js</h1>

//       <HighchartsReact highcharts={Highcharts} options={getOptions('pie')} />
//     </div>
//   );
// };

// export default PieChart;
