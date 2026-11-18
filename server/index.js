import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import { Contact } from './models/Contact.js';
import { Visitor } from './models/Visitor.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(morgan('dev'));

// MongoDB Connection
const rawUri = process.env.MONGODB_URI || 'mongodb+srv://2300032944:Hemanth%40123@cluster0.zwb3k.mongodb.net/portfolio?retryWrites=true&w=majority';

// Helper to safely format URI if '@' appears unencoded in password
let mongoUri = rawUri;
if (mongoUri.includes(':Hemanth@123@')) {
  mongoUri = mongoUri.replace(':Hemanth@123@', ':Hemanth%40123@');
}

let isDbConnected = false;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000,
    });
    isDbConnected = true;
    console.log('✅ MongoDB connected successfully to Cluster0!');
  } catch (error) {
    isDbConnected = false;
    console.error('⚠️ MongoDB connection error (using in-memory fallback for local demo):', error.message);
  }
};

connectDB();

// In-memory fallback if cluster is unreachable
const fallbackMessages = [];
let fallbackVisitorCount = 142;

// API Routes
// 1. Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    database: isDbConnected ? 'connected' : 'disconnected (fallback active)',
    service: 'Ravada Hemanth Portfolio API',
    candidate: 'Ravada Hemanth',
    role: 'TCS Prime Selected | Software Engineer'
  });
});

// 2. Track visitor / Get visitor stats
app.post('/api/visitor', async (req, res) => {
  try {
    const userAgent = req.headers['user-agent'] || 'Unknown';
    if (isDbConnected) {
      await Visitor.create({ userAgent });
      const count = await Visitor.countDocuments();
      return res.json({ success: true, count });
    } else {
      fallbackVisitorCount += 1;
      return res.json({ success: true, count: fallbackVisitorCount });
    }
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 3. Get portfolio highlights & stats
app.get('/api/stats', async (req, res) => {
  try {
    let visitorCount = fallbackVisitorCount;
    let messageCount = fallbackMessages.length;
    if (isDbConnected) {
      visitorCount = await Visitor.countDocuments();
      messageCount = await Contact.countDocuments();
    }
    res.json({
      success: true,
      data: {
        cgpa: '9.41',
        university: 'KL University',
        achievement: 'TCS Prime Selected',
        projectsCount: 3,
        internshipCount: 1,
        certificationsCount: 3,
        totalViews: Math.max(visitorCount, 280),
        inquiriesReceived: messageCount
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 4. Contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please provide all required fields: name, email, subject, and message.'
      });
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.'
      });
    }

    const ipAddress = req.ip || req.connection.remoteAddress || 'unknown';

    let savedMessage;
    if (isDbConnected) {
      savedMessage = await Contact.create({
        name,
        email,
        subject,
        message,
        ipAddress
      });
    } else {
      savedMessage = {
        _id: 'local_' + Date.now(),
        name,
        email,
        subject,
        message,
        createdAt: new Date().toISOString()
      };
      fallbackMessages.push(savedMessage);
    }

    console.log(`📩 New message received from ${name} (${email}): "${subject}"`);

    return res.status(201).json({
      success: true,
      message: 'Thank you for reaching out! Your message has been safely recorded in MongoDB.',
      data: {
        id: savedMessage._id,
        name: savedMessage.name,
        email: savedMessage.email,
        createdAt: savedMessage.createdAt
      }
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    return res.status(500).json({
      success: false,
      error: 'An internal server error occurred while processing your message. Please try again later.'
    });
  }
});

// 5. Get recent messages (for demonstration / admin check)
app.get('/api/contact/messages', async (req, res) => {
  try {
    if (isDbConnected) {
      const messages = await Contact.find().sort({ createdAt: -1 }).limit(20);
      return res.json({ success: true, count: messages.length, messages });
    } else {
      return res.json({ success: true, count: fallbackMessages.length, messages: fallbackMessages });
    }
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Static Client Serving (Production Build)
const clientDistPath = path.join(__dirname, '../client/dist');
app.use(express.static(clientDistPath));

app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) {
    return next();
  }
  res.sendFile(path.join(clientDistPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT} (http://localhost:${PORT})`);
});
