export const siteConfig = {
  name: "Norte Digital",
  provisionalName: true,
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  description:
    "Sites, automação com inteligência artificial e soluções digitais para micro e pequenas empresas de Roraima.",
};

export function createWhatsAppUrl(message: string) {
  const number = siteConfig.whatsappNumber.replace(/\D/g, "");
  const destination = number ? `https://wa.me/${number}` : "https://wa.me/";
  return `${destination}?text=${encodeURIComponent(message)}`;
}
