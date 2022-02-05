const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    firstname : String,
    lastname : String,
    email: String,
    password: String,
    birthdate : Date,
    age : String,
    gender : {
      type: String,
    enum: ['Male', 'Female', 'Not disclosed']
    },
    image: String,

    favoris:[{
      type: Schema.Types.ObjectId, ref: 'Destination'
    }]

  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
