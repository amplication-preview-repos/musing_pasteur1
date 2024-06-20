import { EmployeeCreateNestedManyWithoutRolesInput } from "./EmployeeCreateNestedManyWithoutRolesInput";

export type RoleCreateInput = {
  description?: string | null;
  employees?: EmployeeCreateNestedManyWithoutRolesInput;
  title?: string | null;
};
