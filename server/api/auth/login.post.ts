import { User } from '~/server/models/User'
import { connectToDatabase } from '~/server/utils/db'
import jwt from 'jsonwebtoken'

export default defineEventHandler(async (event) => {
  await connectToDatabase()
  const body = await readBody(event)

  // Validate input
  if (!body.email || !body.password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Email and password are required'
    })
  }
  // Find user
  const user = await User.findOne({ email: body.email }).select('+password').exec()
  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Invalid credentials'
    })
  }

  // Verify password
  const isMatch = await user.comparePassword(String(body.password))

  if (!isMatch) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Invalid credentials'
    })
  }

  // Generate JWT
  const config = useRuntimeConfig()
  const token = jwt.sign(
    { userId: user._id, nome: user.name, email: user.email },
    config.jwtSecret,
    { expiresIn: '7d' }
  )

  return {access_token: token,}
})