import { NavLink } from "@mantine/core";
import { IconEdit, IconHome2, IconVideo } from "@tabler/icons-react";

export default function Menu() {
  return (
    <div className="flex flex-col">
      <span className="text-xs text-zinc-500">Geral</span>
      <NavLink
        label="Início"
        leftSection={<IconHome2 size={18} stroke={1.5} href="/" />}
      />
      <NavLink
        label="Meus Cursos"
        leftSection={<IconVideo size={18} stroke={1.5} href="/catalog" />}
      />
      <span className="text-xs text-zinc-500">Administrador</span>
      <NavLink
        label="Cursos"
        leftSection={<IconEdit size={18} stroke={1.5} href="/course" />}
      />
    </div>
  );
}
