import mongoose from 'mongoose';



const commentSchema = new mongoose.Schema({
  shell_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Shell',
    index: true
  },
  text: {
    type: String,
    required: true,
    maxlength: 500
  },
  rating: {
    type: Number,
    min: 1,
    max: 5
  },
});

export default mongoose.model('Comment', commentSchema);
