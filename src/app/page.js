import Image from "next/image";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center bg-surface p-24">
        Home
      </main>
    </div>
  );
}
