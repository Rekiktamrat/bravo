import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import aboutImage from "@/assets/about-trucks.jpg";

const benefits = [
  "Best Truck Dispatch Company On Your Side",
  "You Pick The Areas You Want To Drive",
  "We Handle All Your Broker Setup Packets",
  "We Negotiate Hard For Best Paying Rates",
  "We Talk To Brokers — You Focus On Driving",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={aboutImage}
                alt="Highway interchange aerial view at night"
                className="w-full h-80 lg:h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-display font-bold text-sm tracking-widest uppercase">
              About Us
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-foreground mt-3 mb-5">
              Full-Service Truck Dispatching
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              VELOSO Dispatcher LLC is a <strong className="text-foreground">"Full Service"</strong> truck dispatching company that handles all of the back-office work so you can compete with the large fleets. We make it affordable for small carriers to access professional dispatch services.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium text-sm">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
