import Image from "next/image";
import Link from "next/link";

export default function GPS() {
  return (
    <main className="bg-neutral h-full">
      <div className="bg-black rounded-b-3xl absolute w-full">
        <div className="justify-between flex flex-row text-white font-extrabold px-5">
          <div className="pt-2">HLMT</div>
          <div className="pt-2 text-2xl">GPS</div>
          <div className="text-3xl">=</div>
        </div>
        <div className="text-center">1.5km to next HMTL</div>
        <div className="text-center">
          <progress
            className="progress progress-success w-56"
            value="80"
            max="100"
          ></progress>
        </div>
      </div>
      <div className=" bg-base-100">
        <div
          className="rounded-b-3xl "
          style={{
            backgroundImage: 'url("/map.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "400px", // Set to your desired height
            padding: "20px",
            /* You can add other styles here as needed */
          }}
        ></div>
      </div>
      <div className="bg-base-100 text-white">
        <div className="border-8 border-white  mx-2 rounded-xl mt-5 flex flex-row justify-between p-4 text-6xl font-bold">
          <div>
            12km
            <h3 className="text-sm font-light ">Traveled</h3>
          </div>
          <div>
            +1.0
            <h3 className="text-sm font-light ">kg CO2 offset</h3>
          </div>
        </div>
      </div>
      <div className="bg-base-100 p-5 flex flex-row justify-evenly text-4xl text-white">
        <div className="text-center">
          6km/h
          <h3 className="text-sm font-light ">Current Speed</h3>
        </div>
        <div className="text-center">
          75
          <h3 className="text-sm font-light ">AQI</h3>
        </div>
        <div className="text-center">
          00:10
          <h3 className="text-sm font-light ">Timer</h3>
        </div>
      </div>
      <div className="bg-base-100 p-5 flex flex-row justify-evenly text-4xl text-white">
        <Link href="/">
          <button className="btn btn-error btn-lg text-white rounded-3xl px-10 font-extrabold text-2xl">
            End Session
          </button>
        </Link>
      </div>
    </main>
  );
}
