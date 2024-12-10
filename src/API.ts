/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateStudentInput = {
  id?: string | null,
  name: string,
  email: string,
  grade: string,
  enrroll: string,
  group: string,
};

export type ModelStudentConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  grade?: ModelStringInput | null,
  enrroll?: ModelStringInput | null,
  group?: ModelStringInput | null,
  and?: Array< ModelStudentConditionInput | null > | null,
  or?: Array< ModelStudentConditionInput | null > | null,
  not?: ModelStudentConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Student = {
  __typename: "Student",
  id: string,
  name: string,
  email: string,
  grade: string,
  enrroll: string,
  group: string,
  classs?: ModelClassStudentConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelClassStudentConnection = {
  __typename: "ModelClassStudentConnection",
  items:  Array<ClassStudent | null >,
  nextToken?: string | null,
};

export type ClassStudent = {
  __typename: "ClassStudent",
  id: string,
  studentId: string,
  classId: string,
  student: Student,
  class: Class,
  createdAt: string,
  updatedAt: string,
};

export type Class = {
  __typename: "Class",
  id: string,
  name: string,
  description?: string | null,
  days: Array< number >,
  startHour: string,
  grade: string,
  group: string,
  teacherID: string,
  Attendances?: ModelAttendanceConnection | null,
  Student?: ModelClassStudentConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelAttendanceConnection = {
  __typename: "ModelAttendanceConnection",
  items:  Array<Attendance | null >,
  nextToken?: string | null,
};

export type Attendance = {
  __typename: "Attendance",
  id: string,
  day: string,
  time: string,
  classID: string,
  Student?: Student | null,
  createdAt: string,
  updatedAt: string,
  attendanceStudentId?: string | null,
};

export type UpdateStudentInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  grade?: string | null,
  enrroll?: string | null,
  group?: string | null,
};

export type DeleteStudentInput = {
  id: string,
};

export type CreateAttendanceInput = {
  id?: string | null,
  day: string,
  time: string,
  classID: string,
  attendanceStudentId?: string | null,
};

export type ModelAttendanceConditionInput = {
  day?: ModelStringInput | null,
  time?: ModelStringInput | null,
  classID?: ModelIDInput | null,
  and?: Array< ModelAttendanceConditionInput | null > | null,
  or?: Array< ModelAttendanceConditionInput | null > | null,
  not?: ModelAttendanceConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  attendanceStudentId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateAttendanceInput = {
  id: string,
  day?: string | null,
  time?: string | null,
  classID?: string | null,
  attendanceStudentId?: string | null,
};

export type DeleteAttendanceInput = {
  id: string,
};

export type CreateTeacherInput = {
  id?: string | null,
  name: string,
};

export type ModelTeacherConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelTeacherConditionInput | null > | null,
  or?: Array< ModelTeacherConditionInput | null > | null,
  not?: ModelTeacherConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Teacher = {
  __typename: "Teacher",
  id: string,
  name: string,
  Classes?: ModelClassConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelClassConnection = {
  __typename: "ModelClassConnection",
  items:  Array<Class | null >,
  nextToken?: string | null,
};

export type UpdateTeacherInput = {
  id: string,
  name?: string | null,
};

export type DeleteTeacherInput = {
  id: string,
};

export type CreateClassInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  days: Array< number >,
  startHour: string,
  grade: string,
  group: string,
  teacherID: string,
};

export type ModelClassConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  days?: ModelIntInput | null,
  startHour?: ModelStringInput | null,
  grade?: ModelStringInput | null,
  group?: ModelStringInput | null,
  teacherID?: ModelIDInput | null,
  and?: Array< ModelClassConditionInput | null > | null,
  or?: Array< ModelClassConditionInput | null > | null,
  not?: ModelClassConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateClassInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  days?: Array< number > | null,
  startHour?: string | null,
  grade?: string | null,
  group?: string | null,
  teacherID?: string | null,
};

export type DeleteClassInput = {
  id: string,
};

export type CreateClassStudentInput = {
  id?: string | null,
  studentId: string,
  classId: string,
};

export type ModelClassStudentConditionInput = {
  studentId?: ModelIDInput | null,
  classId?: ModelIDInput | null,
  and?: Array< ModelClassStudentConditionInput | null > | null,
  or?: Array< ModelClassStudentConditionInput | null > | null,
  not?: ModelClassStudentConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateClassStudentInput = {
  id: string,
  studentId?: string | null,
  classId?: string | null,
};

export type DeleteClassStudentInput = {
  id: string,
};

export type ModelStudentFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  grade?: ModelStringInput | null,
  enrroll?: ModelStringInput | null,
  group?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStudentFilterInput | null > | null,
  or?: Array< ModelStudentFilterInput | null > | null,
  not?: ModelStudentFilterInput | null,
};

export type ModelStudentConnection = {
  __typename: "ModelStudentConnection",
  items:  Array<Student | null >,
  nextToken?: string | null,
};

export type ModelAttendanceFilterInput = {
  id?: ModelIDInput | null,
  day?: ModelStringInput | null,
  time?: ModelStringInput | null,
  classID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAttendanceFilterInput | null > | null,
  or?: Array< ModelAttendanceFilterInput | null > | null,
  not?: ModelAttendanceFilterInput | null,
  attendanceStudentId?: ModelIDInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelTeacherFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTeacherFilterInput | null > | null,
  or?: Array< ModelTeacherFilterInput | null > | null,
  not?: ModelTeacherFilterInput | null,
};

export type ModelTeacherConnection = {
  __typename: "ModelTeacherConnection",
  items:  Array<Teacher | null >,
  nextToken?: string | null,
};

export type ModelClassFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  days?: ModelIntInput | null,
  startHour?: ModelStringInput | null,
  grade?: ModelStringInput | null,
  group?: ModelStringInput | null,
  teacherID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelClassFilterInput | null > | null,
  or?: Array< ModelClassFilterInput | null > | null,
  not?: ModelClassFilterInput | null,
};

