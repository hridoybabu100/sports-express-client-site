import Image from "next/image";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import {
  Trophy,
  MapPin,
  BadgeDollarSign,
  ShoppingCart,
  ShieldCheck,
  Star,
  ChevronRight,
  Heart,
  Sparkles,
  Crown,
  Flame,
  CheckCircle2,
} from "lucide-react";
import PurchaseCard from "@/components/PurchaseCard";

const PurchasePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;
//   const {id} = user;
//   console.log(id);
  

  const res = await fetch(
    `http://localhost:5000/purchase/${user.id}`,
    {
      cache: "no-store",
    }
  );

  const player = await res.json();

  console.log('Player name is', player);
  

  return (
    <div>
        <h1>Purchase Details</h1>
        <PurchaseCard player={player}></PurchaseCard>
    </div>
  );
};

export default PurchasePage;