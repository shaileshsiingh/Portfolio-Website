// "use client";

// import React from 'react';
// import { useSpring, animated } from 'react-spring';
// import Image from 'next/image';
// import { TypeAnimation } from 'react-type-animation';

// const HeroSection = () => {
//   // Entrance animation
//   const sectionSpring = useSpring({
//     opacity: 1,
//     from: { opacity: 0 },
//   });

//   // Text typing animation
//   const textSpring = useSpring({
//     opacity: 1,
//     from: { opacity: 0 },
//     config: { duration: 1500 }, // Adjust the duration as needed
//   });

//   // Button hover animation
//   const buttonSpring = useSpring({
//     backgroundColor: '#4a5568', // Adjust the color
//     from: { backgroundColor: 'transparent' },
//   });

//   // Image zoom-in animation
//   const imageSpring = useSpring({
//     transform: 'scale(1)',
//     from: { transform: 'scale(0.8)' },
//   });

//   return (
//     <animated.section style={sectionSpring}>
//       <div className="grid grid-cols-1 sm:grid-cols-12">
//         <div className="col-span-7 place-self-center text-center sm:text-left">
//           <animated.h1
//             className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold"
//             style={textSpring}
//           >
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
//               Hello, I'm{' '}
//             </span>
//             <br />
//             <TypeAnimation
//               sequence={[
//                 'Shailesh',
//                 1000,
//                 'Frontend Developer',
//                 1000,
//                 'Reactjs Developer',
//                 1000,
//                 'UI/UX Designer',
//                 1000,
//               ]}
//               wrapper="span"
//               speed={50}
//               repeat={Infinity}
//             />
//           </animated.h1>
//           <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
//             Let's see your desired Imagination layouts come true.
//           </p>
//           <div>
//             <animated.button
//               className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white"
//               style={buttonSpring}
//             >
//               Hire Me
//             </animated.button>
//             <animated.button
//               className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3"
//               style={buttonSpring}
//             >
//               <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
//                 Download CV
//               </span>
//             </animated.button>
//           </div>
//         </div>
//         <div className="col-span-5 place-self-center mt-4 lg:mt-0">
//           <animated.div
//             className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative"
//             style={imageSpring}
//           >
//             <Image
//               src="/images/image.png"
//               alt="hero image"
//               className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//               width={300}
//               height={300}
//             />
//           </animated.div>
//         </div>
//       </div>
//     </animated.section>
//   );
// };

// export default HeroSection;

"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Shailesh",
                1000,
                "Frontend Developer",
                1000,
                "React.Js Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                     Let's see your desired Imagination layouts come true.

          </p>
          <div>
            <Link
              href="/contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
