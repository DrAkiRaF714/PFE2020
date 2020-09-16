

import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const UsersCollection = new Mongo.Collection('users');

const UserSchema = new SimpleSchema({
  accessToken: {
    type: String,
  },
  email: {
    type: String,
  },
  familyName: {
    type: String,
  },
  givenName: {
    type: String,
  },
  googleId: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
});

JokesCollection.attachSchema(JokeSchema);

export default JokesCollection;
