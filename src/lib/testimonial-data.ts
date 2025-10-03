export interface TestimonialItem {
  id: number;
  avatarSrc: string;
  initials: string;
  name: string;
  roleKey: string;
  quoteKey: string;
  lang: "id" | "en";
}

export const testimonialData: TestimonialItem[] = [
  {
    id: 1,
    avatarSrc: "https://i.pravatar.cc/150?u=sarah",
    initials: "SL",
    name: "Sarah L.",
    roleKey: "role1",
    quoteKey: "quote1",
    lang: "id",
  },
  {
    id: 2,
    avatarSrc: "https://i.pravatar.cc/150?u=budi",
    initials: "BS",
    name: "Budi S.",
    roleKey: "role2",
    quoteKey: "quote2",
    lang: "id",
  },
  {
    id: 3,
    avatarSrc: "https://i.pravatar.cc/150?u=rina",
    initials: "RA",
    name: "Rina A.",
    roleKey: "role3",
    quoteKey: "quote3",
    lang: "en",
  },
];
