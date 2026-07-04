"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView, animate } from "framer-motion";
import { ArrowRight } from "lucide-react";

function AnimatedStat({ value }: { value: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView || !nodeRef.current) return;
    
    // Parse the value: e.g. "10K+" -> numeric: 10, suffix: "K+"
    const match = value.match(/^([\d\.]+)(.*)$/);
    if (!match) {
      nodeRef.current.textContent = value;
      return;
    }
    
    const target = parseFloat(match[1]);
    const suffix = match[2];
    const isFloat = match[1].includes('.');

    const controls = animate(0, target, {
      duration: 2,
      ease: "easeOut",
      onUpdate(val) {
        if (nodeRef.current) {
          nodeRef.current.textContent = (isFloat ? val.toFixed(1) : Math.floor(val)) + suffix;
        }
      },
    });

    return () => controls.stop();
  }, [value, inView]);

  return <span ref={nodeRef}>0{value.replace(/[\d\.]/g, '')}</span>;
}

type ProjectCategory = "ALL" | "MOBILE APPLICATIONS" | "WEBSITE DEVELOPMENT" | "DIGITAL MARKETING";

interface ProjectStat {
  value: string;
  label: string;
}

interface Project {
  id: number;
  category: ProjectCategory[];
  company: string;
  title: string;
  subtitle: string;
  description?: string;
  bgColor: string;
  cardBgColor?: string;
  bgImage: string;
  stats?: ProjectStat[];
  reverseLayout?: boolean;
  styleType?: "split" | "card";
  deviceType?: "phone" | "tablet" | "imac" | "macbook";
}

const projects: Project[] = [
  {
    id: 1,
    category: ["ALL", "MOBILE APPLICATIONS"],
    company: "anarc DEVELOPERS",
    title: "Anarc Developers",
    subtitle: "Creating modern digital work space for Construction and Architecture industry",
    description: "Changing employees lives with mobile and connected technologies, With an eye to the future, Anarc has sought to transform",
    bgColor: "#c18d36", // Gold
    bgImage: "/images/Best Business Management Course for Future Entrepreneurs.jpg", // Provided image
    stats: [
      { value: "100+", label: "Employee Usage" },
      { value: "4.9/5", label: "Avg. Rating" },
    ],
    styleType: "split",
    deviceType: "phone",
  },
  {
    id: 2,
    category: ["ALL", "MOBILE APPLICATIONS", "WEBSITE DEVELOPMENT"],
    company: "adox Solutions",
    title: "Adoxsolutions",
    subtitle: "An intuitive customer engagement platform",
    description: "Innovative solution provided by Adox for their cleints which will provide real time updates of the projects, Manage every customer interaction easily and strengthen the relationship with your customers and maximize sales. 24 hours activate. 24\\7 support",
    bgColor: "#098ad8", // Blue
    bgImage: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80", // Coding
    stats: [
      { value: "10K+", label: "Downloads" },
      { value: "999+", label: "Employee Usage" },
      { value: "4.7/5", label: "Avg. Rating" },
    ],
    reverseLayout: true,
    styleType: "split",
    deviceType: "phone",
  },
  {
    id: 3,
    category: ["ALL", "WEBSITE DEVELOPMENT"],
    company: "ESOM",
    title: "Petty Cash",
    subtitle: "Effective platform for petty cash management and providing an intuitive.",
    description: "User-friendly experience, offering clients to access high performance and ease and submit and manage petty cash expenses",
    bgColor: "#c61d23", // Red
    bgImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80", // Laptop typing
    stats: [
      { value: "500+", label: "Employee Usage" },
      { value: "4.9/5", label: "Avg. Rating" },
    ],
    styleType: "split",
    deviceType: "phone",
  },
  {
    id: 4,
    category: ["ALL", "MOBILE APPLICATIONS"],
    company: "motoro",
    title: "Motoro",
    subtitle: "Vehicle To Vehicle Communication App",
    description: "Motoro is idea conceivbed by gruop of entrepreneurs which enable users communciate with other users in vehicles which will help in case of emergencies., vehicle parking requirements etc.",
    bgColor: "#00a9e8", // Light Blue
    bgImage: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80", // Hand holding phone
    stats: [
      { value: "10K+", label: "Downloads" },
      { value: "999+", label: "Employee Usage" },
      { value: "4.7/5", label: "Avg. Rating" },
    ],
    reverseLayout: true,
    styleType: "split",
    deviceType: "phone",
  },
  {
    id: 5,
    category: ["ALL", "WEBSITE DEVELOPMENT"],
    company: "ONROAD",
    title: "ONROAD",
    subtitle: "India's First Organized Multi Brand Automobile Bodyshop Chain.",
    bgColor: "#ffcc00", // Yellow background
    cardBgColor: "#d9a123", // Darker yellow inner card
    bgImage: "/images/Food Ordering App UI.jpg", // Provided UI image
    styleType: "card",
    deviceType: "tablet",
  },
  {
    id: 6,
    category: ["ALL", "WEBSITE DEVELOPMENT", "DIGITAL MARKETING"],
    company: "exa",
    title: "exa",
    subtitle: "Leading Electrical & Telecommunication Engineering In Cochin , Kerala",
    bgColor: "#e91e63", // Pink background
    cardBgColor: "#b01246", // Darker pink inner card
    bgImage: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80", // Industrial sunset
    styleType: "card",
    deviceType: "imac",
  },
  {
    id: 7,
    category: ["ALL", "WEBSITE DEVELOPMENT", "DIGITAL MARKETING"],
    company: "Zamil",
    title: "Zamil Architectural Industries",
    subtitle: "Leading Architects Company In Saudi Arabia , Member Of The Zamil Group",
    bgColor: "#128f41", // Green background
    cardBgColor: "#0b662d", // Darker green inner card
    bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80", // Architecture
    styleType: "card",
    deviceType: "macbook",
  }
];

