import { createContext, ChangeEvent, useCallback, useReducer, ReactElement, useContext } from "react"

type StateType = {
    count: number,
    error: string | null
    text?: string
}

type Action = {
    type: 'INCREMENT' | 'DECREMENT' | 'INPUT',
    payload?: string
}

type UseCounterContextType = ReturnType<typeof useCounterContext>

type ChildrenType = { children?: ReactElement }

type UseCounterHookType = {
    count: number,
    error: string | null,
    increment: () => void,
    decrement: () => void
}

type UseCounterTextHookType = {
    text?: string,
    handleInput: (e: ChangeEvent<HTMLInputElement>) => void
}

export const initState: StateType = { count: 0, error: null }

const initContextState: UseCounterContextType = {
    state: initState,
    increment: () => { },
    decrement: () => { },
    handleInput: (e: ChangeEvent<HTMLInputElement>) => { },
}

export const CounterContext = createContext<UseCounterContextType>(initContextState)

function useCounterContext(initState: StateType) {

    const [state, dispatch] = useReducer<(state: StateType, action: Action) => StateType>(reducer, initState)

    const increment = useCallback(() => dispatch({ type: 'INCREMENT' }), [])
    const decrement = useCallback(() => dispatch({ type: 'DECREMENT' }), [])
    const handleInput = useCallback((e: ChangeEvent<HTMLInputElement>) => dispatch({ type: 'INPUT', payload: e.target.value }), [])

    return { state, increment, decrement, handleInput }
}

export const CounterProvider = ({ children, ...initState }: StateType & ChildrenType): ReactElement => {
    return (
        <CounterContext.Provider value={useCounterContext(initState)}>
            {children}
        </CounterContext.Provider>
    )
}

const reducer = (state: StateType, action: Action): StateType => {
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
            return { ...state, text: action.payload ?? '' }
        }
        default:
            return state
    }
}

export const useCounter = (): UseCounterHookType => {
    // const x = useContext(CounterContext)
    const {state: {count}, state: {error}, increment, decrement} = useContext(CounterContext)
    return {count, error, increment, decrement}
}

export const useCounterText = (): UseCounterTextHookType => {
    const {state:{text}, handleInput} = useContext(CounterContext)
    return {text, handleInput}
}