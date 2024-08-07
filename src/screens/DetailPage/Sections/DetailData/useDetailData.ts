import {useState} from 'react';

export const useDetailData = () => {
  const tabs = ['About', 'Base Stat', 'Evolutions', 'Moves'];
  const [current, setCurrent] = useState('About');

  return {
    tabs,
    current,
    setCurrent,
  };
};
