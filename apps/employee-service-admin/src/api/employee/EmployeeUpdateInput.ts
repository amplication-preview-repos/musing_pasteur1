import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { ProjectUpdateManyWithoutEmployeesInput } from "./ProjectUpdateManyWithoutEmployeesInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type EmployeeUpdateInput = {
  department?: DepartmentWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  hireDate?: Date | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  projects?: ProjectUpdateManyWithoutEmployeesInput;
  role?: RoleWhereUniqueInput | null;
  salary?: number | null;
};
