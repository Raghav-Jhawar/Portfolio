import React, { useState, useEffect } from 'react';

export const LoadingScreen = () => {
    const [Text, setText] = useState("");
    const fullText = "<Good Evening! />";

    useEffect(() => {
      let index = 0;
      const interval = setInterval(() => {
        setText(fullText.substring(0, index));
        index++;
      }, 100);

      if(index > fullText.length){
        clearInterval(interval);
      }

      return clearInterval(interval);
    });
    
  return (
    <div>{Text}</div>
  )
}