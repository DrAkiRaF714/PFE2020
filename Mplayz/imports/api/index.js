

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
  userName: {
    type: String,
  },
  googleId: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
});

UsersCollection.attachSchema(UserSchema);

export default UsersCollection;
