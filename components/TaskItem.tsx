import { Feather } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import type { Task } from '../store/useTodoStore';

const formatTime = (timestamp: number) =>
	new Intl.DateTimeFormat('fr-FR', {
		hour: '2-digit',
		minute: '2-digit',
	}).format(timestamp);

type TaskItemProps = {
	item: Task;
	toggleTask: () => void;
	deleteTask: () => void;
};

export default function TaskItem({
	item,
	deleteTask,
	toggleTask,
}: TaskItemProps) {
	return (
		<View style={styles.taskCard}>
			<TouchableOpacity
				onPress={toggleTask}
				style={[styles.checkbox, item.completed && styles.checkboxCompleted]}
				activeOpacity={0.8}>
				{item.completed && (
					<Feather
						name="check"
						size={16}
						color="#fff"
					/>
				)}
			</TouchableOpacity>
			<View style={styles.taskContent}>
				<Text
					style={[styles.taskTitle, item.completed && styles.taskTitleDone]}>
					{item.title}
				</Text>
				<Text style={styles.taskTimestamp}>
					Ajoutée à {formatTime(item.createdAt)}
				</Text>
			</View>
			<TouchableOpacity
				onPress={deleteTask}
				hitSlop={10}>
				<Feather
					name="trash-2"
					size={18}
					color="#FF6B6B"
				/>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	taskCard: {
		backgroundColor: '#121A2D',
		borderRadius: 18,
		padding: 18,
		flexDirection: 'row',
		alignItems: 'center',
		gap: 14,
	},
	checkbox: {
		width: 28,
		height: 28,
		borderRadius: 8,
		borderWidth: 2,
		borderColor: '#3D4A70',
		alignItems: 'center',
		justifyContent: 'center',
	},
	checkboxCompleted: {
		backgroundColor: '#3BF3A5',
		borderColor: '#3BF3A5',
	},
	taskContent: {
		flex: 1,
	},
	taskTitle: {
		color: '#fff',
		fontSize: 16,
		fontWeight: '500',
	},
	taskTitleDone: {
		color: '#6F7B96',
		textDecorationLine: 'line-through',
	},
	taskTimestamp: {
		color: '#6F7B96',
		fontSize: 13,
		marginTop: 4,
	},
});
