import { MessageCircle } from "lucide-react";

function WhatsAppButton({ totalItems }) {
  const message = encodeURIComponent("Hello 2FM BAGSTORE, I need help choosing a bag.");

  return (
    <a
      className="floating-whatsapp"
      href={`https://wa.me/256751007508?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={24} />
      {totalItems > 0 ? <span className="wa-count">{totalItems}</span> : null}
    </a>
  );
}

export default WhatsAppButton;