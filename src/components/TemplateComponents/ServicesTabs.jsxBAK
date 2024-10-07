import { useState, useRef } from 'preact/hooks';
// Import gsap if not globally available
// import gsap from 'gsap';
import serviceData from '../../data/services.js';
import styles from './ServiceTabs.module.scss';

const ServiceTabs = () => {
  const tabKeys = Object.keys(serviceData);
  const [activeTab, setActiveTab] = useState(tabKeys[0]);
  const [hoveredTab, setHoveredTab] = useState(null);
  const contentRefs = useRef({});
  const prevActiveTab = useRef(null);

  // useEffect(() => {
  //   const prevTab = prevActiveTab.current;
  //   const newTab = activeTab;
  //   const tl = gsap.timeline();

  //   if (prevTab && contentRefs.current[prevTab] && contentRefs.current[newTab]) {
  //     if (prevTab !== newTab) {
  //       // Animate the previous content out
  //       tl.to(contentRefs.current[prevTab], {
  //         duration: 0.5,
  //         x: -100,
  //         opacity: 0,
  //         onComplete: () => {
  //           contentRefs.current[prevTab].style.display = 'none';
  //         },
  //       })
  //         // Animate the new content in
  //         .fromTo(
  //           contentRefs.current[newTab],
  //           { x: 100  },
  //           { duration: 0.5, x: 0,  overwrite: 'auto' }
  //         );
  //     }
  //   } else {
  //     // Initial render or first tab activation
  //     tl.fromTo(
  //       contentRefs.current[newTab],
  //       { x: 100 },
  //       { duration: 0.5, x: 0 }
  //     );
  //   }

  //   // Update the previous tab reference
  //   prevActiveTab.current = activeTab;

  //   // Cleanup function to kill the timeline if the component unmounts
  //   return () => {
  //     tl.kill();
  //   };
  // }, [activeTab]);

  return (
    <section className={styles.serviceBlockWrap}>
      <div className={styles.serviceBlock}>
        <ul className={styles.serviceBlock__list}>
          {tabKeys.map((key) => {
            const isActive = activeTab === key;
            const isHovered = hoveredTab === key;
            const service = serviceData[key];

            return (
              <li
                key={key}
                className={`${styles.serviceBlock__item} ${
                  isActive ? styles.serviceBlock__itemActive : ''
                } ${hoveredTab && !isHovered ? styles.dimmed : ''}`}
                onMouseEnter={() => setHoveredTab(key)}
                onMouseLeave={() => setHoveredTab(null)}
              >
                <button
                  className={styles.serviceBlock__button}
                  onClick={() => setActiveTab(key)}
                  aria-expanded={isActive}
                  aria-controls={`content-${key}`}
                  id={`accordion-${key}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveTab(key);
                    }
                  }}
                >
                  <span className={styles.serviceBlock__buttonText}>
                    {service.tabTitle}
                  </span>
                </button>
                <div
                  id={`content-${key}`}
                  className={`${styles.serviceBlock__content} ${
                    isActive ? styles.serviceBlock__contentActive : ''
                  }`}
                  role="region"
                  aria-labelledby={`accordion-${key}`}
                  ref={(el) => (contentRefs.current[key] = el)}
                  
                >
                  <div className={styles.serviceBlock__inner}>
                    <h2 className={styles.serviceBlock__title}>
                      {service.title}
                    </h2>
                    <p className={styles.serviceBlock__description}>
                      {service.description}
                    </p>
                    <div className={styles.serviceBlock__image}>
                      <img src={service.image.src} alt={service.image.alt} />
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ServiceTabs;