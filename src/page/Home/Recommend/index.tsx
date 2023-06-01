import React, { useEffect } from 'react';
import { Counter } from '../../../components/Counter';
import axios from 'axios';

export interface IRecommendProps {
}

export default function Recommend (props: IRecommendProps) {

  useEffect(() => {
    axios.get('/api/users').then((res) => {
      console.log('======res=======', res);
    })
  }, []);

  return (
    <div>
      计数器：
      {/* <Counter /> */}
    </div>
  );
}
