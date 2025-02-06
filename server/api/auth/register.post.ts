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

  // Check if the user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    throw createError({ statusCode: 400, message: "User already exists" });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 12);

  // Create a new user
  const newUser = new User({
    email,
    password: hashedPassword,
  });

  await newUser.save();

  // Generate a JWT token
  const token = jwt.sign(
    { id: newUser._id },
    process.env.JWT_SECRET || "secret_key",
    {
      expiresIn: "1h",
    }
  );

  return {
    message: "User created successfully",
    access_token: token,
  };
});
