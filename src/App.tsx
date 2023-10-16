import { ApiProvider } from "./context/AppContext.tsx";
import { Header } from "./sections/Header/Header.tsx";
import { ThisDay } from "./sections/ThisDay";

function App() {
  return (
    <ApiProvider>
      <main className="min-h-[100vh] dark:bg-mainBgColor">
        <Header />
        <ThisDay />
      </main>
    </ApiProvider>
  );
}

export default App;
