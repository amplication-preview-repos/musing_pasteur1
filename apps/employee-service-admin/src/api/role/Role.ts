import { Employee } from "../employee/Employee";

export type Role = {
  createdAt: Date;
  description: string | null;
  employees?: Array<Employee>;
  id: string;
  title: string | null;
  updatedAt: Date;
};
