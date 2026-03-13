import { AnimatePresence, motion } from 'framer-motion';

export default function PageTransition({ children, pathname }: { children: React.ReactNode, pathname: string }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        // exit={{ x: -300, opacity: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
