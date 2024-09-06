// src/FAQ.js
import React, { useState } from "react";
import "./Faq.css";

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What is terracotta made from?",
      answer:
        "Lorem ipsum Dolor sit amet , Consectetur adipiscing elit. Gravida ac consectetur icitudin et tortor, id. Est purus egestas ultrices facilisis. Lorem ipsum dolor sit amet, Consectetur adipiscing elit. Gravida ac Consectetur",
      open: false,
    },
    {
      question: "What is so special about terracotta?",
      answer:
        "Lorem ipsum Dolor sit amet , Consectetur adipiscing elit. Gravida ac consectetur icitudin et tortor, id. Est purus egestas ultrices facilisis. Lorem ipsum dolor sit amet, Consectetur adipiscing elit. Gravida ac Consectetur",
      open: false,
    },
    {
      question: "What is terracotta used for?",
      answer:
        "Lorem ipsum Dolor sit amet , Consectetur adipiscing elit. Gravida ac consectetur icitudin et tortor, id. Est purus egestas ultrices facilisis. Lorem ipsum dolor sit amet, Consectetur adipiscing elit. Gravida ac Consectetur",
      open: false,
    },
    {
      question: "What is terracotta best for plants?",
      answer:
        "Lorem ipsum Dolor sit amet , Consectetur adipiscing elit. Gravida ac consectetur icitudin et tortor, id. Est purus egestas ultrices facilisis. Lorem ipsum dolor sit amet, Consectetur adipiscing elit. Gravida ac Consectetur",
      open: false,
    },
    {
      question: "What`s the difference between clay and terracotta?",
      answer:
        "Lorem ipsum Dolor sit amet , Consectetur adipiscing elit. Gravida ac consectetur icitudin et tortor, id. Est purus egestas ultrices facilisis. Lorem ipsum dolor sit amet, Consectetur adipiscing elit. Gravida ac Consectetur",
      Fopen: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        }
        return faq;
      })
    );
  };

  return (
    <div className="faq">
      {faqs.map((faq, index) => (
        <div key={index} className={`faq-item ${faq.open ? "open" : ""}`}>
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
            <span className="faq-icon">{faq.open ? "-" : "+"}</span>
          </div>
          {faq.open && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
