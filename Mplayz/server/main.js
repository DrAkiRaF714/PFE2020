import { Meteor } from 'meteor/meteor';
import { ServiceConfiguration } from 'meteor/service-configuration';

ServiceConfiguration.configurations.upsert(
    { service: 'google' },
    {
        $set: {
            loginStyle: "popup",
            clientId: "130232473888-vhl9v85v2pmik9iblo0vk5igvpkjn9r3.apps.googleusercontent.com",
            secret: "-uLIiCveZYY_7rVc8x1uUV2l"
        }
    }
);

Meteor.startup(()=>{
 
});