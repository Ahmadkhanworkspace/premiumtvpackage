"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`rounded-2xl border transition-all duration-200 ${
              isOpen ? "border-primary bg-primary/5" : "border-card-border bg-card-bg"
            } glass-panel`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="flex w-full items-center justify-between px-6 py-4.5 text-left font-bold text-sm sm:text-base text-foreground"
            >
              <span>{item.question}</span>
              {isOpen ? (
                <ChevronUp className="h-4.5 w-4.5 text-primary shrink-0 ml-2" />
              ) : (
                <ChevronDown className="h-4.5 w-4.5 text-foreground/50 shrink-0 ml-2" />
              )}
            </button>
            
            {isOpen && (
              <div className="px-6 pb-5 text-sm text-foreground/85 leading-relaxed border-t border-card-border/40 pt-3">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
