"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
                                     words,
                                     className,
                                     filter = true,
                                     duration = 0.5,
                                   }: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
        "span",
        {
          opacity: [0, 1, 0],
          filter: filter ? ["blur(5px)", "blur(0px)", "blur(5px)"] : "none",
        },
        {
          duration: duration ? duration : 1,
          delay: stagger(1.1),
          repeat: Infinity,
          repeatType: "loop",
        }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
        <motion.div ref={scope}>
          {wordsArray.map((word, idx) => {
            return (
                <motion.span
                    key={word + idx}
                    className="dark:text-white text-slate-500 opacity-0"
                    style={{
                      filter: filter ? "blur(5px)" : "none",
                    }}
                >
                  {word}{" "}
                </motion.span>
            );
          })}
        </motion.div>
    );
  };

  return (
      <div className={cn("font-bold", className)}>
        <div className="mt-4">
          <div className=" dark:text-white text-black text-2xl leading-snug tracking-wide">
            {renderWords()}
          </div>
        </div>
      </div>
  );
};
