import { useEffect, useRef, useState } from "react";

export default function useScrollReveal() {

  const ref = useRef();

  const [visible, setVisible] =
    useState(false);

  useEffect(() => {

    const observer =
      new IntersectionObserver(

      ([entry]) => {

        if(entry.isIntersecting){

          setVisible(true);

          observer.unobserve(
            entry.target
          );
        }

      },

      {
        threshold:0.15
      }

    );

    if(ref.current){

      observer.observe(
        ref.current
      );

    }

    return () => {

      if(ref.current){
        observer.unobserve(
          ref.current
        );
      }

    };

  }, []);

  return [ref, visible];
}