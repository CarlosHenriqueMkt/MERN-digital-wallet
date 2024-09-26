import TransactionSchema from "../schemas/transaction.js";

async function create(data) {
	return TransactionSchema.create(data);
}

export default { create };
