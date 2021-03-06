import react, {useEffect, useState} from 'react';
import {PieChart, Pie, ResponsiveContainer} from 'recharts';

const EventGenre = ({events}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
    const getData = () => {
      const data = genres.map(genre => {
        const value = events.filter(event => event.summary.split(' ').includes(genre)).length;
        return {name: genre, value};
      });
      return data;
    };
    setData(() => getData());
  }, [events])

  return (
    <ResponsiveContainer height = {400}>
      <PieChart width = {400} height = {400}>
        <Pie data = {data} cx = {200} cy = {200} labelLine = {false} label = {({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`} outerRadius = {80} fill = "#8884d8" dataKey = "value">
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenre;