
import { motion } from "framer-motion";
import { DollarSign, FileText, Headphones, Building2, Route, Shield } from "lucide-react";

const services = [
  {
    icon: DollarSign,
    title: "Dispatching",
    description: "Expert load booking and rate negotiation to maximize your revenue. From 5% of gross.",
    price: "From 5%",
  },
  {
    icon: FileText,
    title: "Document Management",
    description: "We handle all your paperwork — BOLs, rate confirmations, and broker setup packets.",
    price: "From 5%",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock dispatcher support. We're always available when you need us.",
    price: "Included",
  },
  {
    icon: Building2,
    title: "Factoring Service",
    description: "Quick payment solutions so you never have to wait for your hard-earned money.",
    price: "From 5%",
  },
  {
    icon: Route,
    title: "Route Planning",
    description: "Optimized routing to reduce deadhead miles and maximize time on profitable loads.",
    price: "Included",
  },
  {
    icon: Shield,
    title: "Compliance & Safety",
    description: "Stay DOT compliant with our regulatory guidance and safety monitoring services.",
    price: "Included",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-accent font-display font-bold text-sm tracking-widest uppercase">
            What We Offer
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-foreground mt-3">
            Our Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-background rounded-lg border border-border p-6 hover:border-accent/40 transition-colors duration-200 group"
            >
              <div className="w-12 h-12 rounded-lg border-2 border-accent/30 flex items-center justify-center mb-4 group-hover:border-accent group-hover:bg-accent/5 transition-colors duration-200">
                <service.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                {service.description}
              </p>
              <span className="text-accent font-display font-bold text-sm">
                {service.price}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
