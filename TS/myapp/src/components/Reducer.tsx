import { ReactNode, useState } from 'react'

type ChildrenType = {
    children: (num: number) => ReactNode
}

const Reducer = ({ children }: ChildrenType) => {
    const [count, setCount] = useState<number>(0)

    const increment = () => setCount(p => p + 1)
    const decrement = () => setCount(p => p - 1)

    return (
        <>
            <h1>{children(count)}</h1>
            <div>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
        </>
    )
}
export default Reducer