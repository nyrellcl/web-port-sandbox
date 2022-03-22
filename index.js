import React from 'react';
import ReactDOM from 'react-dom';
import 'styles.css';

function FadeinSection(props){
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  
  return (<div className={`fade-in-section ${isVisible ? 'is-Visible' : ''} `}
  ref={domRef}>
  {props.children}</div>
  );
  }
