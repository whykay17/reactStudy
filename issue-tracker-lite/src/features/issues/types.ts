export type Issue = {
    id:string;
    title:string;
    status: 'Backlog' | 'In-Progress' | 'Done';
    assignee?: string;
    priority?: 'low' | 'med' | 'high';
}