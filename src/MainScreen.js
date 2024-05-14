import React, { useState } from 'react';
import TextArea from './TextArea';
import FieldsList from './FieldsList';
import OfferLetterPreview from './OfferLetterPreview';
import generatePDF from './pdfGenerator';
import './MainScreen.css';

const MainScreen = () => {
  const [fieldToInsert, setFieldToInsert] = useState(null);
  const [content, setContent] = useState('');
  const [preview, setPreview] = useState(false);

  const handleFieldClick = (field) => {
    setFieldToInsert(field);
  };

  const handleNextClick = () => {
    setPreview(true);
  };

  const handleSaveClick = () => {
    generatePDF(content);
  };

  return (
    <div className="main-container">
      {preview ? (
        <div className="preview-container">
          <OfferLetterPreview content={content} />
          <button className="save-button" onClick={handleSaveClick}>Save as PDF</button>
        </div>
      ) : (
        <>
          <div className="editor-container">
            <TextArea insertField={fieldToInsert} setContent={setContent} />
            <FieldsList onFieldClick={handleFieldClick} />
          </div>
          <button className="next-button" onClick={handleNextClick}>Next</button>
        </>
      )}
    </div>
  );
};

export default MainScreen;
