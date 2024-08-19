import { ReactNode} from 'react'
import { useCounter, useCounterText } from '../context/CounterContext'

type ChildrenType = {
    children: (num: number) => ReactNode
}


const Reducer = ({ children }: ChildrenType) => {

    const {count, error, increment, decrement} = useCounter()
    const {text, handleInput} = useCounterText()

    return (
        <>
            <div className=''>
                <h1>{children(count)}</h1>
                <h2>Error: {error}</h2>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
                <input placeholder='Type something' onChange={handleInput} />
                <h2>Text: {text}</h2>
            </div>
        </>
    )
}
export default Reducer