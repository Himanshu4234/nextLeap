import { useMemo } from "react";

export default function WhatsAppFloatingButton({
  phone = "919654801167", // fallback: +91 96548 01167 (without +)
  message = "hey i want to connect with you for a bussiness",
}) {
  const href = useMemo(() => {
    const txt = encodeURIComponent(message);
    // Works on desktop & mobile
    return `https://wa.me/${phone}?text=${txt}`;
  }, [phone, message]);

  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with NextLeap on WhatsApp"
        className="wa-fab"
      >
        {/* WhatsApp SVG */}
        <img src="https://img.icons8.com/color/48/000000/whatsapp.png"  className="whatsapp-float" alt="WhatsApp Chat"/>
      </a>

      {/* Styles */}
      <style>{`
        .wa-fab {
          position: fixed;
          right: 20px;
          bottom: 40px;
          z-index: 1000;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #25D366, #1ebe57);
          color: #fff;
          padding: 12px 16px;
          border-radius: 999px;
          text-decoration: none;
          box-shadow: 0 10px 24px rgba(37, 211, 102, 0.35);
          transform: translateZ(0);
          transition: transform .2s ease, box-shadow .2s ease, opacity .2s ease;
          animation: wa-pop .45s ease-out both, wa-pulse 2.4s ease-in-out infinite 1.2s;
        }
        img.whatsapp-float{
            width: 32px;
            height: 32px;
        }
        .wa-fab:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(37, 211, 102, 0.45);
        }
        .wa-icon {
          width: 24px;
          height: 24px;
          fill: currentColor;
          flex: 0 0 auto;
        }
        .wa-label {
          font-weight: 700;
          letter-spacing: .2px;
          font-size: .95rem;
          white-space: nowrap;
        }

        /* Make it circular-only on very small screens */
        @media (max-width: 480px) {
          .wa-fab {
            padding: 14px;
            border-radius: 50%;
          }
          .wa-label {
            display: none;
          }
        }

        @keyframes wa-pop {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes wa-pulse {
          0%, 100% { box-shadow: 0 10px 24px rgba(37,211,102,.35); }
          50%      { box-shadow: 0 12px 28px rgba(37,211,102,.55); }
        }
      `}</style>
    </>
  );
}
