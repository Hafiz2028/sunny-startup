export interface PromoItem {
  illustration: string;
  titleKey: string;
  descriptionKey: string;
  ctaKey: string;
  illustrationTextKey: string;
}

export const promoData: PromoItem[] = [
  {
    illustration: "🚀",
    titleKey: "title1",
    descriptionKey: "description1",
    ctaKey: "cta1",
    illustrationTextKey: "illustrationText1",
  },
  {
    illustration: "📈",
    titleKey: "title2",
    descriptionKey: "description2",
    ctaKey: "cta2",
    illustrationTextKey: "illustrationText2",
  },
  {
    illustration: "📱",
    titleKey: "title3",
    descriptionKey: "description3",
    ctaKey: "cta3",
    illustrationTextKey: "illustrationText3",
  },
];
