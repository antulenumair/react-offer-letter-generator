import React from 'react';
import './OfferLetterPreview.css';

const OfferLetterPreview = ({ content }) => {
  return (
    <div className="preview-content">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default OfferLetterPreview;
