import { SwapMenu, Footer, Header } from "./components";


const App = () => {
  return (
    <div className="h-screen gradient-bg-header bg-auto">
      <div>
        <Header />
        <SwapMenu />
      </div>
        <Footer/>
    </div>
  )
}

export default App
