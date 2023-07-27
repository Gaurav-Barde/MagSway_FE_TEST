import "./App.css";
import HeroSection from "./components/HeroSection";
import NavMenu from "./components/NavMenu";

function App() {
  return (
    <div className="App">
      <div className="w-screen min-h-screen bg-gradient-to-r from-mgBlue to-mgGreen text-mgWhite px-12 py-14">
        <NavMenu />
        <HeroSection />
      </div>
    </div>
  );
}

export default App;
