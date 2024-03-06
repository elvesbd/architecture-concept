import { useContext } from "react";
import { useRouter } from "next/navigation";
import AuthContext from "@/data/context/authContext";

type ForceUserAuthProps = {
  readonly children: React.ReactNode;
};

export default function ForceUserAuth({ children }: ForceUserAuthProps) {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  if (!user) {
    router.push("/auth");
    return null;
  }

  return children;
}
