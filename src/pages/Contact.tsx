import { Instagram, Mail, MapPin, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="mirsat-section bg-gradient-to-b from-muted/50 to-background">
        <div className="mirsat-container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="mirsat-heading">Contact Us</h1>
            <p className="text-2xl text-muted-foreground arabic">تواصل معنا</p>
            <p className="mirsat-body max-w-2xl mx-auto">
              We'd love to hear from you. Whether you're interested in collaborating, 
              participating in our events, or just want to say hello.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="mirsat-section">
        <div className="mirsat-container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Get in Touch
                  </h2>
                  <div className="mirsat-divider mb-8" />
                </div>

                <div className="space-y-6">
                  {/* Email */}
                  <a
                    href="mailto:contact@mirsat.org"
                    className="group flex items-start gap-4 p-4 rounded-xl hover:bg-muted transition-colors duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground">contact@mirsat.org</p>
                    </div>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/mirsat.asbl/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 p-4 rounded-xl hover:bg-muted transition-colors duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Instagram className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground flex items-center gap-2">
                        Instagram
                        <ExternalLink className="w-3 h-3 opacity-50" />
                      </h3>
                      <p className="text-muted-foreground">@mirsat.asbl</p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-start gap-4 p-4 rounded-xl">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Location</h3>
                      <p className="text-muted-foreground">Brussels, Belgium</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Arabic */}
              <div className="space-y-8 text-right" dir="rtl">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6 arabic">
                    تواصل معنا
                  </h2>
                  <div className="mirsat-divider mr-auto ml-0 mb-8" />
                </div>

                <div className="space-y-4">
                  <p className="mirsat-body arabic">
                    نحن نتطلع دائمًا للتواصل مع الفنانين والمبدعين وأفراد المجتمع 
                    المهتمين بمهمتنا. سواء كنت مهتمًا بالتعاون أو المشاركة في 
                    فعالياتنا، لا تتردد في التواصل معنا.
                  </p>
                  <p className="mirsat-body arabic">
                    تابعنا على إنستغرام للحصول على آخر الأخبار والفعاليات.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mirsat-section bg-primary text-primary-foreground">
        <div className="mirsat-container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Join Our Community
            </h2>
            <p className="text-lg opacity-90 max-w-xl mx-auto">
              Follow our journey as we build bridges between cultures through art 
              and performance.
            </p>
            <a
              href="https://www.instagram.com/mirsat.asbl/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors duration-300"
            >
              <Instagram className="w-5 h-5" />
              <span>Follow @mirsat.asbl</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
