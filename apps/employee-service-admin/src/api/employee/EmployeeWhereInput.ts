import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type EmployeeWhereInput = {
  department?: DepartmentWhereUniqueInput;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  hireDate?: DateTimeNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  projects?: ProjectListRelationFilter;
  role?: RoleWhereUniqueInput;
  salary?: FloatNullableFilter;
};
