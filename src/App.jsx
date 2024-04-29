import Head from './components/Head'
import Show from './components/Show'
import Create from './components/Create'

const App = () => {

  return (
    <div className='w-screen h-screen flex justify-center items-center bg-zinc-900'>
      <div className='flex flex-col gap-4 justify-center items-center w-[40rem] h-full'>
        <Head/>
        <Create/>
        <Show />
      </div>
    </div>
  )
}

export default App