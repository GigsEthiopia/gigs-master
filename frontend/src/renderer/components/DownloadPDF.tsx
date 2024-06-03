import  { FC, useEffect, useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import LetterPage from "../views/letter/LetterPage";
import { Letter } from '../../model/types.d';

interface Props {
  data: Letter;
}

const Download: FC<Props> = ({ data }) => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setShow(false);

    const timeout = setTimeout(() => {
      setShow(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, [data]);

  return (
    <div
      className={
        "download-pdf " +
        (!show ? "loading" : "")
      }
      title="Save PDF"
    >
      {show && (
        <PDFDownloadLink
          document={<LetterPage pdfMode={true} data={data} />}
          fileName={`${
            data.company ? data.company.toLowerCase() : "cover-letter"
          }.pdf`}
          aria-label="Save PDF"
          className="w-full px-8 py-2 my-2  text-black  shadow-2xl bg-white hover:bg-emerald-600 active:bg-gray-500 rounded-lg duration-150"
        > <span>Download</span> </PDFDownloadLink>
      )}
    </div>
  );
};

export default Download;
