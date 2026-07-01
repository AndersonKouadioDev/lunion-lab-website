"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Reveal } from "./Reveal";

const FAQS = [
  {
    question: "Quels sont vos délais de réalisation ?",
    answer:
      "Tout dépend de l'ampleur du projet. Un site vitrine se livre généralement en 2 à 4 semaines, tandis qu'une application web sur-mesure demande entre 6 et 12 semaines. Nous établissons un planning précis dès le lancement et vous tenons informé à chaque étape clé.",
  },
  {
    question: "Comment se passe l'établissement d'un devis ?",
    answer:
      "Tout commence par un échange gratuit pour cerner vos besoins et vos objectifs. Nous vous remettons ensuite un devis détaillé, transparent et sans engagement, avec un périmètre clair et un budget ferme. Aucun coût caché : ce que vous voyez est ce que vous payez.",
  },
  {
    question: "Quelles technologies utilisez-vous ?",
    answer:
      "Nous travaillons avec des technologies modernes et éprouvées : Next.js, React, TypeScript et Tailwind CSS côté front, NestJS et bases de données robustes côté back. Ce stack garantit des produits rapides, sécurisés et faciles à faire évoluer dans le temps.",
  },
  {
    question: "Proposez-vous une maintenance après la livraison ?",
    answer:
      "Oui. Nous proposons des forfaits de maintenance incluant les mises à jour de sécurité, les correctifs, la surveillance des performances et les évolutions mineures. Votre produit reste ainsi performant, sécurisé et à jour bien après sa mise en ligne.",
  },
  {
    question: "À qui appartient le code une fois le projet livré ?",
    answer:
      "Le code source vous appartient intégralement. À la livraison, nous vous transférons l'ensemble des droits, des accès et des dépôts. Vous restez totalement propriétaire et libre de votre projet, sans aucune dépendance contraignante à notre égard.",
  },
  {
    question: "Assurez-vous un accompagnement après le lancement ?",
    answer:
      "Absolument. Nous formons vos équipes à la prise en main de l'outil, restons disponibles pour vous conseiller et vous accompagnons dans la durée. Notre objectif n'est pas seulement de livrer, mais de faire grandir votre projet à vos côtés.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) =>
    setOpenIndex((current) => (current === index ? null : index));

  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-bright">
            Questions fréquentes
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Tout ce que vous devez savoir
          </h2>
          <p className="mt-4 text-zinc-400">
            Vous ne trouvez pas votre réponse ? Notre équipe se fera un plaisir
            de vous aider.
          </p>
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-3xl">
          <div className="grid gap-4">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              const panelId = `faq-panel-${index}`;
              const buttonId = `faq-button-${index}`;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border bg-[#0A0A0A] transition-colors duration-300 ${
                    isOpen ? "border-violet/30" : "border-white/10 hover:border-violet/30"
                  }`}
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      onClick={() => toggle(index)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                    >
                      <span className="font-medium text-white">
                        {faq.question}
                      </span>
                      <motion.span
                        aria-hidden="true"
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-colors duration-300 ${
                          isOpen
                            ? "border-violet bg-violet/15 text-violet-bright"
                            : "border-white/10 bg-white/5 text-zinc-400"
                        }`}
                      >
                        <Plus className="h-4 w-4" />
                      </motion.span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-zinc-400 sm:px-6">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
