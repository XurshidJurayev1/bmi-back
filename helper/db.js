const mongoose = require('mongoose');

const start = async () => { 
  await  mongoose.connect('mongodb+srv://aris:12345@cluster0.7pr6l.mongodb.net/bmi_server_test?retryWrites=true&w=majority/test').then(() => {
      console.log(`Bazaga Ulandik`);
  });

}
module.exports = start;