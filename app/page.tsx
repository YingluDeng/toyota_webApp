import Image from "next/image";
import CarsCanvas from "./components/canvas/Cars";
import Container from "./components/Container"

export default function Home() {
  return (
    <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url(/images/bg_2.jpeg)" }}>
      <CarsCanvas />
    </div>
  )
}
