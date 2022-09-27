import React, { useEffect, useState } from 'react';
import {
  PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';

const EventGenre = ({ events }) => {

  /*const [data, setData] = useState([]);
  useEffect(() => {
    setData(() => getData());
  }, [events]);

  const getData = () => {
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
    const data = genres.map((genre) => {
      const value = events.filter(({ summary }) => summary.split(' ').includes(genre)).length;
      return {
        name: genre,
        value
      };
    });
    return data;
  }*/

  const genres = ["React", "JavaScript", "Node", "jQuery", "AngularJS"];
  const COLORS = ['#0088FE', '#00C49F', '#F5ED0A', '#FF8042', '#85D2DB'];

  const pieChartData = [];
  const genresAndCounts = {};
  genres.forEach((genre) => {
    genresAndCounts[genre] = 0;
  });

  events.forEach((event) => {
    genres.forEach((genre) => {
      if (event.summary.includes(genre)) {
        genresAndCounts[genre]++;
      }
    });
  });

  Object.keys(genresAndCounts).forEach((genre) => {
    pieChartData.push({ name: genre, value: genresAndCounts[genre] });
  });

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 1.1;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    if (percent > 0) {
      return (
        <text
          x={x}
          y={y}
          fill="black"
          textAnchor={x > cx ? "start" : "end"}
          dominantBaseline="central"
        >
          {`${(percent * 100).toFixed(0)}% ${genres[index]}`}
        </text>
      );
    }
  };

  return (
    <PieChart width={600} height={600}>
      <Pie
        data={pieChartData}
        cx={"50%"}
        cy={"50%"}
        labelLine={false}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
        label={renderCustomizedLabel}
      >
        {pieChartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}

export default EventGenre;