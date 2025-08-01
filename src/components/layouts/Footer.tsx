"use client";
import { useRouter } from "next/navigation";
import BaseButton from "../BaseButton";

export default function Footer() {
  const router = useRouter();

  function handleNavHome() {
    router.push("/");
  }

  function handleNavInterest() {
    router.push("/interests");
  }

  function handleNavProjects() {
    router.push("/projects");
  }

  return (
    <div className="flex flex-row justify-around w-full h-auto p-4 bg-footerBackground">
      <div>
        <BaseButton variant="text" onClick={handleNavHome}>
          Home
        </BaseButton>
        <BaseButton variant="text" onClick={handleNavInterest}>
          Interesses
        </BaseButton>
        <BaseButton variant="text" onClick={handleNavProjects}>
          Projetos
        </BaseButton>
      </div>
    </div>
  );
}
