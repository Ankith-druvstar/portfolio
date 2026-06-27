import MouseGlow from "./components/MouseGlow/MouseGlow";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import useReveal from "./hooks/useReveal";
import Home from "./pages/Home/Home";

function App() {
  useReveal();
  return (
    <>
      <ProgressBar />
      <MouseGlow />
      <Home />
    </>
  );
}

export default App;
