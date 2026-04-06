export enum TaskStatus {
    PENDING = 'pending',
    DONE = 'done',
}
export enum TaskSeverity {
    LOW = 'low',
    HIGH = 'high',
}
export interface Task {
    id: string;
    title: string;
    status: TaskStatus;
    severity: TaskSeverity;
}