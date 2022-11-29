import React from 'react'
import Editior from './Editior';

function Body() {
    const sections = {
        basicInfo: "Personal Info",
        skills: "Skills",
        workExp: "Work Experience",
        project: "Projects",
        education: "Education",
        achievement: "Achievements",
        summary: "Summary",
        other: "Other",
      };
  return (
    <div>
        <Editior sections = {sections} />
    </div>
  )
}

export default Body