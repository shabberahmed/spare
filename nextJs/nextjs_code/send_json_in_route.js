// Index.jsx
import React from "react";
import Link from "next/link";

const Index = () => {
  const data = [
    { name: "ahmed", id: 2, age: 33 },
    { name: "shaik", id: 1, age: 13 },
  ];

  return (
    <div>
      <h1>main index</h1>
      <ul>
        {data.map((val) => (
          <li key={val.id}>
            <Link href={{ pathname: `/my/${val.name}`, query: { data: JSON.stringify(val) } }}>
              {val.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
