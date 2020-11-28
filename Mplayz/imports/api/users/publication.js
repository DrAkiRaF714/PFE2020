import { Meteor } from 'meteor/meteor';

Meteor.publish(null, function(){
    console.log('Publish Good');
  return  Meteor.users.find({_id:this.userId}, {fields:{
     'services.google.email':1
  }});
})


// db.users.find().pretty()