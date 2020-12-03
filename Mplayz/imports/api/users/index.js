
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

const UserSchema = new SimpleSchema({
  username: { 
    type: String,
    defaultValue: "NonName",
  },
  services: { 
    type: Object,
    blackbox: true 
  },
  email: { 
    type: Array, 
    optional: true 
  },
  "email.$": {
    type: Object,
    optional: true,
    blackbox: true 
  },
  picture: { 
    type: Array, 
    optional: true 
  },
  "picture.$": {
    type: Object,
    optional: true,
    blackbox: true 
  },
  createdAt: Date,
});

Meteor.users.attachSchema(UserSchema);