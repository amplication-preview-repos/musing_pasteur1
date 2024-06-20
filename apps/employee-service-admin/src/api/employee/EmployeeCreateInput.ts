import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { ProjectCreateNestedManyWithoutEmployeesInput } from "./ProjectCreateNestedManyWithoutEmployeesInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type EmployeeCreateInput = {
  department?: DepartmentWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  hireDate?: Date | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  projects?: ProjectCreateNestedManyWithoutEmployeesInput;
  role?: RoleWhereUniqueInput | null;
  salary?: number | null;
};
