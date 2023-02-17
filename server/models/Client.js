const { Schema, model } = require('mongoose');

const clientSchema = new Schema(
  {
    role: {
      type: String,
      required: true, 
      ref: User
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    admin: {
        type: Schema.Types.ObjectId,
        ref: 'Admin',
        required: true,
    },
    weight: {
        type: String,
        required: true
    },
    weightGoal: {
        type: String,
        required: true
    },
    calorieGoal: {
        type: String,
        required: true
    },
    calorie: {
        type: String,
        required: true
    },
    workoutplan: {
        type: Array,
        required: true
    }
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Client = model('client', clientSchema);

module.exports = Client;
