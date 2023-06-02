import { Content } from "./components/content/Content";
import { Navbar } from "./components/navbar/Navbar";
import { Sidebar } from "./components/sidebar/Sidebar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="mt-12 flex">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default App;
