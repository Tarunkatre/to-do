const Head = (props) => {
    const task = props.task;

  return (
      <div className=' flex justify-center items-center w-[35rem] h-1/4'>
          <div className='w-1/2'>
              <h1 className='text-white font-bold text-[3rem]'>Todo</h1><p className='text-white'>keep it up!</p>
          </div>
          <div className={`${task.filter(e => e.completed == true).length == task.length ? 'bg-green-600' : 'bg-orange-700'} w-[10rem] h-[10rem] rounded-full flex justify-center items-center text-zinc font-bold text-[2.5rem]`}>{task.filter(e => e.completed == true).length}/{task.length}</div>
      </div>
  )
}

export default Head