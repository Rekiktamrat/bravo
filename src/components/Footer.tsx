import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="font-display font-black text-xl mb-4">
              BRAVO<span className="text-accent"> DISPATCH</span>
            </h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Full-service truck dispatching company helping owner-operators and small carriers maximize their revenue.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {["Home", "Services", "About", "FAQ", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-primary-foreground/60 hover:text-accent transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-primary-foreground/60">
                <Phone className="h-4 w-4 text-accent" />
                +1 (302) 204-8440
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/60">
                <Mail className="h-4 w-4 text-accent" />
                info@bravo-dispatch.com
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/60">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                561, 1007 N Orange St. 4th Floor, Wilmington, DE 19801
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center text-primary-foreground/40 text-sm">
          © {new Date().getFullYear()} Bravo LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
