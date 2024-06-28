import Navbar from './components/nav/Navbar.tsx'
import Footer from './components/Footer.tsx'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 mt-[105px]">Hello world</div>
      <Footer />
    </div>
  )
}
