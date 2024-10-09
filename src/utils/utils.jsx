
//Formateo de lineas para disclosures
export const formatContent = (content) => {
  const lines = content.trim().split('\n');
  const formattedContent = lines.map((line, index) => {
    if (line.trim().startsWith('-')) {
      return <li key={index}>{line.replace('-', '').trim()}</li>;
    }
    return <p key={index}>{line.trim()}</p>;
  });
  return (
    <>
      {formattedContent.some(line => line.type === 'li') ? (
        <>
          {formattedContent.slice(0, 1)}
          <ul>{formattedContent.slice(1)}</ul>
        </>
      ) : (
        formattedContent
      )}
    </>
  );
};

export const toggleDisclosure = (index, activeIndex, setActiveIndex) => {
  const content = document.querySelector(`.disclosureContent-${index}`);
  if (activeIndex === index) {
    return setActiveIndex(null)
  } 
  setActiveIndex(index)
};

export const elementObserver = (elements, callback, options = { threshold: 0.3 }) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          callback(entry.target, true, index);
        }, index * 200);
      } else {
        callback(entry.target, false);
      }
    });
  }, options);

  elements.forEach((element) => observer.observe(element));

  return () => observer.disconnect();
};

