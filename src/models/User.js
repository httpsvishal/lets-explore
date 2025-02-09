import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  nams: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
    required: true,
  },
},
 {timestamps:true}
);

const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User;
