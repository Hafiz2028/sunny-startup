"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function FeedbackForm() {
  const t = useTranslations("FeedbackForm");
  const [email, setEmail] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [question, setQuestion] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t("alert_success"));
    setEmail("");
    setTitle("");
    setQuestion("");
  };

  return (
    <section className="w-full py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        >
          <Card className="bg-white border-none rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-10">
            <CardHeader className="text-center p-0 mb-8">
              <CardTitle className="font-display text-3xl lg:text-4xl text-[#1A202C] font-bold">
                {t("title")}
              </CardTitle>
              <CardDescription className="text-lg text-gray-600 mt-2">
                {t("subtitle")}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="email"
                    placeholder={t("placeholder_email")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12 text-base rounded-lg border-gray-300 focus:border-primary focus:ring-primary"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder={t("placeholder_title")}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="h-12 text-base rounded-lg border-gray-300 focus:border-primary focus:ring-primary"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder={t("placeholder_message")}
                    rows={6}
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    required
                    className="text-base rounded-lg border-gray-300 focus:border-primary focus:ring-primary"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-12 text-lg rounded-lg font-semibold"
                >
                  {t("button_submit")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
