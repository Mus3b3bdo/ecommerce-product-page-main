import LeftPane from "./components/UI/LeftPane"
import NavBar from "./components/UI/NavBar"
import RightPane from "./components/UI/RightPane"

function App() {


  return (
    <>
      <NavBar />
      <main className="grid sm:grid-cols-2 gap-1 sm:gap-40 items-stretch">
        <div className="sm:ms-80 border border-orange-500"><RightPane /></div>
        <div className="m-6 sm:m-0 sm:me-80 border border-orange-500"><LeftPane /></div>
      </main>
    </>
  )
}

export default App
