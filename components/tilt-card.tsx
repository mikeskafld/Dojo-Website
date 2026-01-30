"use client"

import React, { useEffect, useRef } from "react"
import {
  animate,
  motion,
  MotionStyle,
  SpringOptions,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react"

export type TiltProps = {
  children: React.ReactNode
  className?: string
  style?: MotionStyle
  rotationFactor?: number
  isRevese?: boolean
  springOptions?: SpringOptions
  animateInitial?: boolean
  initialTiltX?: number // Initial tilt in degrees for X axis
  initialTiltY?: number // Initial tilt in degrees for Y axis
  initialDelay?: number // Delay before starting the animation to flat
}

// Utility function to convert degrees to normalized values (-0.5 to 0.5)
const degreesToNormalized = (degrees: number, rotationFactor: number) => {
  // Calculate what normalized value would produce this many degrees
  // with the given rotationFactor
  return degrees / (2 * rotationFactor)
}

export function Tilt({
  children,
  className,
  style,
  rotationFactor = 15,
  isRevese = false,
  springOptions = { damping: 25, stiffness: 200, mass: 1.2 },
  animateInitial = false,
  initialTiltX = 20, // Default initial tilt X in degrees
  initialTiltY = 12, // Default initial tilt Y in degrees
  initialDelay = 50, // Default delay in ms
}: TiltProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInitialAnimationComplete, setIsInitialAnimationComplete] =
    React.useState(!animateInitial)
  // Ref to store animation controls for cleanup
  const animationControlsRef = useRef<{
    xControls?: { stop: () => void }
    yControls?: { stop: () => void }
  }>({})

  // Create motion values for x and y
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Create springs for smooth animation
  const xSpring = useSpring(x, springOptions)
  const ySpring = useSpring(y, springOptions)

  // Set up the rotation transforms
  const rotateX = useTransform(
    ySpring,
    [-0.5, 0.5],
    isRevese
      ? [rotationFactor, -rotationFactor]
      : [-rotationFactor, rotationFactor]
  )
  const rotateY = useTransform(
    xSpring,
    [-0.5, 0.5],
    isRevese
      ? [-rotationFactor, rotationFactor]
      : [rotationFactor, -rotationFactor]
  )

  const transform = useMotionTemplate`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

  // Handle the initial animation
  const normalizedX = degreesToNormalized(initialTiltX, 5)
  const normalizedY = degreesToNormalized(initialTiltY, 10)
  useEffect(() => {
    if (animateInitial && !isInitialAnimationComplete) {
      // Convert initial tilt degrees to normalized values

      // Set initial values with the correct direction based on isRevese
      x.set(isRevese ? -normalizedX : normalizedX)
      y.set(isRevese ? -normalizedY : normalizedY)

      // Create a slight delay before starting the animation to flat
      const timeout = setTimeout(() => {
        // Animate to flat position
        const xControls = animate(x, 0, {
          duration: 1.5,
          ease: [0.34, 1.56, 0.64, 1], // Custom spring-like curve
          onComplete: () => {
            setIsInitialAnimationComplete(true)
          },
        })

        const yControls = animate(y, 0, {
          duration: 1.5,
          ease: [0.34, 1.56, 0.64, 1], // Custom spring-like curve
        })

        // Store the animation controls in a ref so we can access them in the cleanup function
        animationControlsRef.current = { xControls, yControls }
      }, initialDelay)

      return () => {
        clearTimeout(timeout)
        // Safely stop any running animations
        if (animationControlsRef.current) {
          animationControlsRef.current.xControls?.stop()
          animationControlsRef.current.yControls?.stop()
        }
      }
    }
  }, [
    animateInitial,
    isInitialAnimationComplete,
    x,
    y,
    isRevese,
    initialTiltX,
    initialTiltY,
    rotationFactor,
    initialDelay,
  ])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !isInitialAnimationComplete) return

    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPos = mouseX / width - 0.5
    const yPos = mouseY / height - 0.5

    x.set(xPos)
    y.set(yPos)
  }

  const handleMouseLeave = () => {
    if (!isInitialAnimationComplete) return
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        transformStyle: "preserve-3d",
        ...style,
        transform,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  )
}

// export type TiltProps = {
//   children: React.ReactNode;
//   className?: string;
//   style?: MotionStyle;
//   rotationFactor?: number;
//   isRevese?: boolean;
//   springOptions?: SpringOptions;
//   animateInitial?: boolean;
// };

// export function Tilt({
//   children,
//   className,
//   style,
//   rotationFactor = 15,
//   isRevese = false,
//   springOptions = { damping: 25, stiffness: 200, mass: 1.2 },
//   animateInitial = false,
// }: TiltProps) {
//   const ref = useRef<HTMLDivElement>(null);
//   const [isInitialAnimationComplete, setIsInitialAnimationComplete] =
//     React.useState(!animateInitial);
//   // Ref to store animation controls for cleanup
//   const animationControlsRef = useRef<{
//     xControls?: { stop: () => void };
//     yControls?: { stop: () => void };
//   }>({});

//   // Create motion values for x and y
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   // Create springs for smooth animation
//   const xSpring = useSpring(x, springOptions);
//   const ySpring = useSpring(y, springOptions);

//   // Set up the rotation transforms
//   const rotateX = useTransform(
//     ySpring,
//     [-0.5, 0.5],
//     isRevese
//       ? [rotationFactor, -rotationFactor]
//       : [-rotationFactor, rotationFactor]
//   );
//   const rotateY = useTransform(
//     xSpring,
//     [-0.5, 0.5],
//     isRevese
//       ? [-rotationFactor, rotationFactor]
//       : [rotationFactor, -rotationFactor]
//   );

//   const transform = useMotionTemplate`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

//   // Handle the initial animation
//   useEffect(() => {
//     if (animateInitial && !isInitialAnimationComplete) {
//       // Set initial values immediately
//       x.set(isRevese ? 0.8 : 0.9); // 20 degrees
//       y.set(isRevese ? 0.94 : 0.94); // 12 degrees

//       // Create a slight delay before starting the animation to flat
//       const timeout = setTimeout(() => {
//         // Animate to flat position
//         const xControls = animate(x, 0, {
//           duration: 1.5,
//           ease: [0.34, 1.56, 0.64, 1], // Custom spring-like curve
//           onComplete: () => {
//             setIsInitialAnimationComplete(true);
//           },
//         });

//         const yControls = animate(y, 0, {
//           duration: 1.5,
//           ease: [0.34, 1.56, 0.64, 1], // Custom spring-like curve
//         });

//         // Store the animation controls in a ref so we can access them in the cleanup function
//         animationControlsRef.current = { xControls, yControls };
//       }, 50); // Small delay for better visual effect

//       return () => {
//         clearTimeout(timeout);
//         // Safely stop any running animations
//         if (animationControlsRef.current) {
//           animationControlsRef.current.xControls?.stop();
//           animationControlsRef.current.yControls?.stop();
//         }
//       };
//     }
//   }, [animateInitial, isInitialAnimationComplete, x, y, isRevese]);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!ref.current || !isInitialAnimationComplete) return;

//     const rect = ref.current.getBoundingClientRect();
//     const width = rect.width;
//     const height = rect.height;
//     const mouseX = e.clientX - rect.left;
//     const mouseY = e.clientY - rect.top;

//     const xPos = mouseX / width - 0.5;
//     const yPos = mouseY / height - 0.5;

//     x.set(xPos);
//     y.set(yPos);
//   };

//   const handleMouseLeave = () => {
//     if (!isInitialAnimationComplete) return;
//     x.set(0);
//     y.set(0);
//   };

//   return (
//     <motion.div
//       ref={ref}
//       className={className}
//       style={{
//         transformStyle: "preserve-3d",
//         ...style,
//         transform,
//       }}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//     >
//       {children}
//     </motion.div>
//   );
// }
