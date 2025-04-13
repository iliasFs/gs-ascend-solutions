
import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { id: 1, number: 500, suffix: '+', label: 'Projects Completed' },
  { id: 2, number: 20, suffix: '+', label: 'Years of Experience' },
  { id: 3, number: 50, suffix: '+', label: 'Team Experts' },
  { id: 4, number: 98, suffix: '%', label: 'Client Satisfaction' },
];

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < stat.number) {
            newCounts[index] = Math.min(
              newCounts[index] + Math.ceil(stat.number / 50),
              stat.number
            );
          }
          return newCounts;
        });
      }, 30);
    });

    return () => {
      intervals.forEach(clearInterval);
    };
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="py-16 bg-primary text-white"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={stat.id} className="reveal">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {counts[index]}{stat.suffix}
              </div>
              <div className="text-primary-foreground/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
