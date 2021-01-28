import "./App.css";

import Hero from "./index/Hero";
import Snippets from "./index/Snippets";
import Access from "./index/Access";
import Workflow from "./index/Workflow";
import Download from "./index/Download";

import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <Snippets />
      <Access />
      <Workflow />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
