"use client";


import { authClient } from "@/lib/auth-client";
import { motion } from "framer-motion";
import { ShoppingCart, Sparkles } from "lucide-react";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const PurchaseButton = ({player}) => {
    // console.log('Player', player);
      const { data: session } = authClient.useSession();
    //   console.log(session);
      const user = session?.user;
    //   console.log('user is a', user);

   const handlePurchase = async() => {
    const purchaseData = {
        userName : user.name,
        userId : user.id,
        email : user.email,
        userImage : user.image,
        playerName : player.name,
        salary : player.salary,
        Team : player.team,
        Country : player.country,
        playerId : player._id,
        Catagory : player.category,
        Sports : player.sports,
        Description : player.description
    }

    console.log('Purchase data', purchaseData);

    const res = await fetch("http://localhost:5000/purchase", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(purchaseData)
    })

    const newUser = await res.json();
    console.log('New user', newUser);

    if(newUser){
        toast.success('The player purchase done!');
        redirect('/purchase');
    }
    
    
   }
    
  return (
    <motion.button
      whileHover={{
        scale: 1.06,
        y: -4,
      }}
      whileTap={{
        scale: 0.94,
      }}
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
      }}
      className="group relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-linear-to-r from-cyan-500 via-blue-500 to-purple-600 px-8 py-4 font-bold text-white shadow-2xl shadow-cyan-500/20"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

      {/* Animated Shine */}
      <motion.div
        initial={{ x: "-120%" }}
        whileHover={{ x: "120%" }}
        transition={{
          duration: 0.8,
        }}
        className="absolute top-0 h-full w-20 rotate-12 bg-white/20 blur-md"
      />

      {/* Floating Glow */}
      <div className="absolute -left-10 top-0 h-24 w-24 rounded-full bg-cyan-400/30 blur-3xl"></div>
      <div className="absolute -right-10 bottom-0 h-24 w-24 rounded-full bg-purple-500/30 blur-3xl"></div>

      {/* Content */}
      <div className="relative flex items-center gap-3">
        
        {/* Cart Icon */}
        <motion.div
          whileHover={{
            rotate: [-10, 10, -10, 0],
          }}
          transition={{
            duration: 0.5,
          }}
          className="rounded-xl bg-white/10 p-2 backdrop-blur-xl"
        >
          <ShoppingCart size={20} />
        </motion.div>

        {/* Text */}
        <span onClick={handlePurchase} className="text-sm md:text-base tracking-wide">
          Purchase Premium
        </span>

        {/* Spark Animation */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
        >
          <Sparkles size={18} />
        </motion.div>
      </div>

      {/* Bottom Border Animation */}
      <motion.div
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-0 left-0 h-[3px] bg-white/60"
      />
    </motion.button>
  );
};

export default PurchaseButton;