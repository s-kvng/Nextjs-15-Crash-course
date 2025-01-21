// import Hello from "../components/Hello";
import Image from "next/image";


export default function Home() {
  console.log("Where are mine ? -- CLient / Server ");
  return (
    <>
      <h1>Welcome to Nextjs</h1>
      {/* <Hello /> */}

      <Image
        src="/animated/Alert-octagon/alert-octagon.svg"
        alt="Animated Alert Octagon"
        width={20}
        height={20}
        className="bg-white"
      />

      
    </>
  );
}
