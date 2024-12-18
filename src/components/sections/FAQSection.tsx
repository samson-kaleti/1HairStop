import { useState } from "react";
import { ChevronDown, ChevronUp } from 'lucide-react';


export const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    
    const faqs = [
      {
        question: "How do I care for my hair extensions?",
        answer: "Wash with sulfate-free shampoo, use conditioner from mid-length to ends, and always air dry when possible."
      },
      {
        question: "What is your return policy?",
        answer: "We offer a 30-day return policy for unused items in original packaging."
      },
      {
        question: "How long do hair extensions last?",
        answer: "With proper care, our hair extensions typically last 6-12 months."
      }
    ];
  
    return (
      <div className="w-full max-w-[1200px] mx-auto flex flex-col justify-center py-12 m-4"> 
      <h1 className="text-3xl font-serif text-center py-2  ">FAQ</h1>
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center py-4 text-left"
            >
              <span className="font-medium">{faq.question}</span>
              {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openIndex === index && (
              <div className="pb-4 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };