import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Home = () => {
  const auth = getAuth();
  const data = useSelector((state) => state.userInfo.value);
  console.log(data);
  const [verify, setVerify] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user.emailVerified) {
      setVerify(true);
    }
  });

  //   useEffect(() => {
  //     if (data.emailVerified) {
  //       setVerify(true);
  //     }
  //   }, []);

  return <div>{verify ? <p>Home</p> : <p>Place Verifyed your Email</p>}</div>;
};

export default Home;
