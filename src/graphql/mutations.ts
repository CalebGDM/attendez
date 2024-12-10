/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createAttendance = /* GraphQL */ `mutation CreateAttendance(
  $input: CreateAttendanceInput!
  $condition: ModelAttendanceConditionInput
) {
  createAttendance(input: $input, condition: $condition) {
    id
    day
    time
    classID
    Student {
      id
      name
      accountNumber
      email
      grade
      group
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    attendanceStudentId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAttendanceMutationVariables,
  APITypes.CreateAttendanceMutation
>;
export const updateAttendance = /* GraphQL */ `mutation UpdateAttendance(
  $input: UpdateAttendanceInput!
  $condition: ModelAttendanceConditionInput
) {
  updateAttendance(input: $input, condition: $condition) {
    id
    day
    time
    classID
    Student {
      id
      name
      accountNumber
      email
      grade
      group
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    attendanceStudentId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAttendanceMutationVariables,
  APITypes.UpdateAttendanceMutation
>;
export const deleteAttendance = /* GraphQL */ `mutation DeleteAttendance(
  $input: DeleteAttendanceInput!
  $condition: ModelAttendanceConditionInput
) {
  deleteAttendance(input: $input, condition: $condition) {
    id
    day
    time
    classID
    Student {
      id
      name
      accountNumber
      email
      grade
      group
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    attendanceStudentId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAttendanceMutationVariables,
  APITypes.DeleteAttendanceMutation
>;
export const createTeacher = /* GraphQL */ `mutation CreateTeacher(
  $input: CreateTeacherInput!
  $condition: ModelTeacherConditionInput
) {
  createTeacher(input: $input, condition: $condition) {
    id
    name
    Classes {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTeacherMutationVariables,
  APITypes.CreateTeacherMutation
>;
export const updateTeacher = /* GraphQL */ `mutation UpdateTeacher(
  $input: UpdateTeacherInput!
  $condition: ModelTeacherConditionInput
) {
  updateTeacher(input: $input, condition: $condition) {
    id
    name
    Classes {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTeacherMutationVariables,
  APITypes.UpdateTeacherMutation
>;
export const deleteTeacher = /* GraphQL */ `mutation DeleteTeacher(
  $input: DeleteTeacherInput!
  $condition: ModelTeacherConditionInput
) {
  deleteTeacher(input: $input, condition: $condition) {
    id
    name
    Classes {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTeacherMutationVariables,
  APITypes.DeleteTeacherMutation
>;
export const createClass = /* GraphQL */ `mutation CreateClass(
  $input: CreateClassInput!
  $condition: ModelClassConditionInput
) {
  createClass(input: $input, condition: $condition) {
    id
    name
    description
    days
    startHour
    Students {
      nextToken
      __typename
    }
    grade
    group
    teacherID
    Attendances {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateClassMutationVariables,
  APITypes.CreateClassMutation
>;
export const updateClass = /* GraphQL */ `mutation UpdateClass(
  $input: UpdateClassInput!
  $condition: ModelClassConditionInput
) {
  updateClass(input: $input, condition: $condition) {
    id
    name
    description
    days
    startHour
    Students {
      nextToken
      __typename
    }
    grade
    group
    teacherID
    Attendances {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateClassMutationVariables,
  APITypes.UpdateClassMutation
>;
export const deleteClass = /* GraphQL */ `mutation DeleteClass(
  $input: DeleteClassInput!
  $condition: ModelClassConditionInput
) {
  deleteClass(input: $input, condition: $condition) {
    id
    name
    description
    days
    startHour
    Students {
      nextToken
      __typename
    }
    grade
    group
    teacherID
    Attendances {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteClassMutationVariables,
  APITypes.DeleteClassMutation
>;
export const createStudent = /* GraphQL */ `mutation CreateStudent(
  $input: CreateStudentInput!
  $condition: ModelStudentConditionInput
) {
  createStudent(input: $input, condition: $condition) {
    id
    name
    accountNumber
    email
    grade
    group
    classs {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateStudentMutationVariables,
  APITypes.CreateStudentMutation
>;
export const updateStudent = /* GraphQL */ `mutation UpdateStudent(
  $input: UpdateStudentInput!
  $condition: ModelStudentConditionInput
) {
  updateStudent(input: $input, condition: $condition) {
    id
    name
    accountNumber
    email
    grade
    group
    classs {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateStudentMutationVariables,
  APITypes.UpdateStudentMutation
>;
export const deleteStudent = /* GraphQL */ `mutation DeleteStudent(
  $input: DeleteStudentInput!
  $condition: ModelStudentConditionInput
) {
  deleteStudent(input: $input, condition: $condition) {
    id
    name
    accountNumber
    email
    grade
    group
    classs {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteStudentMutationVariables,
  APITypes.DeleteStudentMutation
>;
export const createClassStudent = /* GraphQL */ `mutation CreateClassStudent(
  $input: CreateClassStudentInput!
  $condition: ModelClassStudentConditionInput
) {
  createClassStudent(input: $input, condition: $condition) {
    id
    classId
    studentId
    class {
      id
      name
      description
      days
      startHour
      grade
      group
      teacherID
      createdAt
      updatedAt
      __typename
    }
    student {
      id
      name
      accountNumber
      email
      grade
      group
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateClassStudentMutationVariables,
  APITypes.CreateClassStudentMutation
>;
export const updateClassStudent = /* GraphQL */ `mutation UpdateClassStudent(
  $input: UpdateClassStudentInput!
  $condition: ModelClassStudentConditionInput
) {
  updateClassStudent(input: $input, condition: $condition) {
    id
    classId
    studentId
    class {
      id
      name
      description
      days
      startHour
      grade
      group
      teacherID
      createdAt
      updatedAt
      __typename
    }
    student {
      id
      name
      accountNumber
      email
      grade
      group
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateClassStudentMutationVariables,
  APITypes.UpdateClassStudentMutation
>;
export const deleteClassStudent = /* GraphQL */ `mutation DeleteClassStudent(
  $input: DeleteClassStudentInput!
  $condition: ModelClassStudentConditionInput
) {
  deleteClassStudent(input: $input, condition: $condition) {
    id
    classId
    studentId
    class {
      id
      name
      description
      days
      startHour
      grade
      group
      teacherID
      createdAt
      updatedAt
      __typename
    }
    student {
      id
      name
      accountNumber
      email
      grade
      group
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteClassStudentMutationVariables,
  APITypes.DeleteClassStudentMutation
>;
