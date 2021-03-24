const mongoose = require('mongoose');
const ChefSchema = new mongoose.Schema({
    title: { type: String, required: true},
    description: { type: String, default: '', },
}, {timestamps: true });
mongoose.model('Chef', ChefSchema);
