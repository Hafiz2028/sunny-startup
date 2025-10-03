export interface ServiceItem {
  iconKey: "lightbulb" | "calculator" | "barchart";
  link: string;
  titleKey: string;
  descriptionKey: string;
}

export const serviceData: ServiceItem[] = [
  {
    iconKey: "lightbulb",
    link: "/services?tab=consultation",
    titleKey: "service1_title",
    descriptionKey: "service1_desc",
  },
  {
    iconKey: "calculator",
    link: "/services?tab=calculator",
    titleKey: "service2_title",
    descriptionKey: "service2_desc",
  },
  {
    iconKey: "barchart",
    link: "/services?tab=learn-space",
    titleKey: "service3_title",
    descriptionKey: "service3_desc",
  },
];
