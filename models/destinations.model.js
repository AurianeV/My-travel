const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const destinationSchema = new Schema(
  {
    continent:[{
        type: String,
        enum: ['africa', 'europe', 'asia', 'oceania', 'ameriquen', 'ameriques', 'antarctic']
    }], // TODO: /!\ ['Afrique', 'Antartique']

    image:String,

    country: String,
    city: String,

    temperature: [{
        type: String,
        enum : ['0', '1', '2', '3', '4']
    }],

    bestperiod: [{
        type: String,
        enum: ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
    }],

    incontournables: [String, String, String], 

    mood: [{
        type: String, 
        enum: ['hiking', 'ski', 'beach', 'visit']
    }],
    text: String,

  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Destination = model("Destination", destinationSchema);

module.exports = Destination;
