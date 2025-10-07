"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Users, BookOpen, Handshake } from "lucide-react";
import { ServiceCalculator } from "@/sections/services/ServiceCalculator";
import { AppCTA } from "@/sections/services/AppCTA";
import { ConsultationForm } from "@/sections/services/ConsultationForm";
import { LearnSpace } from "@/sections/services/LearnSpace";
import { Collaboration } from "@/sections/services/Collaboration";
import { UserCollaboration } from "@/sections/services/UserCollaboration";

export default function ServicesPage() {
  const t = useTranslations("ServicesPage");
  const serviceTabs = [
    {
      id: "calculator",
      label: t("tab_calculator"),
      icon: Calculator,
      component: <ServiceCalculator />,
    },
    {
      id: "consultation",
      label: t("tab_consultation"),
      icon: Users,
      component: <ConsultationForm />,
    },
    {
      id: "learn-space",
      label: t("tab_learn_space"),
      icon: BookOpen,
      component: <LearnSpace />,
    },
    {
      id: "collaboration",
      label: t("tab_collaboration"),
      icon: Handshake,
      component: (
        <div className="space-y-16 md:space-y-24">
          <Collaboration /> <UserCollaboration />{" "}
        </div>
      ),
    },
  ];
  const [currentTab, setCurrentTab] = useState("calculator");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tabFromUrl = params.get("tab");
    if (tabFromUrl && serviceTabs.some((tab) => tab.id === tabFromUrl)) {
      setCurrentTab(tabFromUrl);
    }
  }, []);

  const handleTabChange = (tabId: string) => {
    setCurrentTab(tabId);
    const params = new URLSearchParams(window.location.search);
    params.set("tab", tabId);
    window.history.pushState(
      null,
      "",
      `${window.location.pathname}?${params.toString()}`
    );
  };

  const activeService = serviceTabs.find((tab) => tab.id === currentTab);

  return (
    <>
      <div className="container mx-auto px-6 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            {t("title")}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="w-full border-b border-border mb-12"
        >
          <div className="w-full overflow-x-auto pb-2 -mb-2 no-scrollbar">
            <div className="flex flex-nowrap justify-start md:justify-center -mb-px space-x-4 md:space-x-8">
              {serviceTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={cn(
                    "inline-flex flex-shrink-0 items-center gap-2 px-1 py-4 border-b-2 text-base font-semibold transition-colors",
                    currentTab === tab.id
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:border-foreground/30"
                  )}
                >
                  <tab.icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
        <div className="w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTab}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {activeService ? (
                <div>{activeService.component}</div>
              ) : (
                <div className="text-center py-16">
                  <h2 className="text-2xl font-semibold">{t("no_service")}</h2>
                  <p className="text-muted-foreground mt-2">
                    {t("select_service")}
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="mt-16 md:mt-24">
        <AppCTA />
      </div>
    </>
  );
}
