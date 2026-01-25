import { memo } from "react";
import SkillCard from "./SkillCard"
import { SKILLS } from "../constants"

const Skills = () => {
  return (
   <section className="section">
    <div className="container  mt-5 mb-9">
      <h2  className="text-4xl md:text-6xl font-medium tracking-tight mb-5 mx-3 ">
       Current Stack
      </h2>
      <div className="h-1 w-28 mb-9 mx-3 bg-white"></div>
      <p className="leading-7 mt-3 mb-8 text-center text-responsive mx-1 ">A small list of cool things I use to construct my projects.</p>

      <div className="grid gap-4 md:gap-3 mx-5 grid-cols-2 lg:grid-cols-4 ">
        {
          SKILLS.map(({imgSrc, label,desc},key)=>
          (
           <SkillCard
           key={key}
           imgSrc={imgSrc}
           label={label}
           desc={desc} />
          ))
        }
      </div>
    </div>
   </section>
  )
}

export default memo(Skills)