import React from "react";
import { Meteor } from 'meteor/meteor';

const CompLog = () => {
  const handleClick = (e) => {
    Meteor.loginWithGoogle({
      requestPermissions: ['email'],
    }, (error) => {
      if (error) {
       toast.error(error.reason);
      } else
        toast.success('Bienvenue !');
    });
  };

  return(
    <button onClick={handleClick}>SIGNIN</button>
  );
}

export default CompLog;