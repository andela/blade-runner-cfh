import mongoose from 'mongoose';

const { Schema } = mongoose;
const NotificationSchema = new Schema({
  read: Boolean,
  message: String,
  senderId: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  recipientId: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  link: String
});

mongoose.model('Notification', NotificationSchema);

