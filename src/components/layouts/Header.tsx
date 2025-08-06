"use client";
import { useRouter } from "next/navigation";
import BaseButton from "../BaseButton";

export default function Header() {
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
    <div className="flex flex-row justify-around w-full h-auto p-4 bg-blue-100">
      <span>André Pacini</span>
      <div className="flex flex-row justify-between gap-[1em]">
        <BaseButton variant="outlined" onClick={handleNavHome}>
          Home
        </BaseButton>
        <BaseButton onClick={handleNavInterest}>Interesses</BaseButton>
        <BaseButton onClick={handleNavProjects}>Projetos</BaseButton>
      </div>
      <span>Bem Vindo!</span>
    </div>
  );
}
