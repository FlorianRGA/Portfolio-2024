"use client"

import { InView } from "react-intersection-observer"

export default function AnimationOnScroll({
  children,time,direction
}
) {
  return (
    <InView triggerOnce threshold={0}>
      {({ inView, ref, entry }) => (
        <div
          ref={ref}
          className={inView ? "opacity-100 transform transition-all translate-"+direction+"-0 "+time : "opacity-0 transform translate-"+direction+"-52"}
        >
          {children}
        </div>
      )}
    </InView>
  )
}
