import React from "react";
import Link from "next/link";

const Index = () => {
  const data = [
    { name: "ahmed", id: 2 },
    { name: "shaik", id: 1 },
  ];

  return (
    <div>
      <h1>main index</h1>
      <ul>
        {data.map((val) => (
          <li key={val.id}>
            <Link href={`my/id/${val.id}`}>{val.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
