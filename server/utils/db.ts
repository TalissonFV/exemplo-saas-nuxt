import mongoose from 'mongoose'

const connection: { isConnected?: number } = {}

export async function connectToDatabase() {
  if (connection.isConnected) return

  const config = useRuntimeConfig()
  
  const db = await mongoose.connect(config.mongodbUri, {
    dbName: config.dbName,
    serverSelectionTimeoutMS: 5000
  })

  connection.isConnected = db.connections[0].readyState
}

export function getModel<T extends mongoose.Document>(modelName: string, schema: mongoose.Schema<T>) {
  if (mongoose.models[modelName]) {
    return mongoose.model<T>(modelName)
  }
  return mongoose.model<T>(modelName, schema)
}