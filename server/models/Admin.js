const { Schema, model } = require('mongoose');

const adminSchema = new Schema(
    {
        role: {
            type: String,
            ref: 'User',
            required: true
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    },
  // set this to use virtual below
    {
        toJSON: {
        virtuals: true,
        },
    }
);

adminSchema.virtual('clients', {
    ref: 'Client',
    localField: '_id',
    foreignField: 'admin',
    justOne: false,
});

const Admin = model('Admin', adminSchema);

module.exports = Admin;
