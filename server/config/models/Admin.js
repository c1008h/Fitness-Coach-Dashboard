import mongoose from 'mongoose';
import clientModel from './Client';

const AdminSchema = new mongoose.Schema({
    role: {
        type: String,
        ref: 'User',
        required: true
    },
    clients: {
        type: [clientModel],
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
},);

AdminSchema.virtual('clients', {
    ref: 'Client',
    localField: '_id',
    foreignField: 'admin',
    justOne: false,
});

const adminModel = model('Admin', AdminSchema);

export default adminModel;
