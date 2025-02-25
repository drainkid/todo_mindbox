export interface TodoProps {
    id: string
    completed: boolean,
    taskName: string,
}

export type TodoStatus = 'all' | 'active' | 'completed'