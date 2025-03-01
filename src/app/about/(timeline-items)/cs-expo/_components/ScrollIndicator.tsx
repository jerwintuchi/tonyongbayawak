import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ScrollIndicator() {
    const [hide, setHide] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setHide(true);

            if (timeoutRef.current) clearTimeout(timeoutRef.current);

            timeoutRef.current = setTimeout(() => setHide(false), 500); // Reappear after 0.5s
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    if (hide) return null;

    return (
        <motion.div
            className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 text-white/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
        >
            <motion.div animate={{ x: [-5, 0, -5] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                <ChevronLeft className="w-5 h-5" />
            </motion.div>
            <p className="text-sm font-medium">Swipe to Browse</p>
            <motion.div animate={{ x: [5, 0, 5] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                <ChevronRight className="w-5 h-5" />
            </motion.div>
        </motion.div>
    );
}
