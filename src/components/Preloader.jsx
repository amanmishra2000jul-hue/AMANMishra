import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ loading }) {
  const expandVariants = {
    hidden: { 
      maxWidth: 0, 
      opacity: 0,
    },
    visible: { 
      maxWidth: "200px", 
      opacity: 1,
      transition: { 
        maxWidth: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
        opacity: { duration: 0.3, delay: 0.4 }
      }
    }
  };

  const markVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    },
    zoomOut: {
      scale: 3.5,
      opacity: 0,
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
    }
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          <motion.div
            className="preloader-bar"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="preloader-mark-wrapper"
            variants={markVariants}
            initial="hidden"
            animate="visible"
            exit="zoomOut"
          >
            <span className="preloader-mark">
              <span className="char">A</span>
              <motion.span 
                className="expanded-text"
                variants={expandVariants}
              >
                man
              </motion.span>
              <span className="char space">&nbsp;</span>
              <span className="char">M</span>
              <motion.span 
                className="expanded-text"
                variants={expandVariants}
              >
                ishra
              </motion.span>
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
