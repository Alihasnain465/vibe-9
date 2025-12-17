import React from 'react'

const page = () => {
  return (
    <div><figure className="bg-green-300 rounded-xl p-8 red:bg-red-800">
  <img className="w-40 h-4o rounded-full mx-auto" src="/hafiz.jpg" alt="" width="384" height="512"/>
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-red-800  dark:text-green-800">
        PAIB
      </div>
      <div>
        Staff Engineer, Ali Hasnain
      </div>
    </figcaption>
  </div>
</figure>
      
    </div>
  )
}

export default page
