import React from 'react'
import { useRouter } from 'next/router'



function Posts() {
    const router = useRouter();
    const { id } = router.query;

  return (
    <>
    <div >
    <h1>
        User post ID: {id}
    </h1>
    </div>
    </>
  )
}

export default Posts