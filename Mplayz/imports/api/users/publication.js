import { Meteor } from 'meteor/meteor';

Meteor.publish("user", function(){
    console.log('La vie c du caca');
  return  Meteor.users.find(
    {
      _id:this.userId
    },
    {
      fields:{
      'services.google.email':1,
      'services.google.picture':1
    },
  });
})



// db.users.find().pretty()