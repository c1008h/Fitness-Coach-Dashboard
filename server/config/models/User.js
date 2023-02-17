import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
  // firstname: { type: String, required: true },
  // lastname: { type: String, required: true },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
  },
  avatar: {
    type: String, 
    required: true
  },
  password: {
      type: String,
      required: true,
  },
  role: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Client' || 'Admin'
  }]
});

// hash user password
UserSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
UserSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const userModel = model('User', UserSchema);

export default userModel;