export type ModelClassStudentFilterInput = {
  id?: ModelIDInput | null,
  studentId?: ModelIDInput | null,
  classId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelClassStudentFilterInput | null > | null,
  or?: Array< ModelClassStudentFilterInput | null > | null,
  not?: ModelClassStudentFilterInput | null,
};

export type ModelSubscriptionStudentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  grade?: ModelSubscriptionStringInput | null,
  enrroll?: ModelSubscriptionStringInput | null,
  group?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStudentFilterInput | null > | null,
  or?: Array< ModelSubscriptionStudentFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionAttendanceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  day?: ModelSubscriptionStringInput | null,
  time?: ModelSubscriptionStringInput | null,
  classID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAttendanceFilterInput | null > | null,
  or?: Array< ModelSubscriptionAttendanceFilterInput | null > | null,
  attendanceStudentId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionTeacherFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTeacherFilterInput | null > | null,
  or?: Array< ModelSubscriptionTeacherFilterInput | null > | null,
};

export type ModelSubscriptionClassFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  days?: ModelSubscriptionIntInput | null,
  startHour?: ModelSubscriptionStringInput | null,
  grade?: ModelSubscriptionStringInput | null,
  group?: ModelSubscriptionStringInput | null,
  teacherID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionClassFilterInput | null > | null,
  or?: Array< ModelSubscriptionClassFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionClassStudentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  studentId?: ModelSubscriptionIDInput | null,
  classId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionClassStudentFilterInput | null > | null,
  or?: Array< ModelSubscriptionClassStudentFilterInput | null > | null,
};

