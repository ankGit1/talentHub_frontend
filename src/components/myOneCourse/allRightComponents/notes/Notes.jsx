import React from "react";
import "./notes.css";

function Notes() {
  return (
    <div className="notesDiv p-2">
      <img className="nonotesImg py-4" src="/images/nonotes.png" alt="img" />
      <h5 className="fw-bold">You haven't taken any Notes as yet!</h5>
      <p className="text-body-secondary">
        Start recording notes for ready reference, and to better understand the
        concepts learnt.
      </p>
    </div>
  );
}

export default Notes;
