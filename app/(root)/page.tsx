import { Construction } from "lucide-react";
import  Banner  from "@/components/banner";

export default function Home() {
  return (
    <main className="flex flex-col h-[100vh]">
      <Banner />

      {/* Navbar Component */}
      <nav className="flex justify-between items-center w-full h-16 bg-gray-800 text-white">
        <div className="flex justify-between items-center">
          <Construction size={24} className="ml-4" />
          <h1 className="text-2xl font-bold">SS</h1>
          <ul className="flex">
            <li className="ml-4">Home</li>
            <li className="ml-4">About</li>
            <li className="ml-4">Services</li>
            <li className="ml-4">Contact</li>
          </ul>
        </div>
        <div className="flex justify-between items-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4">
            Login
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4">
            Sign Up
          </button>
        </div>
      </nav>
      {/* Navbar ends here */}

      <div className="flex h-[80vh] flex-col justify-center">
        <div className="flex flex-col items-center">
          <Construction size={200} />
          <h1 className="text-4xl font-bold">Oops!</h1>
          <p className="text-2xl">Synapse Sync is under construction</p>
          <p className="text-2xl">A highly skilled monkey is working on the app to fix it, stay tuned!</p>
        </div>
      </div>
    </main>
  );
}