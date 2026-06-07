import React from "react";
import type { Metadata } from "next";
import { countriesData } from "@/data/countries";
import { getFlagUrl } from "@/data/config";
import FAQAccordion from "@/components/FAQAccordion";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOContentBlock from "@/components/SEOContentBlock";
import Link from "next/link";
import { Trophy, CheckCircle, Smartphone, ShieldCheck } from "lucide-react";

const countryKey = "mexico";
const country = countriesData[countryKey];

export const metadata: Metadata = {
  title: country.seoTitle,
  description: country.seoDescription,
  keywords: [
    "IPTV Mexico",
    "paquetes premium Mexico",
    "Liga MX en vivo IPTV",
    "futbol en vivo Mexico",
    "IPTV Mexico football"
  ],
};

export default function MexicoPage() {
  const whatsappMsg = `Hola! Estoy viendo su portal de México y me gustaría obtener una cotización y la lista de canales premium.`;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      {/* Hero Section */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-tr from-primary/10 via-card-bg to-accent/5 border border-card-border p-8 md:p-12">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary-glow filter blur-3xl opacity-40 animate-pulse-glow" />
        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center space-x-2 rounded-full border border-card-border bg-card-bg px-4 py-1.5 text-xs font-semibold">
            <img
              src={getFlagUrl(country.flag)}
              alt=""
              className="w-4.5 h-3 object-cover rounded-sm border border-card-border"
            />
            <span className="text-foreground/90">Paquetes de TV Premium en México</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            {country.seoTitle}
          </h1>
          <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
            {country.introText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link
              href="/packages"
              className="inline-flex items-center justify-center rounded-xl bg-primary hover:bg-primary/95 text-white px-6 py-3.5 text-sm font-bold shadow-md shadow-primary-glow"
            >
              Ver Planes
            </Link>
            <WhatsAppButton
              text="Chatear en WhatsApp"
              message={whatsappMsg}
              variant="accent"
              className="py-3.5"
            />
          </div>
        </div>
      </div>

      {/* Local Sports Focus */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Fútbol Mexicano y Más
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            {country.localSportsTitle}
          </h2>
          <p className="text-sm sm:text-base text-foreground/75 leading-relaxed">
            {country.localSportsDesc} Configura tu reproductor con todos los canales deportivos que transmiten la Liga MX, la Champions League, el boxeo y series premium con audio latino.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {country.benefits.map((benefit, i) => (
              <div key={i} className="flex items-center space-x-2.5 text-sm text-foreground/85">
                <CheckCircle className="h-4.5 w-4.5 text-emerald-500 shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-5 rounded-2xl border border-card-border bg-card-bg p-6 glass-panel space-y-4">
          <h3 className="font-bold text-base border-b border-card-border/60 pb-3">
            Operadoras en México
          </h3>
          <p className="text-xs text-foreground/70 leading-relaxed">
            Servicio totalmente compatible y probado en redes mexicanas:
          </p>
          <ul className="space-y-2 text-xs font-semibold text-foreground/85">
            <li>• Telmex Infinitum (Peering local estable)</li>
            <li>• Izzi Telecom (UHD sin microcortes)</li>
            <li>• Totalplay (Transmisión en 4K Ultra HD)</li>
            <li>• Megacable (Uptime óptimo)</li>
            <li>• Conexiones móviles Telcel y Movistar 4.5G/5G</li>
          </ul>
        </div>
      </div>

      {/* Device Support */}
      <div className="rounded-2xl bg-card-bg border border-card-border p-6 sm:p-8 glass-panel space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">
            Dispositivos Soportados en México
          </h2>
          <p className="text-xs text-foreground/60">
            Fácil de instalar en cualquier dispositivo de streaming. Brindamos asistencia remota.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {["Amazon Firestick", "Smart TV (Samsung/LG/Hisense)", "Android TV Box", "Celular Android / iPhone"].map((d, i) => (
            <div key={i} className="rounded-xl border border-card-border bg-background/50 p-4 space-y-1">
              <Smartphone className="h-5 w-5 text-primary mx-auto" />
              <span className="text-xs font-bold block">{d}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Package CTA */}
      <div className="text-center space-y-4 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground">
          ¿Listo para Configurar tu Paquete Premium?
        </h2>
        <p className="text-xs text-foreground/70 leading-relaxed">
          Haz clic en el botón de abajo para ver nuestros paquetes. Nuestro equipo te guiará en WhatsApp con la activación al instante.
        </p>
        <div className="flex justify-center gap-3 pt-2">
          <Link
            href="/packages"
            className="inline-flex items-center justify-center rounded-xl bg-primary hover:bg-primary/95 text-white px-5 py-2.5 text-xs font-bold shadow-md shadow-primary-glow"
          >
            Elegir Paquete
          </Link>
          <WhatsAppButton
            text="Contactar Agente México"
            message={whatsappMsg}
            variant="secondary"
            className="py-2.5 text-xs"
          />
        </div>
      </div>

      {/* FAQs */}
      <div className="space-y-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground text-center">
          Preguntas Frecuentes - México
        </h2>
        <FAQAccordion items={country.faqs} />
      </div>

      {/* SEO Content Block */}
      <SEOContentBlock
        title="El Mejor IPTV Premium en México para Canales de Fútbol en Vivo"
        description="Si buscas un servicio estable en México para ver la Liga MX y copas internacionales, necesitas una configuración de calidad. Nuestros manuales garantizan la mejor transmisión UHD sin congelamientos en redes como Totalplay e Infinitum. Escríbenos en WhatsApp para verificar canales específicos."
        keywords={[
          "IPTV Mexico",
          "futbol en vivo Mexico",
          "Liga MX en vivo IPTV",
          "IPTV Mexico football"
        ]}
      />

      {/* Compliance Disclaimer */}
      <div className="rounded-xl border border-card-border bg-card-bg/40 p-4 text-xs text-foreground/50 leading-relaxed flex gap-3">
        <ShieldCheck className="h-5 w-5 text-amber-500 shrink-0" />
        <div>
          <strong>Aviso de Canales en México:</strong> La disponibilidad de los canales y la transmisión de eventos deportivos en México dependen de las leyes de licenciamiento locales de los difusores. Brindamos soporte de configuración técnica para enlaces provistos.
        </div>
      </div>
    </div>
  );
}
