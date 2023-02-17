import mongoose from 'mongoose'

const ClientSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    required: true, 
  },
  lastname: {
    type: String,
    required: true, 
  },
  birthday: {
    type: String,
    required: true
  },
  sex: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  goalType: {
    type: String,
    required: true
  },
  goaltime: {
    type: String,
    required: true, 
  },
  workoutDays: {
      type: Number,
      required: true
  },
  calorieGoal: {
      type: String,
      required: true
  },
  workoutplan: {
      type: Array,
      required: true
  },
  calorieIntake: {
    type: Number,
  },
  currentWeight: {
    type: Number,
  },
  completedDailyWorkout: {
    type: Boolean
  },
  photo: { 
    type: String, 
    required: true
  },
  currentPhoto: {
    type:String
  }
});

const clientModel = mongoose.model('Client', ClientSchema);

export default clientModel