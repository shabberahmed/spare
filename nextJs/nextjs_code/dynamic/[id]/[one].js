import { useRouter } from 'next/router'
import React from 'react'
const one = () => {
  const router=useRouter()
  console.log(router.pathname)
  console.log(router.query)
  return (
    <div>one this is inside []</div>
  )
}

export default one 