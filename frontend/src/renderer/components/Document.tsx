import React, { FC, ReactNode} from 'react'
import { Document as PdfDocument } from '@react-pdf/renderer'

interface Props {
  pdfMode?: boolean;
  children?: ReactNode; // Use ReactNode to correctly type children.
}

const Document: FC<Props> = ({ pdfMode, children }) => {
  return <>{pdfMode ? <PdfDocument >{children}</PdfDocument> : <>{children}</>}</>;
};

export default Document;

