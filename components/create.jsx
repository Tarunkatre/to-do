import React from 'react'
import { useState } from 'react'

const create = (props) => {

    const task = props.task;
    const settask = props.settask;
    const [title, settitle] = useState("")


    const submitEvent = (e) => {
        e.preventDefault()
        const newTask = { title: title, completed: false }
        settask([...task, newTask])
        settitle("")
    }

  return (
      <div >
          <form onSubmit={submitEvent} className='flex justify-center gap-4 items-center w-[35rem] h-[2rem]'>
              <input type="text" onChange={(e) => { settitle(e.target.value) }} value={title} placeholder='Write your task....' className='outline-none p-2 text-zinc rounded-xl w-1/2' />
              <input type="submit" value="+" className='border-2 text-center px-4 py-2 bg-orange-600 text-zinc font-bold text-2xl rounded-full' />
          </form>
      </div>
  )
}

export default create