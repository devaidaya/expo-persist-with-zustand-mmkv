import { Feather } from '@expo/vector-icons';
import {
	FlatList,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import 'react-native-get-random-values';
import { SafeAreaView } from 'react-native-safe-area-context';

import InputTodo from '@/components/InputTodo';
import TaskItem from '@/components/TaskItem';

export default function HomeScreen() {
	const handleDeleteTask = (taskId: string) => {
		// TODO: connect to Zustand store
		console.log('delete task (pending implementation):', taskId);
	};

	const handleToggleTask = (taskId: string) => {
		// TODO: connect to Zustand store
		console.log('toggle task (pending implementation):', taskId);
	};

	return (
		<SafeAreaView style={styles.safeArea}>
			<KeyboardAvoidingView
				behavior={Platform.select({ ios: 'padding', android: undefined })}
				style={styles.flex}>
				<View style={styles.header}>
					<Text style={styles.heading}>Mes tâches</Text>
					<Text style={styles.subheading}>Tout est terminé 🎉</Text>
				</View>

				<InputTodo />

				<FlatList
					data={null}
					keyExtractor={(item) => item.id}
					contentContainerStyle={styles.listContent}
					ItemSeparatorComponent={() => <View style={styles.separator} />}
					renderItem={({ item }) => (
						<TaskItem
							item={item}
							deleteTask={() => handleDeleteTask(item.id)}
							toggleTask={() => handleToggleTask(item.id)}
						/>
					)}
					ListEmptyComponent={
						<View style={styles.emptyState}>
							<Feather
								name="sun"
								size={48}
								color="#9BA1AE"
							/>
							<Text style={styles.emptyTitle}>Aucune tâche pour le moment</Text>
							<Text style={styles.emptySubtitle}>
								Ajoutez vos idées et organisez votre journée en quelques
								secondes.
							</Text>
						</View>
					}
				/>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: '#0B1220',
	},
	flex: { flex: 1 },
	header: {
		paddingHorizontal: 20,
		paddingTop: 32,
		paddingBottom: 16,
	},
	heading: {
		color: '#fff',
		fontSize: 32,
		fontWeight: '600',
	},
	subheading: {
		color: '#9BA1AE',
		marginTop: 6,
		fontSize: 16,
	},

	listContent: {
		paddingHorizontal: 20,
		paddingTop: 28,
		paddingBottom: 40,
	},
	separator: {
		height: 16,
	},
	emptyState: {
		marginTop: 64,
		alignItems: 'center',
		gap: 12,
		paddingHorizontal: 20,
	},
	emptyTitle: {
		color: '#fff',
		fontSize: 18,
		fontWeight: '600',
	},
	emptySubtitle: {
		color: '#9BA1AE',
		textAlign: 'center',
		lineHeight: 20,
	},
});
