import { AppShell, Burger, Group } from "@mantine/core";
import Menu from "./Menu";
import { useDisclosure } from "@mantine/hooks";
import ForceUserAuth from "../auth";

export interface PageProps {
  children: React.ReactNode;
}

export default function Page({ children }: PageProps) {
  const [mobile, { toggle: toggleMobile }] = useDisclosure();
  const [desktop, { toggle: toggleDesktop }] = useDisclosure();

  return (
    <ForceUserAuth>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { mobile: !mobile, desktop: !desktop },
        }}
      >
        <AppShell.Header className="flex justify-between items-center">
          <Group h="100%" px="md">
            <Burger
              opened={mobile}
              onClick={toggleMobile}
              hiddenFrom="sm"
              size="sm"
            />
            <Burger
              opened={desktop}
              onClick={toggleDesktop}
              visibleFrom="sm"
              size="sm"
            />
          </Group>
        </AppShell.Header>
        <AppShell.Navbar p="md">
          <Menu />
        </AppShell.Navbar>
        <AppShell.Main>{children}</AppShell.Main>
      </AppShell>
    </ForceUserAuth>
  );
}
