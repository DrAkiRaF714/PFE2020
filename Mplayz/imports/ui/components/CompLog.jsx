import React from "react";
import { Meteor } from 'meteor/meteor';
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
    });
  };

  
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
      
  );
}

export default CompLog;