import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  // We do not throw in build time to keep dev happy; runtime checks are inside connectToDatabase
  console.warn("MONGODB_URI is not set. API routes will error until provided.");
}

declare global {
  // eslint-disable-next-line no-var
  var mongooseConn: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null };
}

if (!global.mongooseConn) {
  global.mongooseConn = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (global.mongooseConn.conn) return global.mongooseConn.conn;
  if (!global.mongooseConn.promise) {
    if (!MONGODB_URI) throw new Error("MONGODB_URI is missing in environment.");
    global.mongooseConn.promise = mongoose.connect(MONGODB_URI, { dbName: "mithila-makhana" });
  }
  global.mongooseConn.conn = await global.mongooseConn.promise;
  return global.mongooseConn.conn;
}
