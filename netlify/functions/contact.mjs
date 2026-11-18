import mongoose from 'mongoose';

const rawUri = process.env.MONGODB_URI || 'mongodb+srv://2300032944:Hemanth%40123@cluster0.zwb3k.mongodb.net/portfolio?retryWrites=true&w=majority';
let mongoUri = rawUri;
if (mongoUri.includes(':Hemanth@123@')) {
  mongoUri = mongoUri.replace(':Hemanth@123@', ':Hemanth%40123@');
}

let conn = null;

async function connectToDatabase() {
  if (conn == null) {
    conn = await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000,
    });
  }
  return conn;
}

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    ipAddress: { type: String, default: 'unknown' },
  },
  { timestamps: true }
);

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export async function handler(event) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ success: false, error: 'Method Not Allowed' }),
    };
  }

  try {
    const { name, email, subject, message } = JSON.parse(event.body || '{}');

    if (!name || !email || !subject || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ success: false, error: 'All fields are required.' }),
      };
    }

    await connectToDatabase();
    const saved = await Contact.create({
      name,
      email,
      subject,
      message,
      ipAddress: event.headers['client-ip'] || event.headers['x-forwarded-for'] || 'unknown',
    });

    return {
      statusCode: 201,
      headers,
      body: JSON.stringify({
        success: true,
        message: 'Message successfully recorded in MongoDB Atlas.',
        data: { id: saved._id, name: saved.name },
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
}
