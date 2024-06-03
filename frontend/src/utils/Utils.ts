import { Font, StyleSheet } from "@react-pdf/renderer";

export default function findAndReplace(
  inputString: string,
  searchText: string,
  replaceText: string
): string {
  return inputString.replace(new RegExp(searchText, "gi"), replaceText);
}

// Fetch the font data outside the font function
export async function fontData() {
  return {
    Sofia_Pro: {
      data: await fetch("/assets/fonts/sofia_pro/Sofia-Pro-Regular.ttf").then(
        (res) => res.arrayBuffer()
      ),
    },
    Acherus_Grotesque: {
      data: await fetch(
        "/assets/fonts/acherus_grotesque/AcherusGrotesque-Regular.ttf"
      ).then((res) => res.arrayBuffer()),
      fallback: true,
    },
    Momcake_Pro: {
      data: await fetch(
        "/assets/fonts/momcake_pro/MomcakePro-Regular.ttf"
      ).then((res) => res.arrayBuffer()),
    },
 
  };
}
Font.register({
  family: "Sofia Pro",
  fonts: [{ src: "/assets/fonts/sofia_pro/Sofia-Pro-Regular.ttf" }],
});

Font.register({
  family: "Acherus Grotesque",
  fonts: [
    { src: "/assets/fonts/acherus_grotesque/AcherusGrotesque-Regular.ttf" },
  ],
});

Font.register({
  family: "Momcake Pro",
  fonts: [{ src: "/assets/fonts/momcake_pro/MomcakePro-Regular.ttf" }],
});


export const myStyle = StyleSheet.create({
  header: {
    fontSize: 70,
    fontFamily: "Sofia Pro",
    textAlign: 'right',
    color: "#000000",
    alignContent: 'flex-start'
  }
});


  // // Function to convert Base64 to Uint8Array
  // export const base64ToUint8Array = (base64: any) => {
  //   const binaryString = atob(base64);
  //   const len = binaryString.length;
  //   const bytes = new Uint8Array(len);
  //   for (let i = 0; i < len; i++) {
  //     bytes[i] = binaryString.charCodeAt(i);
  //   }
  //   return bytes;
  // };
