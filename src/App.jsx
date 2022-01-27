import { SwapMenu, Footer, Header, ProfileCard } from "./components";


const App = () => {
  return (
    <div className="h-screen gradient-bg">
      <div>
        <Header />
        <ProfileCard />
        <SwapMenu />
      </div>
        <Footer/>
    </div>
  )
}

export default App
