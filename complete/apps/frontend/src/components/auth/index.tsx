import { useRouter } from "next/navigation";
import useAuthContext from "@/data/hooks/useAuthContext";

type ForceUserAuthProps = {
  readonly children: React.ReactNode;
};

export default function ForceUserAuth({ children }: ForceUserAuthProps) {
  const router = useRouter();
  const { user } = useAuthContext();

  if (!user) {
    router.push("/auth");
    return null;
  }

  return children;
}
