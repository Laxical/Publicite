import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  products: {
    type: Map,
    of: {
      productUrl: { type: String, required: true },
      walletUniqueId: { type: String, required: true },
    },
  },
});

const Company = mongoose.model('Company', companySchema);

export default Company;