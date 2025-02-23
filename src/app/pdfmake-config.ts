import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

export function setPdfMakeVfs() {
  (pdfMake as any).vfs = pdfFonts.vfs;
}