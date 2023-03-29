const mongoose = require("mongoose");
let companySchema = new mongoose.Schema({
    addedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    companyName: {
      type: String,
      required: true,
    },
    registeredName: {
      type: String,
      required: true,
    },
    oneLiner: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
    },
    website: {
      type: String,
    },
    incorporatedDate: {
      type: String,
      required: true,
    },
    companyHQ: {
      type: String,
      required: true,
    },
    businessModel: {
      type: String,
      required: true,
    },
    numberOfEmployees: {
      type: String,
    },
    founder1Name: {
      type: String,
      required: true,
    },
    founder1LinkedinProfile: {
      type: String,
    },
    founder2Name: {
      type: String,
    },
    founder2LinkedinProfile: {
      type: String,
    },
    companyCategories: {
      type: String,
      required: true,
    },
    revenueStream: {
      type: String,
      required: true,
    },
    fundingDetails: {
      type: String,
    },
    latestFundingAmount: {
      type: Number,
    },
    latestFundingDate: {
      type: String,
    },
    latestFundingRound: {
      type: String,
    },
    latestFundingAmount: {
      type: Number,
    },
    targetGroup: {
      type: String,
    },
    isApprvoed: {
      type: Boolean,
      default: false,
      required: true,
    },
  });
module.exports = mongoose.model("Company", companySchema);



