// pages/[...slug].js

import { useRouter } from 'next/router';

const DynamicPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug)

  return (
    <div>
      <h1>Dynamic Page</h1>
      <p>Slug: {slug}</p>
    </div>
  );
};

export default DynamicPage;
