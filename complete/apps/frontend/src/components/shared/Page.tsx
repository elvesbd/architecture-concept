import { AppShell, Burger, Group } from "@mantine/core";

export interface PageProps {
  children: React.ReactNode;
}

export default function Page({ children }: PageProps) {
  return (
    <AppShell header={{ height: 60 }} navbar={{ width: 300, breakpoint: "sm" }}>
      <AppShell.Header>
        <Group>
          <Burger />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar>
        <h1>Plataforma</h1>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