export default function WorksSection() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("ALL");

  const categories: ProjectCategory[] = [
    "ALL",
    "MOBILE APPLICATIONS",
    "WEBSITE DEVELOPMENT",
    "DIGITAL MARKETING"
  ];

  const filteredProjects = projects.filter(project => project.category.includes(activeTab));

  return (
    <section className="bg-[#090b10] w-full text-white pt-10">
      
      {/* Section Heading */}
      <div className="container mx-auto px-4 max-w-[1200px] pt-12 pb-4">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] leading-[1.1] font-bold tracking-tight mb-2 text-white">
            Our Recent <span className="text-[#f47721]">Works</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mt-4">
            Explore our latest projects and see how we've helped businesses achieve their digital goals.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="container mx-auto px-4 max-w-[1200px] py-8 md:py-12">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 border-b border-gray-800">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`pb-4 px-2 text-xs md:text-sm tracking-wider uppercase font-medium transition-colors relative whitespace-nowrap
                ${activeTab === category 
                  ? "text-[#f47721]" 
                  : "text-gray-400 hover:text-white"
                }
              `}
            >
              {category}
              {activeTab === category && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f47721]"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Projects List */}
      <div className="w-full flex flex-col">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`w-full ${project.styleType === 'card' ? 'p-4 md:p-12 lg:p-20' : ''}`}
            >
              {project.styleType === "card" ? (
                /* Card Layout */
                <div 
                  className="w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden flex flex-col lg:flex-row relative shadow-2xl"
                  style={{ backgroundColor: project.bgColor }}
                >
                  {/* Left Side (Text) */}
                  <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 flex flex-col justify-center items-center relative z-10">
                    <div 
                      className="rounded-[2rem] p-10 md:p-14 shadow-xl w-full max-w-md"
                      style={{ backgroundColor: project.cardBgColor || 'rgba(0,0,0,0.1)' }}
                    >
                      <div className="flex flex-col items-center text-center text-white">
                        {/* Logo placeholder */}
                        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
                          <span className="text-2xl font-bold italic">{project.company.charAt(0)}</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 font-serif">{project.company}</h3>
                        <p className="text-base md:text-lg font-medium mb-10 leading-relaxed opacity-90">
                          {project.subtitle}
                        </p>
                        
                        <button className="flex items-center gap-2 border border-white hover:bg-white hover:text-black transition-colors px-6 py-3 rounded-full text-sm font-medium w-fit">
                          View Project <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right Side (Device Mockup) */}
                  <div className="w-full lg:w-1/2 p-8 md:p-16 flex flex-col items-center justify-center relative z-10">
                    {/* Device frame (Tablet/Laptop) based on deviceType */}
                    <div className={`relative bg-black rounded-[2rem] p-3 md:p-5 shadow-2xl border-4 border-gray-800 ${project.deviceType === 'tablet' ? 'w-full max-w-[360px] aspect-[3/4]' : 'w-full max-w-[600px] aspect-[16/10] mb-8'}`}>
                      {/* Screen */}
                      <div className="w-full h-full bg-gray-900 rounded-[1rem] overflow-hidden relative">
                         <img src={project.bgImage} alt={`${project.title} Interface`} className="w-full h-full object-cover" />
                      </div>
                      
                      {/* Base for Laptop/Macbook */}
                      {project.deviceType === 'macbook' && (
                        <div className="absolute top-[98%] left-1/2 -translate-x-1/2 w-[120%] h-5 bg-gray-300 rounded-b-xl border-t-2 border-gray-400 flex justify-center">
                           <div className="w-32 h-2 bg-gray-400 rounded-b-md"></div>
                        </div>
                      )}
                    </div>

                    {/* Base for iMac (drawn below the screen frame) */}
                    {project.deviceType === 'imac' && (
                      <div className="flex flex-col items-center mt-0 relative z-0">
                        {/* Stand */}
                        <div className="w-32 h-24 bg-gray-300 border-x-4 border-gray-400 shadow-inner" style={{ clipPath: 'polygon(20% 0, 80% 0, 100% 100%, 0 100%)', marginTop: '-10px' }}></div>
                        {/* Base plate */}
                        <div className="w-48 h-3 bg-gray-400 rounded-t-xl -mt-2"></div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                /* Split Layout (Original) */
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[600px] overflow-hidden">
                  {/* Text Side */}
                  <div 
                    className={`flex flex-col justify-center p-12 lg:p-24 2xl:p-32 text-white ${project.reverseLayout ? 'lg:order-2' : 'lg:order-1'}`}
                    style={{ backgroundColor: project.bgColor }}
                  >
                    <div className="max-w-xl mx-auto w-full">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 font-serif tracking-wide">{project.company}</h3>
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">{project.title}</h2>
                      <p className="text-lg md:text-xl font-medium mb-6 leading-relaxed opacity-90">
                        {project.subtitle}
                      </p>
                      {project.description && (
                        <p className="text-base md:text-lg mb-10 leading-relaxed opacity-80">
                          {project.description}
                        </p>
                      )}
                      
                      {project.stats && project.stats.length > 0 && (
                        <>
                          <div className="flex items-center gap-2 mb-12">
                            <span className="text-sm font-medium">Available on</span>
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M2.38 2.05L16.29 10l-4.14 4.14L2.38 4.38V2.05z" fill="#00e676"/>
                              <path d="M16.29 10l5.33 3.08c1.39.81.93 2.58-.59 3.08L2.38 21.95v-7.81L16.29 10z" fill="#29b6f6"/>
                              <path d="M2.38 4.38l9.77 9.76-9.77 9.77V4.38z" fill="#ffca28"/>
                            </svg>
                          </div>

                          <div className="flex flex-wrap gap-8 md:gap-16 mb-12">
                            {project.stats.map((stat, i) => (
                              <div key={i} className="flex flex-col">
                                <span className="text-3xl md:text-4xl lg:text-5xl font-light mb-2"><AnimatedStat value={stat.value} /></span>
                                <span className="text-xs md:text-sm opacity-80 uppercase tracking-wider">{stat.label}</span>
                              </div>
                            ))}
                          </div>
                        </>
                      )}

                      <button className="flex items-center gap-2 border border-white/40 hover:border-white hover:bg-white/10 transition-colors px-6 py-3 rounded-md text-sm font-medium w-fit">
                        View Project <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className={`relative flex items-center justify-center min-h-[500px] lg:min-h-full overflow-hidden ${project.reverseLayout ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="absolute inset-0 z-0">
                      <img src={project.bgImage} alt={`${project.title} Background`} className="w-full h-full object-cover" />
                      <div className={`absolute inset-0 mix-blend-multiply opacity-40`} style={{ backgroundColor: project.bgColor }}></div>
                      <div className="absolute inset-0 bg-black/20"></div>
                    </div>

                    <div className="relative z-10 flex items-center justify-center w-full py-16 px-8">
                      <div className="relative w-full max-w-[280px] aspect-[9/19] bg-white rounded-[3rem] p-4 shadow-2xl">
                        <div className="w-full h-full rounded-[2.2rem] bg-[#f4f5f7] overflow-hidden relative flex flex-col items-center justify-center text-center px-6">
                           <h3 className="text-2xl font-bold mb-3 tracking-wide" style={{ color: project.bgColor }}>{project.company}</h3>
                           <p className="text-[13px] text-slate-500 mb-10 font-medium">Demo Application Interface</p>
                           
                           <div className="w-full space-y-4">
                             <div className="w-full h-12 bg-white rounded-xl shadow-sm border border-gray-100"></div>
                             <div className="w-full h-12 bg-white rounded-xl shadow-sm border border-gray-100"></div>
                             <div className="w-full h-14 mt-2 rounded-xl shadow-md flex items-center justify-center text-white font-bold text-[15px]" style={{ backgroundColor: project.bgColor }}>Login</div>
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

    </section>
  );
}