export type CreateStudentMutationVariables = {
  input: CreateStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type CreateStudentMutation = {
  createStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    email: string,
    grade: string,
    enrroll: string,
    group: string,
    classs?:  {
      __typename: "ModelClassStudentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStudentMutationVariables = {
  input: UpdateStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type UpdateStudentMutation = {
  updateStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    email: string,
    grade: string,
    enrroll: string,
    group: string,
    classs?:  {
      __typename: "ModelClassStudentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStudentMutationVariables = {
  input: DeleteStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type DeleteStudentMutation = {
  deleteStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    email: string,
    grade: string,
    enrroll: string,
    group: string,
    classs?:  {
      __typename: "ModelClassStudentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAttendanceMutationVariables = {
  input: CreateAttendanceInput,
  condition?: ModelAttendanceConditionInput | null,
};

export type CreateAttendanceMutation = {
  createAttendance?:  {
    __typename: "Attendance",
    id: string,
    day: string,
    time: string,
    classID: string,
    Student?:  {
      __typename: "Student",
      id: string,
      name: string,
      email: string,
      grade: string,
      enrroll: string,
      group: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    attendanceStudentId?: string | null,
  } | null,
};

export type UpdateAttendanceMutationVariables = {
  input: UpdateAttendanceInput,
  condition?: ModelAttendanceConditionInput | null,
};

export type UpdateAttendanceMutation = {
  updateAttendance?:  {
    __typename: "Attendance",
    id: string,
    day: string,
    time: string,
    classID: string,
    Student?:  {
      __typename: "Student",
      id: string,
      name: string,
      email: string,
      grade: string,
      enrroll: string,
      group: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    attendanceStudentId?: string | null,
  } | null,
};

export type DeleteAttendanceMutationVariables = {
  input: DeleteAttendanceInput,
  condition?: ModelAttendanceConditionInput | null,
};

export type DeleteAttendanceMutation = {
  deleteAttendance?:  {
    __typename: "Attendance",
    id: string,
    day: string,
    time: string,
    classID: string,
    Student?:  {
      __typename: "Student",
      id: string,
      name: string,
      email: string,
      grade: string,
      enrroll: string,
      group: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    attendanceStudentId?: string | null,
  } | null,
};

export type CreateTeacherMutationVariables = {
  input: CreateTeacherInput,
  condition?: ModelTeacherConditionInput | null,
};

export type CreateTeacherMutation = {
  createTeacher?:  {
    __typename: "Teacher",
    id: string,
    name: string,
    Classes?:  {
      __typename: "ModelClassConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTeacherMutationVariables = {
  input: UpdateTeacherInput,
  condition?: ModelTeacherConditionInput | null,
};

export type UpdateTeacherMutation = {
  updateTeacher?:  {
    __typename: "Teacher",
    id: string,
    name: string,
    Classes?:  {
      __typename: "ModelClassConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTeacherMutationVariables = {
  input: DeleteTeacherInput,
  condition?: ModelTeacherConditionInput | null,
};

export type DeleteTeacherMutation = {
  deleteTeacher?:  {
    __typename: "Teacher",
    id: string,
    name: string,
    Classes?:  {
      __typename: "ModelClassConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateClassMutationVariables = {
  input: CreateClassInput,
  condition?: ModelClassConditionInput | null,
};

export type CreateClassMutation = {
  createClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    description?: string | null,
    days: Array< number >,
    startHour: string,
    grade: string,
    group: string,
    teacherID: string,
    Attendances?:  {
      __typename: "ModelAttendanceConnection",
      nextToken?: string | null,
    } | null,
    Student?:  {
      __typename: "ModelClassStudentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateClassMutationVariables = {
  input: UpdateClassInput,
  condition?: ModelClassConditionInput | null,
};

export type UpdateClassMutation = {
  updateClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    description?: string | null,
    days: Array< number >,
    startHour: string,
    grade: string,
    group: string,
    teacherID: string,
    Attendances?:  {
      __typename: "ModelAttendanceConnection",
      nextToken?: string | null,
    } | null,
    Student?:  {
      __typename: "ModelClassStudentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteClassMutationVariables = {
  input: DeleteClassInput,
  condition?: ModelClassConditionInput | null,
};

export type DeleteClassMutation = {
  deleteClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    description?: string | null,
    days: Array< number >,
    startHour: string,
    grade: string,
    group: string,
    teacherID: string,
    Attendances?:  {
      __typename: "ModelAttendanceConnection",
      nextToken?: string | null,
    } | null,
    Student?:  {
      __typename: "ModelClassStudentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateClassStudentMutationVariables = {
  input: CreateClassStudentInput,
  condition?: ModelClassStudentConditionInput | null,
};

export type CreateClassStudentMutation = {
  createClassStudent?:  {
    __typename: "ClassStudent",
    id: string,
    studentId: string,
    classId: string,
    student:  {
      __typename: "Student",
      id: string,
      name: string,
      email: string,
      grade: string,
      enrroll: string,
      group: string,
      createdAt: string,
      updatedAt: string,
    },
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description?: string | null,
      days: Array< number >,
      startHour: string,
      grade: string,
      group: string,
      teacherID: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateClassStudentMutationVariables = {
  input: UpdateClassStudentInput,
  condition?: ModelClassStudentConditionInput | null,
};

export type UpdateClassStudentMutation = {
  updateClassStudent?:  {
    __typename: "ClassStudent",
    id: string,
    studentId: string,
    classId: string,
    student:  {
      __typename: "Student",
      id: string,
      name: string,
      email: string,
      grade: string,
      enrroll: string,
      group: string,
      createdAt: string,
      updatedAt: string,
    },
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description?: string | null,
      days: Array< number >,
      startHour: string,
      grade: string,
      group: string,
      teacherID: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteClassStudentMutationVariables = {
  input: DeleteClassStudentInput,
  condition?: ModelClassStudentConditionInput | null,
};

export type DeleteClassStudentMutation = {
  deleteClassStudent?:  {
    __typename: "ClassStudent",
    id: string,
    studentId: string,
    classId: string,
    student:  {
      __typename: "Student",
      id: string,
      name: string,
      email: string,
      grade: string,
      enrroll: string,
      group: string,
      createdAt: string,
      updatedAt: string,
    },
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description?: string | null,
      days: Array< number >,
      startHour: string,
      grade: string,
      group: string,
      teacherID: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetStudentQueryVariables = {
  id: string,
};

export type GetStudentQuery = {
  getStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    email: string,
    grade: string,
    enrroll: string,
    group: string,
    classs?:  {
      __typename: "ModelClassStudentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStudentsQueryVariables = {
  filter?: ModelStudentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStudentsQuery = {
  listStudents?:  {
    __typename: "ModelStudentConnection",
    items:  Array< {
      __typename: "Student",
      id: string,
      name: string,
      email: string,
      grade: string,
      enrroll: string,
      group: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAttendanceQueryVariables = {
  id: string,
};

export type GetAttendanceQuery = {
  getAttendance?:  {
    __typename: "Attendance",
    id: string,
    day: string,
    time: string,
    classID: string,
    Student?:  {
      __typename: "Student",
      id: string,
      name: string,
      email: string,
      grade: string,
      enrroll: string,
      group: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    attendanceStudentId?: string | null,
  } | null,
};

export type ListAttendancesQueryVariables = {
  filter?: ModelAttendanceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAttendancesQuery = {
  listAttendances?:  {
    __typename: "ModelAttendanceConnection",
    items:  Array< {
      __typename: "Attendance",
      id: string,
      day: string,
      time: string,
      classID: string,
      createdAt: string,
      updatedAt: string,
      attendanceStudentId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AttendancesByClassIDQueryVariables = {
  classID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAttendanceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AttendancesByClassIDQuery = {
  attendancesByClassID?:  {
    __typename: "ModelAttendanceConnection",
    items:  Array< {
      __typename: "Attendance",
      id: string,
      day: string,
      time: string,
      classID: string,
      createdAt: string,
      updatedAt: string,
      attendanceStudentId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTeacherQueryVariables = {
  id: string,
};

export type GetTeacherQuery = {
  getTeacher?:  {
    __typename: "Teacher",
    id: string,
    name: string,
    Classes?:  {
      __typename: "ModelClassConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTeachersQueryVariables = {
  filter?: ModelTeacherFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTeachersQuery = {
  listTeachers?:  {
    __typename: "ModelTeacherConnection",
    items:  Array< {
      __typename: "Teacher",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetClassQueryVariables = {
  id: string,
};

export type GetClassQuery = {
  getClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    description?: string | null,
    days: Array< number >,
    startHour: string,
    grade: string,
    group: string,
    teacherID: string,
    Attendances?:  {
      __typename: "ModelAttendanceConnection",
      nextToken?: string | null,
    } | null,
    Student?:  {
      __typename: "ModelClassStudentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListClassesQueryVariables = {
  filter?: ModelClassFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListClassesQuery = {
  listClasses?:  {
    __typename: "ModelClassConnection",
    items:  Array< {
      __typename: "Class",
      id: string,
      name: string,
      description?: string | null,
      days: Array< number >,
      startHour: string,
      grade: string,
      group: string,
      teacherID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ClassesByTeacherIDQueryVariables = {
  teacherID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelClassFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ClassesByTeacherIDQuery = {
  classesByTeacherID?:  {
    __typename: "ModelClassConnection",
    items:  Array< {
      __typename: "Class",
      id: string,
      name: string,
      description?: string | null,
      days: Array< number >,
      startHour: string,
      grade: string,
      group: string,
      teacherID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetClassStudentQueryVariables = {
  id: string,
};

export type GetClassStudentQuery = {
  getClassStudent?:  {
    __typename: "ClassStudent",
    id: string,
    studentId: string,
    classId: string,
    student:  {
      __typename: "Student",
      id: string,
      name: string,
      email: string,
      grade: string,
      enrroll: string,
      group: string,
      createdAt: string,
      updatedAt: string,
    },
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description?: string | null,
      days: Array< number >,
      startHour: string,
      grade: string,
      group: string,
      teacherID: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListClassStudentsQueryVariables = {
  filter?: ModelClassStudentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListClassStudentsQuery = {
  listClassStudents?:  {
    __typename: "ModelClassStudentConnection",
    items:  Array< {
      __typename: "ClassStudent",
      id: string,
      studentId: string,
      classId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ClassStudentsByStudentIdQueryVariables = {
  studentId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelClassStudentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ClassStudentsByStudentIdQuery = {
  classStudentsByStudentId?:  {
    __typename: "ModelClassStudentConnection",
    items:  Array< {
      __typename: "ClassStudent",
      id: string,
      studentId: string,
      classId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ClassStudentsByClassIdQueryVariables = {
  classId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelClassStudentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ClassStudentsByClassIdQuery = {
  classStudentsByClassId?:  {
    __typename: "ModelClassStudentConnection",
    items:  Array< {
      __typename: "ClassStudent",
      id: string,
      studentId: string,
      classId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateStudentSubscriptionVariables = {
  filter?: ModelSubscriptionStudentFilterInput | null,
};

export type OnCreateStudentSubscription = {
  onCreateStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    email: string,
    grade: string,
    enrroll: string,
    group: string,
    classs?:  {
      __typename: "ModelClassStudentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStudentSubscriptionVariables = {
  filter?: ModelSubscriptionStudentFilterInput | null,
};

export type OnUpdateStudentSubscription = {
  onUpdateStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    email: string,
    grade: string,
    enrroll: string,
    group: string,
    classs?:  {
      __typename: "ModelClassStudentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStudentSubscriptionVariables = {
  filter?: ModelSubscriptionStudentFilterInput | null,
};

export type OnDeleteStudentSubscription = {
  onDeleteStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    email: string,
    grade: string,
    enrroll: string,
    group: string,
    classs?:  {
      __typename: "ModelClassStudentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAttendanceSubscriptionVariables = {
  filter?: ModelSubscriptionAttendanceFilterInput | null,
};

export type OnCreateAttendanceSubscription = {
  onCreateAttendance?:  {
    __typename: "Attendance",
    id: string,
    day: string,
    time: string,
    classID: string,
    Student?:  {
      __typename: "Student",
      id: string,
      name: string,
      email: string,
      grade: string,
      enrroll: string,
      group: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    attendanceStudentId?: string | null,
  } | null,
};

export type OnUpdateAttendanceSubscriptionVariables = {
  filter?: ModelSubscriptionAttendanceFilterInput | null,
};

export type OnUpdateAttendanceSubscription = {
  onUpdateAttendance?:  {
    __typename: "Attendance",
    id: string,
    day: string,
    time: string,
    classID: string,
    Student?:  {
      __typename: "Student",
      id: string,
      name: string,
      email: string,
      grade: string,
      enrroll: string,
      group: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    attendanceStudentId?: string | null,
  } | null,
};

export type OnDeleteAttendanceSubscriptionVariables = {
  filter?: ModelSubscriptionAttendanceFilterInput | null,
};

export type OnDeleteAttendanceSubscription = {
  onDeleteAttendance?:  {
    __typename: "Attendance",
    id: string,
    day: string,
    time: string,
    classID: string,
    Student?:  {
      __typename: "Student",
      id: string,
      name: string,
      email: string,
      grade: string,
      enrroll: string,
      group: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    attendanceStudentId?: string | null,
  } | null,
};

export type OnCreateTeacherSubscriptionVariables = {
  filter?: ModelSubscriptionTeacherFilterInput | null,
};

export type OnCreateTeacherSubscription = {
  onCreateTeacher?:  {
    __typename: "Teacher",
    id: string,
    name: string,
    Classes?:  {
      __typename: "ModelClassConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTeacherSubscriptionVariables = {
  filter?: ModelSubscriptionTeacherFilterInput | null,
};

export type OnUpdateTeacherSubscription = {
  onUpdateTeacher?:  {
    __typename: "Teacher",
    id: string,
    name: string,
    Classes?:  {
      __typename: "ModelClassConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTeacherSubscriptionVariables = {
  filter?: ModelSubscriptionTeacherFilterInput | null,
};

export type OnDeleteTeacherSubscription = {
  onDeleteTeacher?:  {
    __typename: "Teacher",
    id: string,
    name: string,
    Classes?:  {
      __typename: "ModelClassConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateClassSubscriptionVariables = {
  filter?: ModelSubscriptionClassFilterInput | null,
};

export type OnCreateClassSubscription = {
  onCreateClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    description?: string | null,
    days: Array< number >,
    startHour: string,
    grade: string,
    group: string,
    teacherID: string,
    Attendances?:  {
      __typename: "ModelAttendanceConnection",
      nextToken?: string | null,
    } | null,
    Student?:  {
      __typename: "ModelClassStudentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateClassSubscriptionVariables = {
  filter?: ModelSubscriptionClassFilterInput | null,
};

export type OnUpdateClassSubscription = {
  onUpdateClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    description?: string | null,
    days: Array< number >,
    startHour: string,
    grade: string,
    group: string,
    teacherID: string,
    Attendances?:  {
      __typename: "ModelAttendanceConnection",
      nextToken?: string | null,
    } | null,
    Student?:  {
      __typename: "ModelClassStudentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteClassSubscriptionVariables = {
  filter?: ModelSubscriptionClassFilterInput | null,
};

export type OnDeleteClassSubscription = {
  onDeleteClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    description?: string | null,
    days: Array< number >,
    startHour: string,
    grade: string,
    group: string,
    teacherID: string,
    Attendances?:  {
      __typename: "ModelAttendanceConnection",
      nextToken?: string | null,
    } | null,
    Student?:  {
      __typename: "ModelClassStudentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateClassStudentSubscriptionVariables = {
  filter?: ModelSubscriptionClassStudentFilterInput | null,
};

export type OnCreateClassStudentSubscription = {
  onCreateClassStudent?:  {
    __typename: "ClassStudent",
    id: string,
    studentId: string,
    classId: string,
    student:  {
      __typename: "Student",
      id: string,
      name: string,
      email: string,
      grade: string,
      enrroll: string,
      group: string,
      createdAt: string,
      updatedAt: string,
    },
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description?: string | null,
      days: Array< number >,
      startHour: string,
      grade: string,
      group: string,
      teacherID: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateClassStudentSubscriptionVariables = {
  filter?: ModelSubscriptionClassStudentFilterInput | null,
};

export type OnUpdateClassStudentSubscription = {
  onUpdateClassStudent?:  {
    __typename: "ClassStudent",
    id: string,
    studentId: string,
    classId: string,
    student:  {
      __typename: "Student",
      id: string,
      name: string,
      email: string,
      grade: string,
      enrroll: string,
      group: string,
      createdAt: string,
      updatedAt: string,
    },
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description?: string | null,
      days: Array< number >,
      startHour: string,
      grade: string,
      group: string,
      teacherID: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteClassStudentSubscriptionVariables = {
  filter?: ModelSubscriptionClassStudentFilterInput | null,
};

export type OnDeleteClassStudentSubscription = {
  onDeleteClassStudent?:  {
    __typename: "ClassStudent",
    id: string,
    studentId: string,
    classId: string,
    student:  {
      __typename: "Student",
      id: string,
      name: string,
      email: string,
      grade: string,
      enrroll: string,
      group: string,
      createdAt: string,
      updatedAt: string,
    },
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      description?: string | null,
      days: Array< number >,
      startHour: string,
      grade: string,
      group: string,
      teacherID: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
