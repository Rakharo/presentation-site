'use client';

import BaseButton from "@/components/BaseButton";
import BaseSelect from "@/components/BaseSelect";
import { useRouter } from "next/navigation";

export default function Interests() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <BaseSelect/>
        <BaseButton onClick={handleClick}>Voltar</BaseButton>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <span>Informações</span>
      </footer>
    </div>
  );
}
