import { Document, Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (v: string) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v),
      message: "Invalid email format",
    },
  },
  password: {
    type: String,
    required: function(this: UserDocument) {
      return this.provider === 'email';
    },
    select: false
  },
  provider: {
    type: String,
    required: true,
    enum: ['email', 'google'],
    default: 'email'
  },
  googleId: {
    type: String,
    required: function(this: UserDocument) {
      return this.provider === 'google';
    },
    unique: true,
    sparse: true
  },
  createdAt: { type: Date, default: Date.now },
});

userSchema.pre('save', async function(next) {
  if (this.provider === 'email' && this.isModified('password')) {
    try {

      if (!this.password) {
        throw new Error('Password is required for email provider');
      }

      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      next();
    } catch (error: any) {
      next(error);
    }
  } else {
    next();
  }
});

export interface UserDocument extends Document {
  name: string;
  email: string;
  password?: string;
  createdAt: Date;
  provider: 'email' | 'google';
  googleId?: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

userSchema.methods.comparePassword = async function(
  candidatePassword: string
): Promise<boolean> {
  if (this.provider !== 'email' || !this.password) {
    throw new Error('Password authentication not available');
  }
  return bcrypt.compare(candidatePassword, this.password);
};

export const User = model<UserDocument>("User", userSchema);
