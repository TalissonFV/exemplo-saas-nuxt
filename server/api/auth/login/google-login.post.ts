import { User } from '~/server/models/User'
import { connectToDatabase } from '~/server/utils/db'
import jwt from 'jsonwebtoken'

export default defineEventHandler(async (event) => {
  await connectToDatabase()

  const body = await readBody(event);

  try {
    let user = await User.findOne({ googleId: body.googleId });

    if (!user) {
      throw createError({
        statusCode: 404,
        statusMessage: 'User not found'
      })
    }

    const config = useRuntimeConfig();
    const token = jwt.sign(
      { userId: user._id, nome: user.name, email: user.email },
      config.jwtSecret,
      { expiresIn: '7d' }
    );
    
    return { access_token: token }
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Google login failed',
    });
  }
});