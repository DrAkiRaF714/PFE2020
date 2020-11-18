import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import React, {
  useState, useMemo, useCallback, useEffect,
} from 'react';
import { toast } from 'react-toastify';

const CompLog = () => {
  
  const handleClick = (e) => {
  Meteor.loginWithGoogle({
      requestPermissions: ['email'],
    }, (error) => {
      if (error) {
        toast.error(error.reason);
      } else
        toast.success('Bienvenue !');
        console.log(Meteor.users.find());
    });
  };

  // const connected = useTracker(() => Meteor.userId(), []);

  // const logout = useCallback(() => {
  //   Meteor.logout();
  // }, []);

  // const connectionLink = useMemo(() => {
  //   if (connected) {
  //     return (
  //       <Button onClick={logout}>Déconnexion</Button>
  //     );
  //   }
  //   return (
  //     <Button to="/signin">Se connnecter</Button>
  //   );
  // }, [connected, logout]);
  
  return (
    <div>
      <button onClick={handleClick}>SIGNIN</button>
    </div>
      // {connectionLink}
  );
}

export default CompLog;