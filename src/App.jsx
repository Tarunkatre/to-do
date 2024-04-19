import React from 'react'
import { useState } from 'react'


const App = () => {

  const [task, settask] = useState([])
  const [title, settitle] = useState("")


  const submitEvent = (e) => {
    e.preventDefault()
    const newTask = { title: title, completed: false }
    settask([...task, newTask])
    settitle("")
  }

  const event = (i) => {
    const newstat = [...task]
    newstat[i].completed = !task[i].completed
    settask(newstat)
  }

  let isValid = false
  const deleteHandler = (i) => {

    if (!task[i].completed) {
      isValid = confirm("Are you sure you want to delete?")
    }

    let copyTask = [...task]
    if (task[i].completed || isValid) {
      copyTask.splice(i, 1)
      settask(copyTask)
      //  task.filter((task,index) => (index !==i))
    }
  }

  let render = <h1 className='text-yellow-100 text-center font-bold text-2xl pt-5'>No tasks yet!</h1>

  if (task.length > 0) {
    render = task.map((task, index) => (<div key={index} className='border border-white rounded-xl w-[28rem] p-4 h-1/6  gap-2 flex text-white font-bold justify-center items-center my-3 overflow-y-auto'>
      <div className='w-3/4 h-3/4 flex items-center text-2xl overflow-hidden'>
        <div className={`${task.completed ? 'bg-green-600' : 'border'} w-6 h-6 border-orange-700 rounded-full mx-2`} onClick={() => event(index)}></div>
        <h2 className={`${task.completed && 'line-through'} text-yellow-100 overflow-hidden`}>{task.title}</h2>
      </div>
      <div className='w-1/4 h-3/4 flex justify-center items-center gap-5'>
        <i className="bg-orange-600 p-2 px-3 rounded-full font-light text-xl ri-pencil-line"></i><i onClick={() => deleteHandler(index)} className="font-light bg-orange-600 p-2 px-3 rounded-full text-xl ri-delete-bin-line"></i>
      </div>
    </div>))
  }   


  return (
    <div className='w-screen h-screen flex justify-center items-center bg-zinc-900'>
      <div className='flex flex-col gap-4 justify-center items-center w-[40rem] h-full'>
        <div className=' flex justify-center items-center w-[35rem] h-1/4'>
          <div className='w-1/2'>
            <h1 className='text-white font-bold text-[3rem]'>Todo</h1><p className='text-white'>keep it up!</p>
          </div>
          <div className={`${task.filter(e => e.completed == true).length == task.length ? 'bg-green-600' : 'bg-orange-700'} w-[10rem] h-[10rem] rounded-full flex justify-center items-center text-zinc font-bold text-[2.5rem]`}>{task.filter(e => e.completed == true).length}/{task.length}</div>
        </div>
        <div>
          <form onSubmit={submitEvent} className='flex justify-center gap-4 items-center w-[35rem] h-[2rem]'>
            <input type="text" onChange={(e) => { settitle(e.target.value) }} value={title} placeholder='Write your task....' className='outline-none p-2 text-zinc rounded-xl w-1/2' />
            <input type="submit" value="+" className='border-2 text-center px-4 py-2 bg-orange-600 text-zinc font-bold text-2xl rounded-full' />
          </form>
        </div>
        <div className='w-[30rem] h-1/2 overflow-y-auto'>
          {render}
        </div>
      </div>
    </div>
  )
}

export default App