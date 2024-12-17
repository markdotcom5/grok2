import React from 'react';

export default function Dashboard() {
  return <h1>Dashboard Placeholder</h1>;
}
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 className="text-4xl font-bold text-red-600">
        Error {statusCode}
      </h1>
      <p>Something went wrong. Please try again later.</p>
    </div>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
