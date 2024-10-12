import transactionService from "../services/transactionService.js";

async function create(req, res) {
	const body = req.body;
	const { _id: id } = res.locals.user;

	try {
		const transaction = await transactionService.create(body, id);
		return res.status(201).send(transaction);
	} catch (err) {
		return res.status(409).send(err.message);
	}
}

async function findAllById(req, res) {
	const { _id: id } = res.locals.user;

	try {
		const transaction = await transactionService.findAllByUser(id);
		return res.send(transaction);
	} catch (err) {
		return res.status(500).send(err.message);
	}
}

async function updateTransaction(req, res) {
	const { id } = req.params; // ID da transação a ser atualizada
	const { _id: userId } = res.locals.user; // Usuário autenticado
	const updateData = req.body;

	try {
		const updatedTransaction = await transactionService.update(
			id,
			updateData,
			userId
		);
		if (!updatedTransaction) {
			return res
				.status(404)
				.send("Transaction not found or user unauthorized");
		}
		return res.status(200).send(updatedTransaction);
	} catch (err) {
		return res.status(500).send(err.message);
	}
}

async function deleteTransaction(req, res) {
	const { id } = req.params; // ID da transação a ser deletada
	const { _id: userId } = res.locals.user; // ID do usuário autenticado

	try {
		const deletedTransaction =
			await transactionService.deleteTransactionData(id, userId);
		if (!deletedTransaction) {
			return res
				.status(404)
				.send("Transaction not found or user unauthorized");
		}
		return res.status(200).send("Transaction deleted successfully");
	} catch (err) {
		return res.status(500).send(err.message);
	}
}

export default { create, findAllById, updateTransaction, deleteTransaction };
