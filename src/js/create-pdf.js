import html2pdf from "html2pdf.js";
const doc = html2pdf();

const printedElement = document.querySelector(".container");
const options = {
  filename: "resume.pdf",
  image: { type: "jpeg", quality: 0.8 },
  html2canvas: { scale: 4 },
  jsPDF: {
    orientation: "p",
    unit: "px",
    format: [1200.0, 1697.0],
    putOnlyUsedFonts: true,
    floatPrecision: 16,
    hotfixes: ["px_scaling"],
    compress: true,
  },
};

const btnpdfRef = document.querySelector(".btn-pdf");
btnpdfRef.addEventListener("click", () => {
  doc.set(options).from(printedElement).save();
  // doc.from(printedElement).save("resume.pdf");
});

// =============================================
// const printedElement = document.querySelector(".container");
// const options = {
//   margin: 0,
//   filename: "resume.pdf",
//   image: { type: "jpeg", quality: 0.9 },
//   html2canvas: {
//     scale: 3,
//     with: 1200,
//     heiht: 1223,
//     // with: 210,
//     // heiht: 297,
//   },
//   jsPDF: {
//     orientation: "p",
//     // unit: "px",
//     unit: "mm",
//     // format: [1200.0, 1467.0],
//     format: "A4",
//     // putOnlyUsedFonts: true,
//     floatPrecision: 16,
//     // hotfixes: ["px_scaling"],
//     compress: true,
//   },
// };

// const qwe = document.querySelector(".btn-pdf");
// qwe.addEventListener("click", () => {
//   html2pdf().set(options).from(printedElement).save();
//   console.log("Hren hren");
// });

// =============================================

// window.jsPDF = window.jspdf.jsPDF;

// var doc = new jsPDF({
//   putOnlyUsedFonts: true,
// });

// // Source HTMLElement or a string containing HTML.
// var elementHTML = document.querySelector(".container");

// const btnpdfRef = document.querySelector(".btn-pdf");
// btnpdfRef.addEventListener("click", () => {
//   doc.html(elementHTML, {
//     callback: function (doc) {
//       // Save the PDF
//       doc.save("sample-document.pdf");
//     },
//     x: 2,
//     y: 2,
//     width: 210, //target width in the PDF document
//     windowWidth: 1200, //window width in CSS pixels
//   });
// });
