import { cards, secondCardHoverSlides } from "./dummyData/cards";
import "./App.css";
import Card from "./components/Card";
import CoursePage from "./pages/CoursePage";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {

  const [cardIndex,setCardIndex] =useState(0)
  const navigate = useNavigate();

  const handlePrev=()=>{
    setCardIndex((prev)=> prev > 0 ? prev-1 :secondCardHoverSlides.length -1)
  }
  const handleCardNext=()=>{
    setCardIndex((prev)=> (prev + 1) % secondCardHoverSlides.length);
  }

  const handleNext=()=>{
    navigate('/course');
  }

  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen bg-[#FFFFFF] ">
        <h1 className="text-2xl text-center font-[Fustat] mt-[53px]">Note: Hover the component to view the animation & Click the arrow icon</h1>
      <div className="ml-[350px] flex flex-col gap-[24px] p-4">
      <h3 className="fonr-[Outfit] text-[24px] font-medium ">Your SkillShikshya Journey</h3>
      <h1 className="font-bold text-[32px]">
        <span className="text-[#1DA077]">Step</span> In <span className="text-[#1DA077]">Skill</span> Up. <span className="text-[#1DA077]">Stand</span>Out 🚀
      </h1>
        </div>

    
  
  <div className="max-w-7xl mx-auto ">
      <div className="grid grid-cols-2 justify-items-center gap-10 ">
        {cards.map((card, index) => {
          if (index === 1) {
            const currentHover = secondCardHoverSlides[cardIndex];
            return (
              <Card
                key={index}
                title={card.title}
                subtitle={card.subtitle}
                description={card.description}
                image={card.image}
                bgColor={card.bgColor}
                imagePosition={card.imagePosition}
                enableHoverEffect={card.enableHoverEffect}
                hoverImage={currentHover.hoverImage} // dynamic
                hoverText={currentHover.hoverText}   // dynamic
                onPrev={handlePrev}
                onNext={handleCardNext}
              />
            );
          }

          return (
            <Card
              key={index}
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
              image={card.image}
              bgColor={card.bgColor}
              imagePosition={card.imagePosition}
              hoverImage={card.hoverImage}
              hoverText={card.hoverText}
              enableHoverEffect={card.enableHoverEffect}
            />
          );
        })}
      </div>
    </div>

    <div className="flex items-center justify-center mt-10 gap-8">
      <button onClick={handlePrev} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
        <ChevronLeft className="w-8 h-8 text-gray-600" />
      </button>
      <button onClick={handleNext} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
        <ChevronRight className="w-8 h-8 text-gray-600" />
      </button>
    </div>
      </div>
      } />
      <Route path="/course" element={<CoursePage />} />
    </Routes>
  );
}


export default App;
