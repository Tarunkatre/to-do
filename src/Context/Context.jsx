import { createContext, useState } from "react"

export const context = createContext(null)

const Context = (props) => {

  const [task, settask] = useState([])

  return (
    <context.Provider value={[task,settask]}>
      {props.children}
    </context.Provider>
  )
}

export default Context