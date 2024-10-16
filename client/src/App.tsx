import './App.css'
import Footer from "./components/Footer/Footer.tsx";
import Header from "./components/Header/Header.tsx";
import Editor from "./components/Editor/Editor.tsx";

function App() {
  return (
    <div className={"flex flex-col w-screen h-screen"}>
        <Header />
        <main className={"grow"}>
            <Editor />
        </main>
        <Footer />
    </div>
  )
}

export default App
