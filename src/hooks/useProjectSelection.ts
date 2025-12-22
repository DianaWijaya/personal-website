import { useState } from "react";
import { Project } from "@/reusables/types";

export const useProjectSelection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleSelect = (project: Project) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  const handleHover = (id: number | null) => {
    setHoveredId(id);
  };

  return {
    hoveredId,
    selectedProject,
    handleSelect,
    handleClose,
    handleHover,
  };
};