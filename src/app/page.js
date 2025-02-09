import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  
  return (
    <div className="bg-background min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar  />
      <Hero />
    </div>
  );
}
