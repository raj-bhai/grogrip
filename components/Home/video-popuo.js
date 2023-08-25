import React, { useEffect, useRef } from 'react';

const VideoPop = ({ videoId, onClose }) => {
  const popupContentRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupContentRef.current && !popupContentRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Cleanup to remove the event listener
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="popup-overlay">
      <div ref={popupContentRef} className="popup-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <iframe
          className="video-iframe"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPop;
