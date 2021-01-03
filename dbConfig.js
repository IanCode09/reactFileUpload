const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://ian123:ian123@iancode09.va6uv.mongodb.net/reactfileupload?retryWrites=true&w=majority', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        })

        console.log(`MongoDB Connect`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

module.exports =  connectDB