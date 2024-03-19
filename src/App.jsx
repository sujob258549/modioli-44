
import './App.css'
import CreatsNavber from './Component/Navder/CreatsNavber'
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
    </>
  )
}

export default App
