import React, { FC, useRef } from 'react';
import { PDFViewer, PDFDownloadLink, Document, Page, View, Image as PDFImage } from '@react-pdf/renderer';
import compose from '../../styles/compose';

interface Props {
  className?: string;
  src?: string;
  width?: number;
  pdfMode?: boolean;
  onRender?: (documentBlob: Blob) => void; // Add the onRender callback prop
}

const StaticImage: FC<Props> = ({ className, src, width, pdfMode, onRender }) => {
  const pdfRef = useRef<any>();

  const handleRender = () => {
    if (pdfRef.current && onRender) {
      pdfRef.current.toBlob().then((blob: Blob) => {
        onRender(blob); // Pass the document blob to the onRender callback
      });
    }
  };

  if (pdfMode) {
    if (src && src.startsWith('data:application/pdf;base64,')) {
      return (
        <PDFViewer width={width} height={500} ref={pdfRef} >
          <Document onRender={handleRender}>
            <Page size="A4">
              <View style={{ ...compose(`image ${className ? className : ''}`), width: width }}>
                <PDFImage src={src} style={{ width: '100%', height: 'auto' }} />
              </View>
            </Page>
          </Document>
        </PDFViewer>
      );
    } else {
      return <></>;
    }
  }

  return (
    <div className={`image ${className ? className : ''}`}>
      {src && src.startsWith('data:application/pdf;base64,') ? (
        <img
          src={src}
          alt=""
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      ) : (
        <img
          src={src}
          alt=""
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      )}
    </div>
  );
};

export default StaticImage;
