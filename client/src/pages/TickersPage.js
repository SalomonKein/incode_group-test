import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTickets } from '../api';
import Flex from '../components/Flex';
import TickersItem from '../components/TickersItem';
import { setTickers } from '../redux/actions';
import { ADD_DATA_FROM_SERVER } from '../utils/const';

export default function TickersPage() {
    const dispatch = useDispatch()
const tickers = useSelector(state => state.tickers)


 useEffect(() => { 
  getTickets(ADD_DATA_FROM_SERVER, function(response){ dispatch(setTickers(response))} )
}, []);


  return (
    <Flex direction='column' width='50vw' bRadius='15px' justify='space-around'>
{tickers.map((ticker, idx) => 
idx % 2 === 0 ?
 <TickersItem key={Date.now()*Math.random()} ticker={ticker} background='lightgray'/>
 :
 <TickersItem key={Date.now()*Math.random()} ticker={ticker} background='white'/>
)}

    </Flex>
  )
}
