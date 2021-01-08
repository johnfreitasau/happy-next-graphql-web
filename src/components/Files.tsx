import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React from "react";

export const filesQuery = gql`
  {
    files
  }
`;

export const Files = () => {
  const { data, loading } = useQuery(filesQuery);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      {data.files.map((x: any) => (
        <img
          style={{ width: 200 }}
          key={x}
          src={`http://localhost:4000/uploads/${x}`}
          alt={x}
        />
      ))}
    </div>
  );
};
