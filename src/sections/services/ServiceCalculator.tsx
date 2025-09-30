"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
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

const formSchema = z.object({
  serviceType: z.string().min(1, { message: "Silakan pilih jenis layanan." }),
  businessScale: z.string().min(1, { message: "Silakan pilih skala bisnis." }),
  monthlyRevenue: z.coerce.number().min(0, "Pendapatan harus angka positif."),
});

export function ServiceCalculator() {
  const [estimatedCost, setEstimatedCost] = React.useState<number | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      serviceType: "",
      businessScale: "",
      monthlyRevenue: 0,
    },
  });

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

  return (
    <section className="w-full py-20 lg:py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-[#1A202C] mb-4">
            Kalkulator Estimasi Layanan
          </h1>
          <p className="text-lg text-gray-600">
            Dapatkan perkiraan biaya untuk layanan perencanaan bisnis kami.
            Cukup isi beberapa detail di bawah ini.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3">
            <Card className="bg-white border-gray-200 rounded-2xl shadow-none p-4 sm:p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="font-display text-2xl text-[#1A202C]">
                  Detail Bisnis Anda
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
                          <FormLabel>Jenis Layanan</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="h-12">
                                <SelectValue placeholder="Pilih layanan yang Anda butuhkan" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="validation">
                                Validasi Ide Bisnis
                              </SelectItem>
                              <SelectItem value="planning">
                                Perencanaan Finansial
                              </SelectItem>
                              <SelectItem value="market-insight">
                                Insight Pasar
                              </SelectItem>
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
                          <FormLabel>Skala Bisnis</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="h-12">
                                <SelectValue placeholder="Pilih skala bisnis Anda saat ini" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="micro">
                                Mikro ( &lt; 100jt/tahun )
                              </SelectItem>
                              <SelectItem value="small">
                                Kecil ( 100jt - 1M/tahun )
                              </SelectItem>
                              <SelectItem value="medium">
                                Menengah ( 1M - 5M/tahun )
                              </SelectItem>
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
                          <FormLabel>
                            Perkiraan Pendapatan Bulanan (Rp)
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Contoh: 15000000"
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
                      Hitung Estimasi
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-2">
            <Card className="bg-white border-gray-200 rounded-2xl shadow-none p-6 lg:sticky lg:top-24">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="font-display text-xl sm:text-2xl text-[#1A202C]">
                  Hasil Estimasi Biaya
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {estimatedCost !== null ? (
                  <div>
                    <p className="text-gray-600 mb-2">
                      Perkiraan biaya layanan:
                    </p>
                    <p className="text-3xl sm:text-4xl font-bold text-primary">
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                      }).format(estimatedCost)}
                    </p>
                    <p className="text-xs text-gray-500 mt-4">
                      *Ini adalah biaya estimasi. Harga final akan didiskusikan
                      saat sesi konsultasi.
                    </p>
                  </div>
                ) : (
                  <div className="text-center py-8 sm:py-10 border-2 border-dashed rounded-lg">
                    <p className="text-gray-500">
                      Hasil akan muncul di sini setelah Anda mengisi formulir.
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
