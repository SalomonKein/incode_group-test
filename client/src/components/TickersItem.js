import React, { useEffect, useRef, useState } from 'react'
import { usePrevious } from '../hooks/usePrevious';
import Flex from './Flex'
import Item from './Item'

export default function TickersItem({ticker, background}) {  
    
    const prevTicker = usePrevious(ticker);

    // console.log(prevTicker, '=prevTicker', ticker, '=ticker');
    // console.log(ticker, '=ticker');

  return (
    <Flex justify='space-around' border='solid black 1px' background={background} padding='5px'>        
        <Item border='solid blue 1px' bRadius='5px' background='#20B2AA' color='#2F4F4F'>{ticker.ticker.index}</Item>
        <Item>{ticker.ticker.name}</Item>
        <Item>{ticker.price} $</Item>
        <Item>{ticker.change}</Item>
        <Item>{ticker.change_percent} %</Item>
    </Flex>
  )
}
