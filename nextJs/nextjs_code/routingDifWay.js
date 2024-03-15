import React from "react";
import Link from "next/link";

const Index = () => {
  const data = [
    { name: "ahmed", id: 2,age:33 },
    { name: "shaik", id: 1 ,age:13},
  ];

  return (
    <div>
      <h1>main index</h1>
      <ul>
        {data.map((val) => (
          <li key={val.id}>
            {/* different way */}
            <Link
            href={{
              pathname:`my/[name]`,
              query:{name:val.name}
            }}
            >{val.name}</Link>
            {/* <Link href={`my/${val.name}`}>{val.name}</Link> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
