import { useState } from "react"

import Heading from "./components/Heading"
import Section from "./components/Section"
import Counter from "./components/Counter"
import List from "./components/List"
import MyHooks from "./practice/Hooks"
import Reducer from "./components/Reducer"

function App() {

  const [count, setCount] = useState<number>(0)

  return (
    <div className='container'>
      <Heading title="Hello World" />
      <Section>This is section component</Section>
      <Counter setCount={setCount}> The count is {count} </Counter>
      <List items={['Ben', 'Maximus', 'Jane']} render={(item: string) => <span className="gold bold">{item}</span>} />
      <MyHooks />
      <Reducer>{(num:number) => <>Count is {num}</>}</Reducer>
    </div>
  )
}

export default App
