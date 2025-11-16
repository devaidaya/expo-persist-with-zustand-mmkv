import { Feather } from '@expo/vector-icons';

import { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

export default function InputTodo() {
	const [title, setTitle] = useState('');

	const handleAdd = () => {
		if (!title.trim()) {
			return;
		}
		//TODO: Ajouter la fonctionnalité d'ajout de tâche ic

		setTitle('');
	};
	return (
		<View style={styles.inputCard}>
			<TextInput
				value={title}
				onChangeText={setTitle}
				placeholder="Ajouter une nouvelle tâche..."
				placeholderTextColor="#9BA1AE"
				style={styles.input}
				onSubmitEditing={handleAdd}
			/>
			<TouchableOpacity
				style={[styles.addButton, !title.trim() && styles.addButtonDisabled]}
				onPress={handleAdd}
				disabled={!title.trim()}>
				<Feather
					name="plus"
					size={20}
					color="#fff"
				/>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	inputCard: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#151E33',
		marginHorizontal: 20,
		borderRadius: 18,
		paddingHorizontal: 16,
		paddingVertical: 6,
		gap: 12,
		shadowColor: '#000',
		shadowOpacity: 0.25,
		shadowRadius: 10,
		shadowOffset: { width: 0, height: 10 },
		elevation: 10,
	},
	input: {
		flex: 1,
		color: '#fff',
		fontSize: 16,
		paddingVertical: 10,
	},
	addButton: {
		backgroundColor: '#6C5CE7',
		borderRadius: 14,
		width: 44,
		height: 44,
		alignItems: 'center',
		justifyContent: 'center',
	},
	addButtonDisabled: {
		opacity: 0.4,
	},
});
