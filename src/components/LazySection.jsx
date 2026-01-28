import { useState, useRef, useEffect } from 'react';

const LazySection = ({ children, className = '', threshold = 0.1 }) => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <section ref={sectionRef} className={className}>
      {isInView ? children : (
        <div className="animate-pulse bg-gray-200 rounded-lg h-64" aria-hidden="true" />
      )}
    </section>
  );
};

export default LazySection;
