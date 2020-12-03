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
        console.log(error.reason);
      } else
        toast.success('Bienvenue !');
        console.log(Meteor.users.find());
    });
  };

  const connected = useTracker(() => Meteor.userId(), []);

  const logout = useCallback(() => {
    Meteor.logout();
  }, []);

  const connectionLink = useMemo(() => {
    if (connected) {
      return (
        <button onClick={logout}>Déconnexion</button>
      );
    }
    return (
      <button onClick={handleClick}>SIGNIN</button>
    );
  }, [connected, logout]);
  
  return (
    <>
      {connectionLink}
    </>
  );
}

export default CompLog;