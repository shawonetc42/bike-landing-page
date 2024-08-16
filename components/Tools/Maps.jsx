import React from "react";

export default function Maps() {
  return (
    <div
      style={{ width: "100%", height: "500px" }}
      className="flex flex-col container  mx-auto px-3 mt-2 py-2"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.809488504522!2d-73.98001912430324!3d40.68269417923696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25ba6d4f5bb27%3A0x290c5d3de8f9b7f8!2sBarclays%20Center!5e0!3m2!1sen!2sus!4v1692351234567!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
