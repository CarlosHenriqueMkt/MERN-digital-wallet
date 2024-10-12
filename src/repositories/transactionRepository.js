import TransactionSchema from "../schemas/transaction.js";

async function create(data) {
	return TransactionSchema.create(data);
}

async function findAllByUser(id) {
	return TransactionSchema.find({ userId: id });
}

async function findById(id) {
	return TransactionSchema.findById(id);
}

async function update(id, updateData) {
	return TransactionSchema.findByIdAndUpdate(id, updateData, { new: true });
}

async function deleteTransactionData(id) {
	return TransactionSchema.findByIdAndDelete(id);
}

export default {
	create,
	findAllByUser,
	findById,
	update,
	deleteTransactionData,
};
