import { useRouter } from 'next/router'
import React from 'react'

const slug = () => {
    const router = useRouter();
    const { slug } = router.query;
  
    if (!slug) {
      return <p>Loading...</p>;
    }
  
    return (
      <div>
        <h1>slug:</h1>
        <ul>
          {Array.isArray(slug) ? (
            slug.map((val, index) => <li key={index}>{val}</li>)
          ) : (
            <li>{slug}</li>
          )}
        </ul>
      </div>
    );
  };

export default slug