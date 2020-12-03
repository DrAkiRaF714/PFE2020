import { Meteor } from 'meteor/meteor';

Meteor.methods({
    'username.edit': function usernameEdit({ username }) {
        if (!this.userId) {
          throw new Meteor.Error('403', 'Vous devez être connecté');
        }
    
        /*
                on remplace tout les "<" par son équivalent html "&lt;". Cette manipulation
                a pour effet de rendre inefficace toute tentative d'ajout de html par
                l'utilisateur. CETTE ETAPE EST PRIMORDIALE !!!!
    
                on remplace les "\n" (qui sont les retour à la ligne), par des "<br/>".
                (on utilise une regex, pour les remplacer tous, et pas juste le 1er).
            */
    
        const sanitizedContent = username
          .replace(/</gi, '&lt;')
          .replace(/\n/gi, '<br/>');
    
        Meteor.users.insert({
          username: sanitizedContent,
        });
      },
      'user.updateUsername': function updateUsername(value) {
        console.log(value);
        Meteor.users.update(
            {
                _id:this.userId
            },
            {
              $set:
                {
                    "username":value
                }
            }
        )
      }
});