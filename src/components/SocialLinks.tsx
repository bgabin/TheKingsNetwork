import { Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';

export default function SocialLinks() {
  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  ];

  return (
    <section className="py-12 px-6 md:px-20 bg-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-6">Connect With The Brotherhood</h3>
        <div className="flex justify-center gap-6">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-800 rounded-full hover:bg-amber-500 hover:text-black transition-all transform hover:scale-110"
                aria-label={link.label}
              >
                <Icon size={28} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
