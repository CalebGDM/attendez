/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateStudent = /* GraphQL */ `subscription OnCreateStudent($filter: ModelSubscriptionStudentFilterInput) {
  onCreateStudent(filter: $filter) {
    id
    name
    email
    grade
    enrroll
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
` as GeneratedSubscription<
  APITypes.OnCreateStudentSubscriptionVariables,
  APITypes.OnCreateStudentSubscription
>;
export const onUpdateStudent = /* GraphQL */ `subscription OnUpdateStudent($filter: ModelSubscriptionStudentFilterInput) {
  onUpdateStudent(filter: $filter) {
    id
    name
    email
    grade
    enrroll
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
` as GeneratedSubscription<
  APITypes.OnUpdateStudentSubscriptionVariables,
  APITypes.OnUpdateStudentSubscription
>;
export const onDeleteStudent = /* GraphQL */ `subscription OnDeleteStudent($filter: ModelSubscriptionStudentFilterInput) {
  onDeleteStudent(filter: $filter) {
    id
    name
    email
    grade
    enrroll
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
` as GeneratedSubscription<
  APITypes.OnDeleteStudentSubscriptionVariables,
  APITypes.OnDeleteStudentSubscription
>;
export const onCreateAttendance = /* GraphQL */ `subscription OnCreateAttendance(
  $filter: ModelSubscriptionAttendanceFilterInput
) {
  onCreateAttendance(filter: $filter) {
    id
    day
    time
    classID
    Student {
      id
      name
      email
      grade
      enrroll
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
` as GeneratedSubscription<
  APITypes.OnCreateAttendanceSubscriptionVariables,
  APITypes.OnCreateAttendanceSubscription
>;
export const onUpdateAttendance = /* GraphQL */ `subscription OnUpdateAttendance(
  $filter: ModelSubscriptionAttendanceFilterInput
) {
  onUpdateAttendance(filter: $filter) {
    id
    day
    time
    classID
    Student {
      id
      name
      email
      grade
      enrroll
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
` as GeneratedSubscription<
  APITypes.OnUpdateAttendanceSubscriptionVariables,
  APITypes.OnUpdateAttendanceSubscription
>;
export const onDeleteAttendance = /* GraphQL */ `subscription OnDeleteAttendance(
  $filter: ModelSubscriptionAttendanceFilterInput
) {
  onDeleteAttendance(filter: $filter) {
    id
    day
    time
    classID
    Student {
      id
      name
      email
      grade
      enrroll
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
` as GeneratedSubscription<
  APITypes.OnDeleteAttendanceSubscriptionVariables,
  APITypes.OnDeleteAttendanceSubscription
>;
export const onCreateTeacher = /* GraphQL */ `subscription OnCreateTeacher($filter: ModelSubscriptionTeacherFilterInput) {
  onCreateTeacher(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTeacherSubscriptionVariables,
  APITypes.OnCreateTeacherSubscription
>;
export const onUpdateTeacher = /* GraphQL */ `subscription OnUpdateTeacher($filter: ModelSubscriptionTeacherFilterInput) {
  onUpdateTeacher(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTeacherSubscriptionVariables,
  APITypes.OnUpdateTeacherSubscription
>;
export const onDeleteTeacher = /* GraphQL */ `subscription OnDeleteTeacher($filter: ModelSubscriptionTeacherFilterInput) {
  onDeleteTeacher(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTeacherSubscriptionVariables,
  APITypes.OnDeleteTeacherSubscription
>;
export const onCreateClass = /* GraphQL */ `subscription OnCreateClass($filter: ModelSubscriptionClassFilterInput) {
  onCreateClass(filter: $filter) {
    id
    name
    description
    days
    startHour
    grade
    group
    teacherID
    Attendances {
      nextToken
      __typename
    }
    Student {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateClassSubscriptionVariables,
  APITypes.OnCreateClassSubscription
>;
export const onUpdateClass = /* GraphQL */ `subscription OnUpdateClass($filter: ModelSubscriptionClassFilterInput) {
  onUpdateClass(filter: $filter) {
    id
    name
    description
    days
    startHour
    grade
    group
    teacherID
    Attendances {
      nextToken
      __typename
    }
    Student {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateClassSubscriptionVariables,
  APITypes.OnUpdateClassSubscription
>;
export const onDeleteClass = /* GraphQL */ `subscription OnDeleteClass($filter: ModelSubscriptionClassFilterInput) {
  onDeleteClass(filter: $filter) {
    id
    name
    description
    days
    startHour
    grade
    group
    teacherID
    Attendances {
      nextToken
      __typename
    }
    Student {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteClassSubscriptionVariables,
  APITypes.OnDeleteClassSubscription
>;
export const onCreateClassStudent = /* GraphQL */ `subscription OnCreateClassStudent(
  $filter: ModelSubscriptionClassStudentFilterInput
) {
  onCreateClassStudent(filter: $filter) {
    id
    studentId
    classId
    student {
      id
      name
      email
      grade
      enrroll
      group
      createdAt
      updatedAt
      __typename
    }
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateClassStudentSubscriptionVariables,
  APITypes.OnCreateClassStudentSubscription
>;
export const onUpdateClassStudent = /* GraphQL */ `subscription OnUpdateClassStudent(
  $filter: ModelSubscriptionClassStudentFilterInput
) {
  onUpdateClassStudent(filter: $filter) {
    id
    studentId
    classId
    student {
      id
      name
      email
      grade
      enrroll
      group
      createdAt
      updatedAt
      __typename
    }
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateClassStudentSubscriptionVariables,
  APITypes.OnUpdateClassStudentSubscription
>;
export const onDeleteClassStudent = /* GraphQL */ `subscription OnDeleteClassStudent(
  $filter: ModelSubscriptionClassStudentFilterInput
) {
  onDeleteClassStudent(filter: $filter) {
    id
    studentId
    classId
    student {
      id
      name
      email
      grade
      enrroll
      group
      createdAt
      updatedAt
      __typename
    }
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteClassStudentSubscriptionVariables,
  APITypes.OnDeleteClassStudentSubscription
>;
