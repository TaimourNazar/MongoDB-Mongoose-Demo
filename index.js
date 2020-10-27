const mongoose = require('mongoose');
require('dotenv').config();

(async () => {
    try {
        await mongoose.connect(process.env.MONGODB_QUERY_STRING, { useNewUrlParser: true, useUnifiedTopology:true });
        console.log("DB Connected Successfully");

        //Define a schema
        const studentSchema = new mongoose.Schema({
            name: String,
            age: Number
        });

        //Creating a model
        const Student = mongoose.model('Student', studentSchema);

        // Create an instance of model 'Student'
        const student1 = new Student({
            name: "stu_name",
            age: 24
        });

        // Save the new model instance
        const result = await student1.save();
        console.log("Result = ", result);
    }
    catch (err) {
        console.log('CONNECTION ERROR: ',err);
    }
})();