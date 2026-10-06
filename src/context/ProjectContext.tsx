import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ProjectMemory } from './types';
import { INITIAL_PROJECT_MEMORY } from './projectMemory';

interface ProjectContextValue {
  memory: ProjectMemory;
  updateMemory: (updater: (prev: ProjectMemory) => ProjectMemory) => void;
}

const ProjectContext = createContext<ProjectContextValue | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: ReactNode; initialData?: ProjectMemory }> = ({
  children,
  initialData = INITIAL_PROJECT_MEMORY,
}) => {
  const [memory, setMemory] = useState<ProjectMemory>(initialData);

  const updateMemory = (updater: (prev: ProjectMemory) => ProjectMemory) => {
    setMemory((prev) => updater(prev));
  };

  return (
    <ProjectContext.Provider value={{ memory, updateMemory }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectMemory = (): ProjectContextValue => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProjectMemory debe ser utilizado dentro de un ProjectProvider');
  }
  return context;
};

export default ProjectContext;
