import { Meteor } from 'meteor/meteor';
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