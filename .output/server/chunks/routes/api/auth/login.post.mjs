import { d as defineEventHandler, c as connectToDatabase, r as readBody, a as createError, u as useRuntimeConfig } from '../../../nitro/nitro.mjs';
import { U as User } from '../../../_/User.mjs';
import jwt from 'jsonwebtoken';
import 'mongoose';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'bcryptjs';

const login_post = defineEventHandler(async (event) => {
  await connectToDatabase();
  const body = await readBody(event);
  if (!body.email || !body.password) {
    throw createError({
      statusCode: 400,
      statusMessage: "Email and password are required"
    });
  }
  const user = await User.findOne({ email: body.email }).select("+password").exec();
  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: "Invalid credentials"
    });
  }
  const isMatch = await user.comparePassword(String(body.password));
  if (!isMatch) {
    throw createError({
      statusCode: 401,
      statusMessage: "Invalid credentials"
    });
  }
  const config = useRuntimeConfig();
  const token = jwt.sign(
    { userId: user._id, nome: user.name, email: user.email },
    config.jwtSecret,
    { expiresIn: "7d" }
  );
  return { access_token: token };
});

export { login_post as default };
