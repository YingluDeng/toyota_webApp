import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image 
            alt="background"
            className="flex w-full"
            height="100000"
            width="100000"
            src="/images/bg_2.jpeg"
            />
    </div>
  )
}
