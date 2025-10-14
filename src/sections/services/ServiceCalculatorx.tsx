"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ServiceCalculator() {
  const t = useTranslations("ServiceCalculator"); // -> 2. Dapatkan fungsi 't'
  const locale = useLocale(); // -> 3. Dapatkan locale saat ini

  // -> 4. Pindahkan skema Zod ke dalam komponen dan gunakan 't'
  const formSchema = z.object({
    serviceType: z.string().min(1, { message: t("validation_serviceType") }),
    businessScale: z
      .string()
      .min(1, { message: t("validation_businessScale") }),
    monthlyRevenue: z.coerce.number().min(0, t("validation_monthlyRevenue")),
  });

  const [estimatedCost, setEstimatedCost] = React.useState<number | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { serviceType: "", businessScale: "", monthlyRevenue: 0 },
  });
 
  // Logika onSubmit tidak berubah
  function onSubmit(values: z.infer<typeof formSchema>) {
    let baseCost = 0;
    if (values.serviceType === "validation") baseCost = 500000;
    if (values.serviceType === "planning") baseCost = 1500000;
    if (values.serviceType === "market-insight") baseCost = 2500000;

    let scaleMultiplier = 1;
    if (values.businessScale === "micro") scaleMultiplier = 1;
    if (values.businessScale === "small") scaleMultiplier = 1.5;
    if (values.businessScale === "medium") scaleMultiplier = 2.5;

    const revenueBonus = values.monthlyRevenue * 0.01;
    setEstimatedCost(baseCost * scaleMultiplier + revenueBonus);
  }

  // -> 5. Buat data untuk Select agar JSX lebih bersih
  const serviceOptions = [
    { value: "validation", label: t("options_service_validation") },
    { value: "planning", label: t("options_service_planning") },
    { value: "market-insight", label: t("options_service_market_insight") },
  ];

  const scaleOptions = [
    { value: "micro", label: t("options_scale_micro") },
    { value: "small", label: t("options_scale_small") },
    { value: "medium", label: t("options_scale_medium") },
  ];

  return (
    <section className="w-full py-20 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("title")}
          </h1>
          <p className="text-lg text-muted-foreground">{t("subtitle")}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3">
            <Card className="bg-background rounded-2xl shadow-none p-4 sm:p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="font-display text-2xl text-foreground">
                  {t("form_title")}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="serviceType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("form_label_service")}</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="h-12">
                                <SelectValue
                                  placeholder={t("form_placeholder_service")}
                                />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {serviceOptions.map((option) => (
                                <SelectItem
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="businessScale"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("form_label_scale")}</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="h-12">
                                <SelectValue
                                  placeholder={t("form_placeholder_scale")}
                                />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {scaleOptions.map((option) => (
                                <SelectItem
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="monthlyRevenue"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("form_label_revenue")}</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder={t("form_placeholder_revenue")}
                              {...field}
                              className="h-12"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-12 text-base font-semibold"
                    >
                      {t("form_button_submit")}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-2">
            <Card className="bg-background rounded-2xl shadow-none p-6 lg:sticky lg:top-24">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="font-display text-xl sm:text-2xl text-foreground">
                  {t("result_title")}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {estimatedCost !== null ? (
                  <div>
                    <p className="text-muted-foreground mb-2">
                      {t("result_subtitle")}
                    </p>
                    <p className="text-3xl sm:text-4xl font-bold text-primary">
                      {new Intl.NumberFormat(locale, {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                      }).format(estimatedCost)}
                    </p>
                    <p className="text-xs text-muted-foreground mt-4">
                      {t("result_disclaimer")}
                    </p>
                  </div>
                ) : (
                  <div className="text-center py-8 sm:py-10 border-2 border-dashed rounded-lg">
                    <p className="text-muted-foreground">
                      {t("result_placeholder")}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
