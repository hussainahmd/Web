import { ChangeEvent, ReactNode, useReducer } from 'react'

type ChildrenType = {
    children: (num: number) => ReactNode
}

type State = {
    count: number,
    error: string | null
    text?: string
}

type Action = {
    type: 'INCREMENT' | 'DECREMENT' | 'INPUT',
    payload?: string
}

const reducer = (state: State, action: Action): State => {
    const { type } = action
    switch (type) {
        case 'INCREMENT': {
            const newCount = state.count + 1
            const isError = newCount > 5
            return {
                ...state,
                count: isError ? state.count : newCount,
                error: isError ? 'Max reached' : null
            }
        }

        case 'DECREMENT': {
            const newCount = state.count - 1
            const isError = newCount < 0
            return {
                ...state,
                count: isError ? state.count : newCount,
                error: isError ? 'Min reached' : null
            }
        }

        case 'INPUT': {
            return{...state,text: action.payload ?? ''}
        }
        default:
            return state
    }
}

const Reducer = ({ children }: ChildrenType) => {

    const [state, dispatch] = useReducer<(state: State, action: Action) => State>(reducer, { count: 0, error: null })

    const increment = () => dispatch({ type: 'INCREMENT' })
    const decrement = () => dispatch({ type: 'DECREMENT' })
    const handleInput = (e: ChangeEvent<HTMLInputElement>) => dispatch({type: 'INPUT', payload: e.target.value})

    return (
        <>
            <div className='container'>
                <h1>{children(state.count)}</h1>
                <h2>Error: {state.error}</h2>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
                <input placeholder='Type something' onChange={handleInput} />
                <h2>Text: {state.text}</h2>
            </div>
        </>
    )
}
export default Reducer