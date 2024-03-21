
import './App.css'
import CreatsNavber from './Component/Navder/CreatsNavber'
import GrafChart from './Component/Rechart/GrafChart'
import Rechart from './Component/Rechart/Rechart'
import TreeChart from './Component/Rechart/TreeChart'
// import Navber from './Component/Navder/Navber'

function App() {



  return (
    <>
      {/* header */}

      <section className='bg-sky-200 mt-1'>

        <div className='container mx-auto py-5  max-w-[90%] '>
          <CreatsNavber></CreatsNavber>
          {/* <Navber></Navber> */}
        </div>
      </section>

      <main>
        <div className='container mx-auto py-5  max-w-[90%] '>
          <Rechart></Rechart>
          <hr />
          <GrafChart></GrafChart>
          <hr />
          <TreeChart></TreeChart>
        </div>
      </main>
    </>
  )
}

export default App
