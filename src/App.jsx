import Sidebar from "./components/Sidebar";
import MainSection from "./components/MainSection";

function App() {
  return (
    <main className="flex h-screen gap-8">
      <Sidebar />
      <MainSection />
    </main>
  );
}

export default App;
