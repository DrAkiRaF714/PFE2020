
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

const UserSchema = new SimpleSchema({
  username: { 
    type: String,
  },
  services: { 
    type: Object,
    blackbox: true 
  },
  emails: { 
    type: Array, 
    optional: true 
  },
  "emails.$": {
    type: Object,
    optional: true,
    blackbox: true 
  },
  coloreyes:{
    type: String,
    optional: true
  },
  createdAt: Date,
});


Meteor.users.attachSchema(UserSchema);

