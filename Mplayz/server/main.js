import { Meteor } from 'meteor/meteor';
import '/imports/api/users';
import '/imports/api/users/publication';
import '/imports/api/users/methodes';
import { ServiceConfiguration } from 'meteor/service-configuration';

ServiceConfiguration.configurations.upsert(
    { service: 'google' },
    {
        $set: {
            loginStyle: "popup",
            clientId: Meteor.settings.private.clientId,
            secret: Meteor.settings.private.secret
        }
    }
);

Meteor.startup(()=>{
 
});