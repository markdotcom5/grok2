import React from 'react';
import { NextPageContext } from 'next';

function CustomError({ statusCode }: { statusCode: number }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">An Error Occurred!</h1>
      <p className="text-lg text-gray-400 mt-4">
        {statusCode
          ? `A server-side error occurred: ${statusCode}`
          : 'A client-side error occurred'}
      </p>
    </div>
  );
}

CustomError.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default CustomError;
