import html2pdf from 'html2pdf.js';

const generatePDF = (content) => {
  const element = document.createElement('div');
  element.innerHTML = content;

  const options = {
    margin: 1,
    filename: 'offer_letter.pdf',
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  html2pdf()
    .from(element)
    .set(options)
    .save();
};

export default generatePDF;
