const mongoose = require("mongoose");
let adminSchema = new mongoose.Schema(
  {
    adminId: {
        type: String,
    },
    adminPassword: {
        type: String,
    },
},
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Admin", adminSchema);

// $2b$10$TUG0gWCbn3tOZg5qusp2jebcEGQqyhJaLxHoYoYvLt.MKXfNSKGRS