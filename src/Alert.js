import React, { useEffect } from 'react';

const Alert = ({ type, msg, removeAlert }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [removeAlert]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
