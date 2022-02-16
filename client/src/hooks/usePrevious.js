import React, { useEffect, useRef } from "react";


export function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {        
      ref.current = value;
    //   console.log(ref.current ,'ref.current');
    });
    // console.log(ref ,'ref.current2 ');
    return ref.current;
  }