import "./App.scss";
import Blog from "./components/section/blog/blog";
import Hero from "./components/section/hero/hero";
import Divider from "./components/ui/divider/divider";

function App() {
   return (
      <>
         <Hero />
         <Divider />
         <Blog />
         <Divider />
      </>
   );
}

export default App;
