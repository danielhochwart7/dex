import { Body, Footer, Header } from "./components";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-header text-white">
        <Header />
        <Body />
      </div>
      <div className="gradient-bg-footer text-white">
        <Footer/>
      </div>
    </div>
  )
}

export default App
