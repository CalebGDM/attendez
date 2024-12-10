/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getAttendance = /* GraphQL */ `query GetAttendance($id: ID!) {
  getAttendance(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetAttendanceQueryVariables,
  APITypes.GetAttendanceQuery
>;
export const listAttendances = /* GraphQL */ `query ListAttendances(
  $filter: ModelAttendanceFilterInput
  $limit: Int
  $nextToken: String
) {
  listAttendances(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      day
      time
      classID
      createdAt
      updatedAt
      attendanceStudentId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAttendancesQueryVariables,
  APITypes.ListAttendancesQuery
>;
export const attendancesByClassID = /* GraphQL */ `query AttendancesByClassID(
  $classID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAttendanceFilterInput
  $limit: Int
  $nextToken: String
) {
  attendancesByClassID(
    classID: $classID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      day
      time
      classID
      createdAt
      updatedAt
      attendanceStudentId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AttendancesByClassIDQueryVariables,
  APITypes.AttendancesByClassIDQuery
>;
export const getTeacher = /* GraphQL */ `query GetTeacher($id: ID!) {
  getTeacher(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetTeacherQueryVariables,
  APITypes.GetTeacherQuery
>;
export const listTeachers = /* GraphQL */ `query ListTeachers(
  $filter: ModelTeacherFilterInput
  $limit: Int
  $nextToken: String
) {
  listTeachers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTeachersQueryVariables,
  APITypes.ListTeachersQuery
>;
export const getClass = /* GraphQL */ `query GetClass($id: ID!) {
  getClass(id: $id) {
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
` as GeneratedQuery<APITypes.GetClassQueryVariables, APITypes.GetClassQuery>;
export const listClasses = /* GraphQL */ `query ListClasses(
  $filter: ModelClassFilterInput
  $limit: Int
  $nextToken: String
) {
  listClasses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListClassesQueryVariables,
  APITypes.ListClassesQuery
>;
export const classesByTeacherID = /* GraphQL */ `query ClassesByTeacherID(
  $teacherID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelClassFilterInput
  $limit: Int
  $nextToken: String
) {
  classesByTeacherID(
    teacherID: $teacherID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ClassesByTeacherIDQueryVariables,
  APITypes.ClassesByTeacherIDQuery
>;
export const getStudent = /* GraphQL */ `query GetStudent($id: ID!) {
  getStudent(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetStudentQueryVariables,
  APITypes.GetStudentQuery
>;
export const listStudents = /* GraphQL */ `query ListStudents(
  $filter: ModelStudentFilterInput
  $limit: Int
  $nextToken: String
) {
  listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListStudentsQueryVariables,
  APITypes.ListStudentsQuery
>;
export const getClassStudent = /* GraphQL */ `query GetClassStudent($id: ID!) {
  getClassStudent(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetClassStudentQueryVariables,
  APITypes.GetClassStudentQuery
>;
export const listClassStudents = /* GraphQL */ `query ListClassStudents(
  $filter: ModelClassStudentFilterInput
  $limit: Int
  $nextToken: String
) {
  listClassStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      classId
      studentId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListClassStudentsQueryVariables,
  APITypes.ListClassStudentsQuery
>;
export const classStudentsByClassId = /* GraphQL */ `query ClassStudentsByClassId(
  $classId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelClassStudentFilterInput
  $limit: Int
  $nextToken: String
) {
  classStudentsByClassId(
    classId: $classId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      classId
      studentId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ClassStudentsByClassIdQueryVariables,
  APITypes.ClassStudentsByClassIdQuery
>;
export const classStudentsByStudentId = /* GraphQL */ `query ClassStudentsByStudentId(
  $studentId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelClassStudentFilterInput
  $limit: Int
  $nextToken: String
) {
  classStudentsByStudentId(
    studentId: $studentId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      classId
      studentId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ClassStudentsByStudentIdQueryVariables,
  APITypes.ClassStudentsByStudentIdQuery
>;
