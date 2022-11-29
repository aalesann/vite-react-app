import React from 'react'

export const QuoteButtons = ({increment, decrement, reset, isLoading}) => {
    return (
            <div className="mt-4 d-flex justify-content-center">
                <button
                    disabled={isLoading}
                    className='btn btn-primary'
                    onClick={() => decrement()}
                >
                    Anterior quote
                </button>

                <button
                    disabled={isLoading}
                    className='btn btn-primary mx-2'
                    onClick={() => reset()}
                >
                    Quote inicial
                </button>

                <button
                    disabled={isLoading}
                    className='btn btn-primary'
                    onClick={() => increment()}
                >
                    Siguiente quote
                </button>
            </div>
    )
}
