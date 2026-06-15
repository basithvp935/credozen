"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabsData = [
  {
    id: "evaluation",
    title: "Evaluation & Design",
    tags: ["Product Design", "UI Review", "Branding"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit ligula vel vestibulum commodo. Mauris eget aliquet nulla, quis ultricies magna. Morbi sit amet sapien nisl. Vestibulum vel nisl suscipit, vestibulum vel nisl.",
    image: "/images/contact_ribbon.png"
  },
  {
    id: "custom",
    title: "Custom Software",
    tags: ["Product Development", "Cloud App", "Branding"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit ligula vel vestibulum commodo. Mauris eget aliquet nulla, quis ultricies magna. Morbi sit amet sapien nisl. Vestibulum vel nisl suscipit, vestibulum vel nisl.",
    image: "/images/contact_ribbon.png"
  },
  {
    id: "web",
    title: "Web Development",
    tags: ["Front End", "PHP Backend", "Node.JS"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit ligula vel vestibulum commodo. Mauris eget aliquet nulla, quis ultricies magna. Morbi sit amet sapien nisl. Vestibulum vel nisl suscipit, vestibulum vel nisl.",
    image: "/images/contact_ribbon.png"
  },
  {
    id: "mobile",
    title: "Mobile Development",
    tags: ["Android App", "IOS App", "Single Page"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit ligula vel vestibulum commodo. Mauris eget aliquet nulla, quis ultricies magna. Morbi sit amet sapien nisl. Vestibulum vel nisl suscipit, vestibulum vel nisl.",
    image: "/images/contact_ribbon.png"
  },
  {
    id: "maintenance",
    title: "Maintenance & Support",
    tags: ["AWS & Cloud", "Market Launch", "UI Design"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit ligula vel vestibulum commodo. Mauris eget aliquet nulla, quis ultricies magna. Morbi sit amet sapien nisl. Vestibulum vel nisl suscipit, vestibulum vel nisl.",
    image: "/images/contact_ribbon.png"
  },
  {
    id: "seo",
    title: "SEO Optimization",
    tags: ["Search Ranking", "Analytics", "Growth"],
    description: "Boost your online visibility and drive organic traffic. We optimize your digital presence to rank higher on search engines, connecting your brand with the right audience.",
    image: "/images/contact_ribbon.png"
  }
];

export default function ServicesTabSection() {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  const currentTab = tabsData.find(tab => tab.id === activeTab) || tabsData[0];

  const renderTitle = (title: string) => {
    const words = title.split(" ");
    if (words.length <= 1) return title;
    const lastWord = words.pop();
    return (
      <>
        {words.join(" ")} <span className="text-[#f47721]">{lastWord}</span>
      </>
    );
  };

  return (
    <section className="py-16 lg:py-24 bg-black transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">
        
        {/* Tabs */}
        <div className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] mb-12">
          <div className="flex w-max mx-auto gap-2 md:gap-3 px-2">
            {tabsData.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`whitespace-nowrap px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                    isActive 
                      ? "border-[#f47721] text-white" 
                      : "border-[#333] text-gray-300 hover:border-gray-500 hover:text-white"
                  }`}
                >
                  {tab.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-black border border-[#222] rounded-[32px] overflow-hidden relative shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 }
                },
                exit: { opacity: 0, transition: { duration: 0.2 } }
              }}
              className="flex flex-col lg:flex-row h-full w-full"
            >
              
              {/* Video Side (Left) */}
              <div className="w-full lg:w-1/2 relative min-h-[250px] lg:min-h-full flex items-center justify-center p-6 lg:p-8 bg-transparent">
                <video 
                  src="/images/VIDEO/3D.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-auto max-h-[280px] lg:max-h-[320px] object-contain drop-shadow-2xl brightness-110 contrast-150 invert hue-rotate-180 mix-blend-screen"
                ></video>
              </div>

              {/* Text Side (Right) */}
              <div className="w-full lg:w-1/2 p-6 md:p-8 lg:p-12 flex flex-col justify-center text-left">
                <motion.h2 
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
                  }}
                  className="text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-bold text-white mb-6 tracking-tight whitespace-nowrap"
                >
                  {renderTitle(currentTab.title)}
                </motion.h2>
                
                {/* Tags */}
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
                  }}
                  className="flex flex-wrap gap-4 mb-10"
                >
                  {currentTab.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="px-6 py-3 rounded-full border border-[#333] text-sm text-gray-300 font-medium bg-[#111] hover:border-[#f47721] hover:text-[#f47721] transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>

                <motion.p 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                  className="text-gray-400 leading-relaxed text-lg"
                >
                  {currentTab.description}
                </motion.p>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
