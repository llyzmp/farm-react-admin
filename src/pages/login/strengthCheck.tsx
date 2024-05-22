import React, { useEffect, useState } from 'react';
import zxcvbn from 'zxcvbn';
import { Progress } from '@arco-design/web-react';

const StrengthCheckInput = ({ password }) => {
  const [width, setWidth] = useState(0);
  const [color, setColor] = useState('');
  const { score } = zxcvbn(password)
  
  useEffect(() => {
    PasswordStr(score)
  }, [score])
  
  const PasswordStr = (score) => {
    switch (score) {
      case 0:
        setColor('red')
        setWidth(20);
        break;
      case 1:
        setColor('orange')
        setWidth(40);
        break;
      case 2:
        setColor('yellow')
        setWidth(60);
        break;
      case 3:
        setColor('#5cff47')
        setWidth(80);
        break;
      case 4:
        setColor('green')
        setWidth(100);
        break;
      default:
    }
  }

  return (
    <>
      <Progress percent={width} color={color} showText={false} size='large' />
    </>
  );
};

export default StrengthCheckInput