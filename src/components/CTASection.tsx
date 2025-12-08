"use client";

import { motion } from "framer-motion";
import GlassmorphismCard from "@/components/glassmorphism-card";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASectionProps } from "@/types/cta";

const CTASection = ({
  title,
  description,
  buttonText,
  href,
  delay = 0.4,
}: CTASectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: -40 }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >

        <h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>
        <p className="text-gray-300 mb-0 max-w-2xl mx-auto">{description}</p>

                <Button asChild size="lg" variant="outline"className="mt-10"  >
          <a href={href}>
            {buttonText} <ArrowRight className="ml-2" size={20} />
          </a>
        </Button>



    </motion.div>
  );
};

export default CTASection;
