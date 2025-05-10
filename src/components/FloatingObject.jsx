import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const FloatingObject = ({ 
  imageUrl = '/images/abstract-shape-1.svg', 
  width = 300, 
  height = 300, 
  rotationSpeed = 0.5,
  floatAmplitude = 20,
  floatSpeed = 3,
  className = ''
}) => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    let rotationAngle = 0;
    let floatAngle = 0;
    let animationFrameId;
    
    const animate = () => {
      rotationAngle += rotationSpeed * 0.01;
      floatAngle += floatSpeed * 0.01;
      
      const translateY = Math.sin(floatAngle) * floatAmplitude;
      
      container.style.transform = `translateY(${translateY}px) rotate(${rotationAngle}deg)`;
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [rotationSpeed, floatAmplitude, floatSpeed]);
  
  return (
    <motion.div
      ref={containerRef}
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{ width, height }}
    >
      <img 
        src={imageUrl} 
        alt="Floating object" 
        className="w-full h-full object-contain"
        style={{ 
          filter: 'drop-shadow(0 10px 15px rgba(0, 0, 0, 0.1))'
        }}
      />
    </motion.div>
  );
};

export default FloatingObject;
