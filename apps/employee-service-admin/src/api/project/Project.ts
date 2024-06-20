import { Employee } from "../employee/Employee";

export type Project = {
  createdAt: Date;
  employee?: Employee | null;
  endDate: Date | null;
  id: string;
  name: string | null;
  startDate: Date | null;
  updatedAt: Date;
};
