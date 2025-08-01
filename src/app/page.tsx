'use client'
import BaseButton from "@/components/BaseButton";
import { useRouter } from 'next/navigation';
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/interests');
  };

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <BaseButton onClick={handleClick}>Navegar</BaseButton>
      </main>
    </div>
  );
}
