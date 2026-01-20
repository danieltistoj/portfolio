"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const contactSchema = z.object({
  name: z.string().min(2, "name"),
  email: z.string().email("email"),
  message: z.string().min(10, "message"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const t = useTranslations("contactForm");
  const [status, setStatus] = React.useState<"idle" | "success">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = React.useCallback(
    async (values: ContactFormValues) => {
      setStatus("idle");
      void values;
      await new Promise((resolve) => setTimeout(resolve, 250));
      setStatus("success");
      reset();
    },
    [reset]
  );

  return (
    <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-white">{t("title")}</h3>
        <p className="text-sm text-white/60">{t("subtitle")}</p>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-2">
          <label className="text-sm text-white/70" htmlFor="name">
            {t("fields.name")}
          </label>
          <Input
            id="name"
            placeholder={t("placeholders.name")}
            {...register("name")}
          />
          {errors.name && (
            <p className="text-xs text-red-300">{t("errors.name")}</p>
          )}
        </div>
        <div className="space-y-2">
          <label className="text-sm text-white/70" htmlFor="email">
            {t("fields.email")}
          </label>
          <Input
            id="email"
            type="email"
            placeholder={t("placeholders.email")}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-red-300">{t("errors.email")}</p>
          )}
        </div>
        <div className="space-y-2">
          <label className="text-sm text-white/70" htmlFor="message">
            {t("fields.message")}
          </label>
          <Textarea
            id="message"
            placeholder={t("placeholders.message")}
            {...register("message")}
          />
          {errors.message && (
            <p className="text-xs text-red-300">{t("errors.message")}</p>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button type="submit" disabled={isSubmitting}>
            {t("actions.submit")}
          </Button>
          {status === "success" ? (
            <span className="text-sm text-emerald-300">
              {t("success")}
            </span>
          ) : null}
        </div>
      </form>
      <p className="text-xs text-white/40">{t("helper")}</p>
    </div>
  );
}
