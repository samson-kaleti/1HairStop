import { useState, useRef } from 'react';
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: "What is hair extension?",
    answer: "Hair extensions are additional hair pieces that can be attached to your natural hair to add length, volume, or both. They come in various types including clip-ins, tape-ins, and sew-ins."
  },
  {
    question: "How long do human hair extension last?",
    answer: "With proper care, our human hair extensions typically last 6-12 months. The lifespan depends on how well you maintain them and how frequently you wear them."
  },
  {
    question: "What type of hair do we use in our hair extensions?",
    answer: "We use 100% human hair in all our extensions, carefully sourced and processed to maintain the highest quality and natural appearance."
  },
  {
    question: "How are our human hair extensions different from others?",
    answer: "Our extensions are distinguished by their premium quality, natural look, and careful processing that preserves the hair cuticle, ensuring better durability and blend with your natural hair."
  },
  {
    question: "Are your extensions suitable for all hair types?",
    answer: "Yes, our extensions are designed to work with all hair types and textures. We offer various options to ensure a perfect match for everyone."
  },
  {
    question: "Do hair extensions damage hair?",
    answer: "When properly installed and maintained, our hair extensions should not cause damage to your natural hair. We provide detailed care instructions to ensure safe wear."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  // Use refs to get the actual height of content
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-8xl mx-auto px-4">
        <h2 className="text-3xl font-serif text-center mb-12">FAQ</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-4 flex justify-between items-center text-left hover:bg-gray-50 transition-colors duration-200 group"
              >
                <span className="text-lg font-serif group-hover:text-gray-900">{faq.question}</span>
                <Plus
                  className={`w-5 h-5 transition-transform duration-300 ease-in-out group-hover:scale-110 ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}
                />
              </button>
              
              {/* Answer container with smooth height transition */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  maxHeight: openIndex === index ? contentRefs.current[index]?.scrollHeight + 'px' : '0',
                  overflow: 'hidden'
                }}
              >
                <div 
                  ref={el => contentRefs.current[index] = el}
                  className="pb-4 text-gray-600 font-serif"
                >
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}