import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const name = useSelector((state) => state.name);

  return (
    <div>
      <h2>Profil Sahifasi</h2>
      <p>Ismingiz: {name}</p>
    </div>
  );
};

export default Profile;
