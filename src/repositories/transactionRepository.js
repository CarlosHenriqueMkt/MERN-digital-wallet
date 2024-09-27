import TransactionSchema from "../schemas/transaction.js";

async function create(data) {
	return TransactionSchema.create(data);
}

async function findAllByUser(id) {
	return TransactionSchema.find({ userId: id });
}

export default { create, findAllByUser };
