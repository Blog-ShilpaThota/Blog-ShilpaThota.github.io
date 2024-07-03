import React from 'react';
import ReactLoading, { LoadingType } from 'react-loading';
 

const LoadingPage = ({ type, color }) => (
    <ReactLoading type={type} color={color} height={667} width={375} />
);
 
export default LoadingPage;