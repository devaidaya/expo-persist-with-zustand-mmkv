export type Task = {
	id: string;
	title: string;
	completed: boolean;
	createdAt: number;
};

type TodoState = {
	tasks: Task[];
	addTask: (title: string) => void;
	toggleTask: (id: string) => void;
	deleteTask: (id: string) => void;
};
