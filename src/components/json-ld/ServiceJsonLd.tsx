interface ServiceJsonLdProps {
  name: string;
  description: string;
  areaServed?: string;
}

export function ServiceJsonLd({ name, description, areaServed = "Chennai, Tamil Nadu" }: ServiceJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "EducationalOrganization",
      name: "FITA Academy",
      url: "https://fita-academy-website.vercel.app",
    },
    areaServed,
    serviceType: "IT Training & Placement",
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}