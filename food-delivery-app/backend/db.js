const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://Foodify:players0321@cluster0.6j7uakg.mongodb.net/Foodify?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB successfully!');

    const collection = mongoose.connection.db.collection("food_items");
    const data = await collection.find({}).toArray();
    
    console.log("Data fetched successfully!");
    
    global.food_items = data;
    
    const categoryCollection = mongoose.connection.db.collection("foodCategory");
    const catData = await categoryCollection.find({}).toArray();

    console.log("catData fetched successfully!");

    global.food_category = catData;

  } catch (err) {
    console.error('Error:', err);
  }
};

module.exports = mongoDB;
