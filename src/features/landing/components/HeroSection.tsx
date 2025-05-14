"use client";

import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const { t } = useTranslation("landing");

  const letters = ["G", "Y", "N", "T"];

  return (
    <section className="py-12 text-center text-white relative z-10">
      {/* Responsive overlapping GYNT */}
      <div className="flex justify-center space-x-[-12px] sm:space-x-[-20px] md:space-x-[-30px] lg:space-x-[-40px]">
        {letters.map((letter, index) => (
          <span
            key={index}
            className="text-[80px] sm:text-[100px] md:text-[150px] lg:text-[250px] text-primary font-extrabold leading-none tracking-tight mix-blend-lighten"
          >
            {letter}
          </span>
        ))}
      </div>

      {/* Subtitle */}
      <p className="text-lg text-primary mt-6 mb-8">{t("hero.subtitle")}</p>

      {/* Buttons */}
      <div className="flex justify-center gap-4">
        <Button className="cursor-pointer">{t("hero.register")}</Button>
        <Button variant="outline" className="border-primary text-primary cursor-pointer">
          {t("hero.learnMore")}
        </Button>
      </div>
    </section>
  );
}
