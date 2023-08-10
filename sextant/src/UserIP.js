
import React, { useState, useEffect } from 'react';

const UserIP = ({ ipAddressType }) => {
  const [userIP, setUserIP] = useState('');

  useEffect(() => {
    const getIP = async () => {
      const response = await fetch(https://api.ipify.org?format=json&${ipAddressType});
      const data = await response.json();
      setUserIP(data.ip);
    };

    getIP();
  }, [ipAddressType]);

  return (
    <div>
      <h3>Your Public {ipAddressType} Address:</h3>
      <p>{userIP}</p>
    </div>
  );
};

