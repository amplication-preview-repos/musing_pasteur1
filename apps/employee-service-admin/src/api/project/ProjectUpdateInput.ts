import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type ProjectUpdateInput = {
  employee?: EmployeeWhereUniqueInput | null;
  endDate?: Date | null;
  name?: string | null;
  startDate?: Date | null;
};
