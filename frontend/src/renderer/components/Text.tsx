import React, { FC } from 'react'
import ReactPDF, { Text as PdfText } from '@react-pdf/renderer'
import compose from '../../styles/compose'
import { Style } from '../../model/style';


interface Props {
  className?: string
  pdfMode?: boolean
  children?: string
  style?: Style
  

}

const Text: FC<Props> = ({ className, pdfMode, children, style }) => {
  return (
    <>
      {pdfMode ? (
        <PdfText style={style || compose('span ' + (className || ''))}
        >{children}</PdfText>
      ) : (
        <span className={'span ' + (className ? className : '')}>{children}</span>
      )}
    </>
  )
}

export default Text
