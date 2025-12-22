import { useState, useMemo } from "react";
import { Skill } from "@/reusables/types";

export const useSkillsFilter = (skills: Skill[]) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredSkills = useMemo(
    () => selectedCategory === "all" 
      ? skills 
      : skills.filter(skill => skill.category === selectedCategory),
    [skills, selectedCategory]
  );

  return {
    selectedCategory,
    setSelectedCategory,
    filteredSkills,
  };
};