import InitiativeCard from "@/components/InitiativeCard";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="mirsat-section bg-gradient-to-b from-muted/50 to-background">
        <div className="mirsat-container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="mirsat-heading">About Us</h1>
            <p className="text-2xl text-muted-foreground arabic">عن مرساة</p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mirsat-section">
        <div className="mirsat-container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="mirsat-divider" />
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                Mirsat is a Brussels-based ASBL launched in 2024. We aim to build a bridge 
                between the European cultural scene and artistic practices that shed light 
                on the SWANA region.
              </p>
              <p className="mirsat-body">
                At Mirsat, we believe art has the power to bring awareness to different 
                socio-political realities and emancipate its subjects from stereotypes 
                and misperceptions. With one founding member in Beirut and the other in 
                diaspora, Mirsat was born out of a need for exchange.
              </p>
              <p className="mirsat-body">
                For us, authenticity is a process, not an end in itself: performing and 
                creating allows us to explore our subjectivities while reflecting on our 
                positionality in our respective communities.
              </p>
            </div>

            <div className="space-y-6 text-right" dir="rtl">
              <div className="mirsat-divider mr-auto ml-0" />
              <p className="text-lg md:text-xl text-foreground leading-relaxed arabic">
                مرساة هي جمعية غير ربحية مقرها بروكسل تأسست في عام 2024. نهدف إلى بناء جسر 
                بين الساحة الثقافية الأوروبية والممارسات الفنية التي تسلط الضوء على منطقة 
                جنوب غرب آسيا وشمال إفريقيا.
              </p>
              <p className="mirsat-body arabic">
                نؤمن بأن الفن لديه القدرة على تسليط الضوء على الحقائق الاجتماعية والسياسية 
                المختلفة وتحرير موضوعاتها من الصور النمطية والمفاهيم الخاطئة. ولدت مرساة 
                نتيجة الحاجة إلى التواصل والتبادل، مع وجود أحد الأعضاء المؤسسين في بيروت 
                (لبنان)، والآخر في الشتات.
              </p>
              <p className="mirsat-body arabic">
                بالنسبة لنا، الأصالة هي عملية تراكمية متواصلة وليست هدفًا في حد ذاتها، 
                الإبداع والأداء يفتحان أمامنا أبواب الاستكشاف الذاتي، ويعكسان تأثيرنا 
                في مجتمعاتنا المتنوعة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Intro */}
      <section className="py-12">
        <div className="mirsat-container">
          <div className="text-center">
            <p className="text-lg md:text-xl text-foreground">
              Mirsat aims to fulfill this goal through its initiatives: <strong>Takato'</strong>, and <strong>EFTA</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="mirsat-section bg-muted/30">
        <div className="mirsat-container">
          <div className="grid md:grid-cols-2 gap-8">
            <InitiativeCard
              name="Takato'"
              nameAr="تقاطع"
              descriptionEn="Takato' is the pedagogical platform by Mirsat. Through workshops, installations, seminars, and more, we hope our audience and participants can learn more about the artistic practices from the SWANA region."
              descriptionAr="تقاطع هي المنصة التربوية من مرساة. تقوم تقاطع بتنظيم ورش العمل والندوات التفاعلية والعديد من النشاطات الإبداعية الآخرى، وتهدف إلى إطلاع جمهورنا والمشاركين في الفعاليات على أساليب الفن المتنوعة من العالم العربي وبلدان الشتات."
              accentColor="accent"
            />
            <InitiativeCard
              name="EFTA"
              nameAr="مهرجان المسرح العربي"
              descriptionEn="EFTA, the Arab Theatre Festival in Europe, is a yearly festival by Mirsat. This festival is a culmination of Mirsat's activities throughout the year, contained into several smaller events, to solidify the artist network and their audiences in Brussels. We aim to create an accessible and approachable environment for audiences of all backgrounds to take part in the artistic practices from artists of the region."
              descriptionAr="مهرجان المسرح العربي في أوروبا EFTA هو مهرجان سنوي من تنظيم مرساة. يعد هذا المهرجان تتويجًا لأنشطة مرساة على مدار العام ويسعى لتعزيز شبكة الفنانين وجمهورهم في بروكسل. ويهدف إلى إعداد مساحة تفاعلية تدعم مشاركة الجميع في الممارسات الفنية التي يقدمها الفنانين العرب في المهجر."
              accentColor="primary"
            />
          </div>
        </div>
      </section>

      {/* Team/Founders */}
      <section className="mirsat-section">
        <div className="mirsat-container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="mirsat-heading">Our Team</h2>
            <div className="mirsat-divider mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl font-bold text-primary-foreground">
                KE
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold">Karen El-Haddad</h3>
                <p className="text-muted-foreground">Co-Founder - Brussels</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Graphic designer and cultural worker
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-4xl font-bold text-primary-foreground">
                MA
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold">Makram Al Halabi</h3>
                <p className="text-muted-foreground">Co-Founder - Beirut</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Technical director, sound engineer, and video journalist
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
