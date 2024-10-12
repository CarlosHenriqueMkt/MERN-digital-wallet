import transactionRepository from "../repositories/transactionRepository.js";

async function create(body, id) {
	if (!id) throw new Error("User id is required");

	return await transactionRepository.create({ ...body, userId: id });
}

async function findAllByUser(id) {
	if (!id) throw new Error("User id is required");
	return await transactionRepository.findAllByUser(id);
}

async function update(id, updateData, userId) {
	if (!id || !userId)
		throw new Error("Transaction ID and user ID are required");

	const transaction = await transactionRepository.findById(id);
	if (!transaction || transaction.userId.toString() !== userId.toString()) {
		return null; // Verifica se a transação pertence ao usuário
	}

	// Atualiza os dados da transação
	return await transactionRepository.update(id, updateData);
}

async function deleteTransactionData(id, userId) {
	if (!id || !userId)
		throw new Error("Transaction ID and user ID are required");

	const transaction = await transactionRepository.findById(id);
	if (!transaction || transaction.userId.toString() !== userId.toString()) {
		return null; // Verifica se a transação pertence ao usuário
	}

	// Deleta a transação
	return await transactionRepository.deleteTransactionData(id);
}

export default { create, findAllByUser, update, deleteTransactionData };
