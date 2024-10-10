import React from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue, } from "framer-motion";
import { Link } from "react-router-dom";

interface Product { title: string; link: string; thumbnail: string; description: string; id?: string | number }

export const HeroParallax = ({ products, title, text }: { products: Product[], title: string, text: string }) => {
   const firstRow = products.slice(0, 5);
   const secondRow = products.slice(5, 10);
   const thirdRow = products.slice(10, 15);
   const ref = React.useRef(null);
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"],
   });

   const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

   const translateX = useSpring(
      useTransform(scrollYProgress, [0, 1], [0, 1000]),
      springConfig
   );
   const translateXReverse = useSpring(
      useTransform(scrollYProgress, [0, 1], [0, -1000]),
      springConfig
   );
   const rotateX = useSpring(
      useTransform(scrollYProgress, [0, 0.2], [15, 0]),
      springConfig
   );
   const opacity = useSpring(
      useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
      springConfig
   );
   const rotateZ = useSpring(
      useTransform(scrollYProgress, [0, 0.2], [20, 0]),
      springConfig
   );
   const translateY = useSpring(
      useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
      springConfig
   );
   return (
      <div
         ref={ref}
         className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
      >
         <Header title={title} text={text} />
         <motion.div
            style={{
               rotateX,
               rotateZ,
               translateY,
               opacity,
            }}
            className=""
         >
            <motion.div className="flex flex-row-reverse mb-20 gap-4">
               {firstRow.map((product) => (
                  <ProductCard
                     product={product}
                     translate={translateX}
                     key={product.id || product.title}
                  />
               ))}
            </motion.div>
            <motion.div className="flex gap-4 translate-x-[180%] md:translate-x-0 mb-20  ">
               {secondRow.map((product) => (
                  <ProductCard
                     product={product}
                     translate={translateXReverse}
                     key={product.id || product.title}
                  />
               ))}
            </motion.div>
            <motion.div className="flex flex-row-reverse gap-4">
               {thirdRow.map((product) => (
                  <ProductCard
                     product={product}
                     translate={translateX}
                     key={product.id || product.title}
                  />
               ))}
            </motion.div>
         </motion.div>
      </div>
   );
};

export const Header = ({ title, text }: { title: string; text: string }) => {
   return (
      <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
         <h1 className="text-2xl md:text-9xl font-bold dark:text-white">
            {title}
         </h1>
         <p className="max-w-2xl text-base md:text-2xl mt-8 dark:text-neutral-200">
            {text}
         </p>
      </div>
   );
};

export const ProductCard = ({ product, translate, }: { product: Product; translate: MotionValue<number>; }) => {
   return (
      <motion.div
         style={{
            x: translate,
         }}
         whileHover={{
            y: -20,
         }}
         key={product.title}
         className="group/product h-96 w-[30rem] relative flex-shrink-0 "
      >
         <Link
            to={product.link}
            className="block group-hover/product:shadow-2xl "
         >
            <img
               src={product.thumbnail}
               height="600"
               width="600"
               className="object-cover object-left-top absolute h-full w-full inset-0"
               alt={product.title}
            />
         </Link>
         <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
         <h2 className="absolute md:text-2xl font-bold bottom-14 right-4 opacity-0 group-hover/product:opacity-100 text-white">
            {product.title}
         </h2>
         <p className="absolute w-[80%] truncate md:text-xl bottom-4  right-4 opacity-0 group-hover/product:opacity-100 text-white">
            {product.description}
         </p>
      </motion.div>
   );
};
