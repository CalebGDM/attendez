interface Class  {
    id: string;
    name: string;
    description?: string | null;
    days: number[];
    startHour: string;
    teacher?: {
        name: string;
    };
    group: string;
    grade: string;
}

export type {Class as ClassType}