import { defineEventHandler, readBody, createError } from "h3";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../models/User";
import { connectDb } from "../../utils/db";

export default defineEventHandler(async (event) => {
  await connectDb();
  const body = await readBody(event);

  const { email, password } = body;

  if (!email || !password) {
    throw createError({
      statusCode: 400,
      message: "Email and password are required",
    });
  }

  // Find the user by email
  const user = await User.findOne({ email });
  if (!user) {
    throw createError({ statusCode: 400, message: "Invalid credentials" });
  }

  // Compare the hashed passwords
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw createError({ statusCode: 400, message: "Invalid credentials" });
  }

  // Generate a JWT token
  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET || "secret_key",
    { expiresIn: "1h" }
  );

  return {
    message: "Login successful",
    access_token: token,
  };
});
