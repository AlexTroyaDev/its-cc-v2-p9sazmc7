export enum TaskStatus {
    PENDING = 'pending',
    DONE = 'done',
}
export interface Task {
    id: string;
    title: string;
    status: TaskStatus;
    isImportant: boolean;
}