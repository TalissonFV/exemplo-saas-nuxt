import { User } from '~/server/models/User'
import { connectToDatabase } from '~/server/utils/db'

export default defineEventHandler(async (event) => {
  await connectToDatabase()
  
  const body = await readBody(event)
  
  try {
    const existingUser = await User.findOne({ email: body.email })
    if (existingUser) {
      throw createError({
        statusCode: 409,
        statusMessage: 'Email already registered'
      })
    }

    const user = new User({
      name: body.name,
      email: body.email,
      password: body.password,
      provider: body.provider,
    })

    await user.save()
    
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.message || 'Registration failed'
    })
  }
})