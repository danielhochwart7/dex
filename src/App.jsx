import { SwapMenu, Footer, Header } from "./components";


const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-header">
        <Header />
        <SwapMenu />
      </div>
      <div className="gradient-bg-footer">
        <Footer/>
      </div>
    </div>
  )
}

export default App
