import { createContext, useState } from "react"

export const context = createContext(null)

const Context = (props) => {

  const [task, settask] = useState([{ title: "task1", completed: true }])

  return (
    <context.Provider value={[task,settask]}>
      {props.children}
    </context.Provider>
  )
}

export default Context