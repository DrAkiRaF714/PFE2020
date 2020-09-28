import { Meteor } from 'meteor/meteor';
import { ServiceConfiguration } from 'meteor/service-configuration';

ServiceConfiguration.configurations.upsert(
    { service: 'google' },
    {
        $set: {
            loginStyle: "popup",
            clientId: "394834453579-aqcvsrecefm0pm69l6fifjr9a53hok9l.apps.googleusercontent.com",
            // clientId: Meteor.settings.private.oAuth.google.staging.clientId,
            secret: "Cq5-Y2WIuzLdE2IM6woLBSro"
        }
    }
);

Meteor.startup(()=>{
 
});