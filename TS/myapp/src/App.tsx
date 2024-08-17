import { useState } from "react"

import Heading from "./components/Heading"
import Section from "./components/Section"
import Counter from "./components/Counter"
import List from "./components/List"

function App() {

  const [count, setCount] = useState<number>(0)

  return (
    <>
      <Heading title="Hello World" />
      <Section>This is section component</Section>
      <Counter setCount={setCount}> The count is {count} </Counter>
      <List items={['Ben', 'Maximus', 'Jane']} render={(item: string) => <span className="gold bold">{item}</span>} />
    </>
  )
}

export default App
