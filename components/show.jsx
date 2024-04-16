import React from 'react'

const show = (props) => {


    const task = props.task;
    const settask = props.settask;

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

    return (
        <div className='w-[30rem] h-1/2 overflow-y-auto'>
            {render}
        </div>
    )
}

export default show