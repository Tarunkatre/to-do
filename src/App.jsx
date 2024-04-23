import React from 'react'
import { useState } from 'react'
import Head from './components/Head'
import Show from './components/Show'
import Create from './components/Create'

const App = () => {

  const [task, settask] = useState([])
  
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-zinc-900'>
      <div className='flex flex-col gap-4 justify-center items-center w-[40rem] h-full'>
        <Head task={task}/>
        <Create task={task} settask={settask}/>
        <Show task={task} settask={settask} />
      </div>
    </div>
  )
}

export default App