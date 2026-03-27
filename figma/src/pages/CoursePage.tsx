import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CourseCard from "../components/CourseCard";
import StatCard from "../components/StatCard";
import SectionHeader from "../components/SectionHeader";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CoursePage = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const navigate = useNavigate();

  const handlePrev = () => {
    navigate("/");
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % cardsData.length);
  };

  const cardsData = [
    {
      id: 0,
      title: "All",
      count: 23,
      description: "available for powering through right now",
    },
    {
      id: 1,
      title: "Upcoming Courses",
      count: 5,
      description: "exciting new courses waiting to boost your skills.",
    },
    {
      id: 2,
      title: "Ongoing Courses",
      count: 10,
      description: "currently happening—don't miss out on the action!",
    },
  ];

  const handleStatClick = (clickedIndex: number) => {
    if (clickedIndex === activeIndex) return;
    setActiveIndex(clickedIndex);
  };

  return (
    <div className="min-h-screen p-8 bg-white">
      <SectionHeader
        title="Explore our classes and master trending skills !"
        highlight="What’s Hot Right Now! 🔥"
        note="Note: Click the Stat cards to change content"
      />

 <div className="flex gap-6 mt-12">
  {cardsData.map((card, index) => {
    const isActive = activeIndex === index;

    return (
      <motion.div
        key={card.id}
        layout
        className="min-w-0"
        style={{
          flexGrow: isActive ? 2 : 1, // smooth growth
          transition: "flex-grow 0.65s ease-in-out",
        }}
      >
        <div className="h-[461px] relative overflow-hidden rounded-[32px]">
          <AnimatePresence mode="wait">
            {isActive ? (
              <motion.div
                key="course"
                initial={{ opacity: 0, x: 80, y: -45 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: -80, y: 55 }}
                transition={{ duration: 0.55, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <CourseCard
                  title={card.title}
                  count={card.count}
                  description={card.description}
                />
              </motion.div>
            ) : (
              <motion.div
                key="stat"
                initial={{ opacity: 0, x: 80, y: -45 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: -80, y: 55 }}
                transition={{ duration: 0.55, ease: "easeInOut" }}
                className="absolute inset-0 cursor-pointer"
                onClick={() => handleStatClick(index)}
              >
                <StatCard
                  title={card.title}
                  count={card.count}
                  description={card.description}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    );
  })}
</div>

<div className="flex justify-center items-center mt-20 gap-8">
  <button onClick={handlePrev} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
    <ChevronLeft className="w-8 h-8 text-gray-600" />
  </button>
  <button onClick={handleNext} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
    <ChevronRight className="w-8 h-8 text-gray-600" />
  </button>
</div>
    </div>
  );
};

export default CoursePage;