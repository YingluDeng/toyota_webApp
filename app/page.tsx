import CarsCanvas from "./components/canvas/Cars";

export default function Home() {
  return (
    <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url(/images/bg_2.jpeg)" }}>
      <div>
        <h1 className="absolute font-semi mt-0 text-white lg:text-[75px] sm:text-[60px] xs:text-[40px] text-[40px] lg:leading-[98px] ml-44">
              Toyota GR Supra
        </h1>
      </div>
        
      <CarsCanvas />
    </div>
  )
}
