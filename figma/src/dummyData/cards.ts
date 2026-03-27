import Boy1Img from "../assets/Boy1.png";
import Boy2Img from "../assets/Boy2.png";
import GirlImg from "../assets/Girl.png";
import Boy3Img from "../assets/Boy3.png";
import image2 from "../assets/image2.png"

export const cards = [
    {
      title: "Start with Clarity",
      subtitle: "Step into a better learning path.",
      description: "Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.",
      image: Boy1Img,
      bgColor: "#E57373",
      imagePosition: "left",
      enableHoverEffect:true,
      hoverImage:image2,
      hoverText:"Clarity unlocked—stickers, sips, and skills all in one go!"

    },
    {
      title: "Learn By Doing",
      subtitle: "Practical Skills,real projects",
      description: "Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.",
      image: Boy2Img,
      bgColor: "#5492A0",
      imagePosition: "right",
      hoverImage:"/3.png",
      hoverText:"Focused faces—learning mode: ON!",
      enableHoverEffect:true
    },
    {
      title: "Get Monitored & Supported",
      subtitle: "You're not learning alone",
      description: "Stuck or need feedback? SkillShikshya's community of mentors and learners has your back with live support, interactive discussions, and expert insights. You're never on your own.",
      image: GirlImg,
      bgColor: "#6C64A8",
      imagePosition: "left",
    },
    {
      title:"Achieve & Showcase",
      subtitle:"Build your portfolio,get job-ready",
      description:"Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.",
      image: Boy3Img,
      bgColor:"#A88964",
      imagePosition: "right",
    }
  ];

  export const secondCardHoverSlides=[
    {
      hoverImage:"/3.png",
      hoverText:"Focused faces-learning mode:ON!"
    },
    {
      hoverImage:"/1.png",
      hoverText:"Laptops.leesons,and a whole lot of growth !"
    }
  ]