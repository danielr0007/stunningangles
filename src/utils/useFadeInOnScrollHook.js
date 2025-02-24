import { useEffect, useRef, useState } from "react";

const useFadeInOnScrollHook = () => {
  // State to keep track of visibility
  const [isVisible, setIsVisible] = useState(false);
  // Ref to attach to the component we want to observe
  const componentRef = useRef(null);

  useEffect(() => {
    // Create a new IntersectionObserver instance
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the component is intersecting (i.e., visible)
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing the component once it is visible
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    const currentRef = componentRef.current; // Capture the current value of the ref

    if (currentRef) {
      observer.observe(currentRef); // Start observing the component
    }

    // Cleanup function to unobserve the component when it unmounts
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Return the ref and visibility state
  return { ref: componentRef, isVisible };
};

export default useFadeInOnScrollHook;
