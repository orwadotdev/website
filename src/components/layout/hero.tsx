import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";

export default function Hero() {
  return (
    <section className=" w-full  ">
      {" "}
      <div className=" w-full rounded-md  relative flex flex-col items-center justify-start  bg ">
        <div className=" flex flex-col  justify-center items-center gap-4">
          <Image
            src={"/hero/ai.png"}
            width={400}
            height={400}
            alt="Hero image "
            className="  "
          />


          <h1 className="relativ z-10 max-w-2xl text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-bold ">
            Shaping Your Digital Future
          </h1>
        </div>

        {/* <div className="absolute w-40 left-0 top-0 h-full  bg-gradient-to-r from-primary to-transparent text-center font-sans font-bold z-10" />

        <div className="absolute w-40 right-0  h-full   bg-gradient-to-l from-primary to-transparent  text-center font-sans font-bold z-10" /> */}

        {/* <BackgroundBeams /> */}
      </div>
    </section>
  );
}
