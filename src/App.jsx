import { useLenis } from "./hooks/lenis";
import Home from "./screens/home";

const App = () => {
  useLenis();
  return <Home />;
};

export default App;
