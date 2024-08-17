import { useState, useEffect, useCallback, useMemo, useRef, MouseEvent, KeyboardEvent } from 'react'

interface User {
    id: number,
    username: string,
}

type fibFunc = (n: number) => number

const fib: fibFunc = (n) => {
    if (n < 2) return n
    return fib(n - 1) + fib(n - 2)
}

const myNum: number = 20

function MyHooks() {
    const [count, setCount] = useState<number>(0)
    const [users, setUsers] = useState<User[] | null>(null)
    const [text, setText] = useState<string>('')

    const inputRef = useRef<HTMLInputElement>(null)

    // console.log(inputRef?.current)
    // console.log(inputRef?.current?.value)
    console.log('Top')

    useEffect(() => {
        console.log('useEffect')
        // console.log('Users: ', users)

        return () => console.log('useEffect return')
    }, [users, count])

    const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void => setCount(prev => prev + 2), [])

    const result = useMemo<number>(() => fib(myNum), [myNum])

    return (
        <>
            {console.log('return')}
            <h1>{count}</h1>
            <button onClick={addTwo}>Add</button>
            <h2>{result}</h2>
            <input ref={inputRef} type="text" placeholder='Enter' value={text} onChange={(e) => setText(e.target.value)} />
            <h3>text: {inputRef?.current?.value}</h3>
            <h3>text: {text}</h3>
        </>
    )
}

export default MyHooks