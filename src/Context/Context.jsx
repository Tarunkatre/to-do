import { createContext } from "react"

export const context = createContext(null)

const Context = (props) => {
  return (
    <context.Provider value={context}>
      {props.children}
    </context.Provider>
  )
}

export default Context