import React, { useState, useRef, useEffect } from 'react';
import './TextArea.css';
import ImageUpload from './ImageUpload';

const TextArea = ({ insertField, setContent }) => {
  const [content, setLocalContent] = useState('');
  const contentEditableRef = useRef(null);
  const [lastCursorPosition, setLastCursorPosition] = useState(null);

  const handleInputChange = () => {
    const newContent = contentEditableRef.current.innerHTML;
    setLocalContent(newContent);
    setContent(newContent); // Update the parent component's state
  };

  const handleFieldInsertion = (field) => {
    if (lastCursorPosition) {
      lastCursorPosition.insertNode(document.createTextNode(`{${field}}`));
      setContent(contentEditableRef.current.innerHTML); // Update the parent component's state
    }
  };

  const handleImageInsertion = (imageSrc, altText, width = 'auto') => {
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = altText;
    img.style.maxWidth = '100%';
    img.style.width = width;
    img.style.height = 'auto';
    if (lastCursorPosition) {
      lastCursorPosition.insertNode(img);
      setContent(contentEditableRef.current.innerHTML); // Update the parent component's state
    }
  };

  const saveCursorPosition = () => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      setLastCursorPosition(selection.getRangeAt(0));
    }
  };

  useEffect(() => {
    if (insertField) {
      handleFieldInsertion(insertField);
    }
  }, [insertField]);

  return (
    <div className="text-area-container">
      <div
        ref={contentEditableRef}
        contentEditable
        onInput={handleInputChange}
        onClick={saveCursorPosition}
        onKeyUp={saveCursorPosition}
        className="text-area"
      />
      <ImageUpload onImageUpload={handleImageInsertion} />
    </div>
  );
};

export default TextArea;
