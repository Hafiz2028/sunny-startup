"use client";

import * as React from "react";
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
  const [email, setEmail] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [question, setQuestion] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Di sini Anda bisa menambahkan logika pengiriman form (misal: ke API)
    alert(
      `Terima kasih! Pesan Anda telah kami terima.\nEmail: ${email}\nJudul: ${title}\nPesan: ${question}`
    );
    setEmail("");
    setTitle("");
    setQuestion("");
  };

  return (
    <section className="w-full py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 max-w-2xl">
        <Card className="bg-white border-none rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-10">
          <CardHeader className="text-center p-0 mb-8">
            <CardTitle className="font-display text-3xl lg:text-4xl text-[#1A202C] font-bold">
              Ada Pertanyaan?
            </CardTitle>
            <CardDescription className="text-lg text-gray-600 mt-2">
              Kami siap membantu. Kirimkan pertanyaan atau umpan balik Anda
              melalui form di bawah ini.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="email"
                  placeholder="Email Anda"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 text-base rounded-lg border-gray-300 focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Judul Pertanyaan"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="h-12 text-base rounded-lg border-gray-300 focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Tuliskan pertanyaan atau umpan balik Anda di sini..."
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
                Kirim Pesan
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
