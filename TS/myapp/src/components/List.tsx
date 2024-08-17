import { ReactNode } from "react"

type ListProps<T> = {
    items: T[],
    render: (item: T) => ReactNode
}

function List<T>({ items, render }: ListProps<T>) {
    return (
        <ul>
            {items.map((item, i) => (
                <li key={i}>
                    {render(item)}
                </li>
            ))}
        </ul>
    )
}

export default List