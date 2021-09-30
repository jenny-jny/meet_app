import react, {useEffect, useState} from 'react';
import {PieChart, Pie, ResponsiveContainer} from 'recharts';

const EventGenre = ({events}) => {
  useEffect(() => {setData(getData())}, [events]);

  const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
  const [data, setData] = useState([]);
  
  function getData(){
    const data = genres.map(genre => {
      const value = events.map(event => {
        return event.summary.filter(sum => sum.split(' ').includes(genre)).length;
      });
      return {name: genre, value};
    });
    return data;
  }

  return (
    <ResponsiveContainer height = {400}>
      <PieChart width = {400} height = {400}>
        <Pie data = {getData()} cx = {200} cy = {200} labelLine = {false} label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`} outerRadius = {80} fill = "#8884d8" dataKey = "value">
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenre;