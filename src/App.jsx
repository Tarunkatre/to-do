import React from 'react'
import { useState } from 'react'
import Header from '../components/header'
import Create from '../components/create'
import Show from '../components/show'


const App = () => {

  const [task, settask] = useState([])

  return (
    <div className='w-screen h-screen flex justify-center items-center bg-zinc-900'>
      <div className='flex flex-col gap-4 justify-center items-center w-[40rem] h-full'>
        <Header task={task} />
        <Create task={task} settask={settask} />
        <Show task={task} settask={settask} />
      </div>
    </div>
  )
}

export default App