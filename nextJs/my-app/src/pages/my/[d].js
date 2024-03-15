import { useRouter } from 'next/router'
import React from 'react'

const dynamic = () => {
 const route= useRouter()
 console.log(route.query)
   return (
    <div>dynamic</div>
  )
}

export default dynamic