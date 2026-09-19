import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
      <Header />
      <main className="flex flex-1 items-center justify-center px-6 py-10">
        <p className="text-sm text-slate-400">
          The check-in screen will appear here — coming up on Day 3.
        </p>
      </main>
      <Footer />
    </div>
  )
}

export default App
