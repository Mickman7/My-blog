const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  title: { 
    type: String, 
    required: true 
},
  author: { 
    type: String, 
    required: true 
},
  body: { 
    type: String, 
    required: true 
},
  description: { 
    type: String, 
    required: true
},
  image: { 
    type: String, 
    default: "http://localhost:5000/uploads/default."
}
}, { timestamps: true });

module.exports = mongoose.model('blog', BlogSchema)