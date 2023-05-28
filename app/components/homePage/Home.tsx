import Image from "next/image";
        
const Home = () => {
    return (
        <div>
            <Image 
            alt="background"
            // className="hidden md:block cursor-pointer"
            height="120"
            width="120"
            src="/images/bg_1.png"
            />
        </div>     
    )
}

export default Home