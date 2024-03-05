import { IconSchool } from "@tabler/icons-react";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 justify-center items-center h-screen">
      <IconSchool size={160} stroke={0.5} className="text-zinc-500" />

      <div className="flex flex-col items-center gap-2">
        <span className="font-black text-zinc-500 text-3xl">
          Plataforma EAD
        </span>
        <span className="text-zinc-500 text-sm w-72 text-center">
          Aplicação fullstack com arquitetura limpa
        </span>
      </div>
    </div>
  );
}
