import { d as defineEventHandler, c as connectToDatabase, r as readBody, a as createError } from '../../../nitro/nitro.mjs';
import { U as User } from '../../../_/User.mjs';
import 'mongoose';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'bcryptjs';

const register_post = defineEventHandler(async (event) => {
  await connectToDatabase();
  const body = await readBody(event);
  try {
    const existingUser = await User.findOne({ email: body.email });
    if (existingUser) {
      throw createError({
        statusCode: 409,
        statusMessage: "Email already registered"
      });
    }
    const user = new User({
      name: body.name,
      email: body.email,
      password: body.password
    });
    await user.save();
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.message || "Registration failed"
    });
  }
});

export { register_post as default };
