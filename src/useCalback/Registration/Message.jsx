import React, { useState, useEffect } from 'react';

const Message = ({ text }) => {
  const [message, setmessage] = useState('');
  //
  useEffect(() => {
    //
    console.log('----Message Com Created');
    //
    setmessage(text());
  }, [text]);
  //
  return <p>{message}</p>;
};

export default Message;
