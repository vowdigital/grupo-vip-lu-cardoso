import whatsapp from "../../assets/whatsapp-fixed.png";

const groupUrl = "https://chat.whatsapp.com/CJbBBkoLQAjKB6DfSsT4GJ";

export function WhatsAppButton({ children }: { children: string }) {
  return (
    <a className="whatsapp-button" href={groupUrl} target="_blank" rel="noopener noreferrer">
      <img src={whatsapp} width={24} height={24} alt="" aria-hidden="true" />
      {children}
    </a>
  );
}
