import { Department } from "../department/Department";
import { Project } from "../project/Project";
import { Role } from "../role/Role";

export type Employee = {
  createdAt: Date;
  department?: Department | null;
  email: string | null;
  firstName: string | null;
  hireDate: Date | null;
  id: string;
  lastName: string | null;
  phoneNumber: string | null;
  projects?: Array<Project>;
  role?: Role | null;
  salary: number | null;
  updatedAt: Date;
};
