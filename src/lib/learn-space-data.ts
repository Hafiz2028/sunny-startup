import { LucideIcon } from "lucide-react";

export interface LearningModule {
  iconKey: "article" | "workshop" | "guide";
  link: string;
  typeKey: string;
  titleKey: string;
  descriptionKey: string;
}

export const learningModulesData: LearningModule[] = [
  {
    iconKey: "article",
    link: "/blog/strategi-marketing-fnb",
    typeKey: "type1",
    titleKey: "title1",
    descriptionKey: "desc1",
  },
  {
    iconKey: "workshop",
    link: "/services/learn/workshop-finansial",
    typeKey: "type2",
    titleKey: "title2",
    descriptionKey: "desc2",
  },
  {
    iconKey: "guide",
    link: "/path/to/your/pdf.pdf",
    typeKey: "type3",
    titleKey: "title3",
    descriptionKey: "desc3",
  },
];
