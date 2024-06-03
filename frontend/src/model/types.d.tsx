export interface Letter {
  id: string;
  image: string;
  company: string;
  letterTo: string;
  introduction: string;
  body: string;
  end: string;
  bullets: string;
  signiture: string;
}

export const initialLetter: Letter = {
  id: "0",
  image: "/assets/bg.png",
  company: "",
  letterTo: "Dear Hiring Manager,",
  introduction: "",
  body: "",
  end: "",
  bullets: "",
  signiture: "Sincerely, \n Blen Assefa"
};

declare interface Template {
  schemas: Array<Record<string, any>>;
  sampledata: Array<any>;
  columns: string[];
}

declare interface CoverState {
  userState: boolean;
  currentUser: any;
  pdfContent: string;
  inputs: Letter[];
  template: Template;
}
