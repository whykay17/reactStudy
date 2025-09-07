export type Issue = {
    id:string;
    title:string;
    status: 'backlog' | 'inprogress' | 'done';
    assignee?: string;
    priority?: 'low' | 'med' | 'high';
}