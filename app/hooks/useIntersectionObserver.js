"use client"

import { InView } from "react-intersection-observer"

export default function AnimationOnScroll({
  children,time
}
) {
  return (
    <InView triggerOnce threshold={0}>
      {({ inView, ref, entry }) => (
        <div
          ref={ref}
          className={inView ? "opacity-100 transform transition-all translate-y-0 "+time : "opacity-0 transform translate-y-52"}
        >
          {children}
        </div>
      )}
    </InView>
  )
}
