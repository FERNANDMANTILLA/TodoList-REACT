import React from 'react'
import { useCounter, useFetch } from '../Hooks'
import { Quote, LoadingQuote } from '../CustomHooks'

export const MultipleCustomHooks = () => {


    const { count, increment } = useCounter(1);

    const { data, loading, error } = useFetch('https://www.breakingbadapi.com/api/quotes/' + count);

    const { quote, author } = !!data && data[0];

    return (
        <div className=''>
            <h1>BREAKING BAD QUOTES</h1>
            <hr className='w-100 bg-dark' />

            {loading ? <LoadingQuote /> : <Quote quote={quote} author={author} />}

            <button disabled={loading} onClick={() => increment()} className='btn btn-primary'>Next Quote</button>

        </div>
    )
}
