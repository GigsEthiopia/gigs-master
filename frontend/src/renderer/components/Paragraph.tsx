import React, { useState } from "react";

const Paragraph: React.FC = () => {
  const [paragraph, setParagraph] = useState<string>(
    paragraphText("Vestibulum")
  );

  const updateWord = (word: string): void => {
    setParagraph(paragraphText(word));
  };

  const styles = {
    height: "450px",
    width: "600px",
    fontSize: "1.5rem",
    margin: "20px",
    padding: "20px",
    border: "1px solid",
  };

  return <div style={styles}>{paragraph}</div>;
};

const paragraphText = (word: string): string => {
  return `
    Fusce commodo aliquam arcu. In ac felis quis tortor malesuada pretium. Fusce vel dui. Etiam ultricies nisi vel augue. Etiam ultricies nisi vel augue. ${word} ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed
  `;
};

export default Paragraph;
