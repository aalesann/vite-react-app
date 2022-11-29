import React, { useState } from 'react'
import { useFetch, useCounter } from '../hooks';
import { urlBreakingBadApi } from '../apis/urlApis';
import { 
  LoadingQuote,
  Quote, 
  QuoteButtons } from '../components/quotes';
import { NavBar } from '../ui/NavBar';

export const BreakingBadScreen = () => {

  const { increment, decrement, reset, state } = useCounter(1)
  const { data, isLoading, error } = useFetch(`${urlBreakingBadApi}/quotes/${state}`);


  const { author, quote } = !!data && data[0]

  return (
    <>
    <NavBar />
    <div className='container border rounded p-3 mt-5'>
      <h1>BreakingBadScreen</h1>
      <hr />

      {
        isLoading
          ? (
            <LoadingQuote />
          )
          : (
            <Quote author={author} quote={quote} />
          )
      }

      <QuoteButtons
        increment={increment}
        decrement={decrement}
        reset={reset}
        isLoading={isLoading}
      />
    </div>
    </>

  )
}
