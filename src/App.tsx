import { Content } from "./components/content/Content";
import { Navbar } from "./components/navbar/Navbar";
import { Sidebar } from "./components/sidebar/Sidebar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-6 h-screen">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-5 bg-fuchsia-700">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
