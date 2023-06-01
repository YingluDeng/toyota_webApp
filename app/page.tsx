import CarsCanvas from "./components/canvas/Cars";

export default function Home() {
  return (
    <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url(/images/bg_2.jpeg)" }}>
      <div className="absolute mt-0 text-white s">
        <h1 className="lg:text-[75px] font-extrabold sm:text-[60px] xs:text-[40px] text-[40px] lg:leading-[98px] ml-40">
              Toyota GR Supra
        </h1>
        <div className="ml-48 mt-3 font-serif">
          <p><b>0-60 mph:</b> 5.1 to 6.3 seconds</p>
          <p><b>Body style:</b> Coupe</p>
          <p><b>Bore:</b> 3.2″</p>
          <p><b>Cargo volume:</b> 10.2 ft³</p>
          <p><b>Compression ratio:</b> 10.2</p>
          <p><b>Engine cylinder configuration:</b> Straight engine</p>
        </div>
        
      </div>
      <CarsCanvas />
    </div>
  )
}
