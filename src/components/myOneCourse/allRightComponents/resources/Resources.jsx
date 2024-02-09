import React from "react";
import "./resources.css";
import { MdSimCardDownload } from "react-icons/md";

const pdfData = [
  { id: "p101", title: "Milestone-1 session-1.pdf", size: "800 kB" },
  { id: "p102", title: "Milestone-1 session-2.pdf", size: "1.2 MB" },
  { id: "p103", title: "Milestone-1 session-3.pdf", size: "578 kB" },
];

const Resources = ({ pdfFileName }) => {
  const downloadPdf = () => {
    const pdfPath = `/pdfs/${pdfFileName}`;
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = pdfFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      {pdfData.map((pdf) => (
        <div
          key={pdf.id}
          className="pdf-download-button m-2 small-p"
          onClick={downloadPdf}
        >
          <span>
            <MdSimCardDownload /> {pdf.title}
          </span>
          <span>{pdf.size}</span>
        </div>
      ))}
    </div>
  );
};

export default Resources;
