import { LogOut, Loader2 } from "lucide-react";
import { SidebarMenuButton } from "@/components/atoms/sidebar";
import { useLogout } from "@/features/auth/hooks/use-logout";
import { motion } from "motion/react";

const LogoutButton = () => {
  const { mutate: logout, isPending } = useLogout();

  const handleLogout = () => {
    logout();
  };

  return (
    <SidebarMenuButton asChild>
      <motion.button
        className="flex items-center gap-3 w-full px-3 py-2 rounded-lg transition-all duration-200 
        hover:bg-red-50 text-red-600 hover:text-red-700 cursor-pointer group border border-transparent hover:border-red-200
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:border-transparent"
        onClick={handleLogout}
        disabled={isPending}
        whileHover={!isPending ? { scale: 1.02 } : {}}
        whileTap={!isPending ? { scale: 0.98 } : {}}
        transition={{ duration: 0.1 }}
      >
        <div className="relative">
          {isPending ? (
            <motion.div
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: 360 }}
              transition={{
                rotate: { duration: 1, repeat: Infinity, ease: "linear" },
                opacity: { duration: 0.2 },
              }}
            >
              <Loader2 className="h-4 w-4" />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <LogOut className="h-4 w-4" />
            </motion.div>
          )}
        </div>

        <motion.span
          className="text-sm font-medium"
          animate={{
            opacity: isPending ? 0.7 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          {isPending ? "Logging out..." : "Logout"}
        </motion.span>

        {isPending && (
          <motion.div
            className="absolute inset-0 bg-red-50/30 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
      </motion.button>
    </SidebarMenuButton>
  );
};

export default LogoutButton;
