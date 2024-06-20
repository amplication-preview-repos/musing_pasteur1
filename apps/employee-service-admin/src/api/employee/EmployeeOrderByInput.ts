import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  createdAt?: SortOrder;
  departmentId?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  hireDate?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  phoneNumber?: SortOrder;
  roleId?: SortOrder;
  salary?: SortOrder;
  updatedAt?: SortOrder;
};
