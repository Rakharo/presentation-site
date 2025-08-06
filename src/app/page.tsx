"use client";
import BaseButton from "@/components/BaseButton";
import MessageForm from "@/components/utils/MessageForm";
import { iUser } from "@/interfaces/userInterface";
import { createUser, getUsers } from "@/services/userService";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();

  const [users, setUsers] = useState<iUser[]>([]);
  const [loading, setLoading] = useState(true);


  const handleSend = async (data: iUser) => {
    const response = await createUser(data)

    return console.log(response)
  };

  async function handleGetUsers() {
    setLoading(true);
    const response = await getUsers();
    setUsers(response);
    setLoading(false);
  }

  useEffect(() => {
    handleGetUsers();
  }, []);

  useEffect(() => {
    console.log("Usuários carregados:", users);
  }, [users]);

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div>
        {loading ? (
          <span>Carregando usuários...</span>
        ) : users!.length > 0 ? (
          users.map((user) => <span key={user.id}>{user.name}</span>)
        ) : (
          <span>Nenhum usuário encontrado.</span>
        )}
      </div>
      <MessageForm onSend={handleSend} />
    </div>
  );
}
