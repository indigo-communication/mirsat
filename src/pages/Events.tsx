import EventCard from "@/components/EventCard";

const Events = () => {
  const events = [
    {
      title: "EFTA 2024",
      subtitle: "The Arab Theatre Festival in Europe",
      descriptionEn:
        "Mirsat's first edition of the EFTA 2024 Festival. This event will feature a dialogue session, interactive workshops, storytelling performance, documentary screenings, and a showcase event. We hope this festival fosters meaningful conversations and solidarity with our communities in Palestine and Lebanon in light of the ongoing Israeli aggressions.",
      descriptionAr:
        "النسخة الأولى من مهرجان المسرح العربي EFTA 2024 يتضمن المهرجان مجموعة من الفعاليات، بما في ذلك جلسات حوار، ورش عمل تفاعلية، عرض مسرحي حكواتي، عرض أفلام وثائقية وعرض فنون مسرحية. نتمنى أن يكون هذا المهرجان فرصة للتلاقي، الحوار، وتعزيز التماسك في ظل العدوان الإسرائيلي المستمر على أهلنا في فلسطين ولبنان.",
      instagramLink: "https://www.instagram.com/p/DBGaSmJOjkP/",
      featured: true,
    },
    {
      title: "LIGHT DESIGN FOR THEATRE WORKSHOP",
      subtitle: "A Takato' Workshop with Alaa Minawi",
      descriptionEn:
        "Organized by Mirsat's initiative Takato', with Alaa Minawi, the light design for theatre workshop offered an opportunity for non-professionals to acquire new technical skills in the field, all the while reflecting on its history and place in theatre.",
      descriptionAr:
        "هذه الورشة من تنظيم 'تقاطع' من مرساة هي فرصة لغير المحترفين لاكتساب مهارات تقنية جديدة في هذا المجال، وفي نفس الوقت التفكير في تاريخ هذا الفن ومكانته في المسرح. علاء ميناوي هو فنان ومصمم إضاءة هولندي-لبناني-فلسطيني مقيم في أمستردام.",
      instagramLink: "https://www.instagram.com/p/C-arebwpKny/",
      featured: false,
    },
    {
      title: "SHOWCASE",
      subtitle: "Mirsat's June 2024 Showcase",
      descriptionEn:
        "For Mirsat's first Showcase event, we're giving the stage to performers from the SWANA region and its diaspora. Ranging from theatre performances, dance, slam, and so much more.",
      descriptionAr:
        "عرض مرساة المفتوح الأول للفنانين من منطقة الشرق الأوسط وشمال إفريقيا وشتاتها، حيث سيتم تقديم عروض فنية متنوعة من المسرح والموسيقى والشعر. فرصة لاستكشاف وتجربة تنوع الثقافات والمواهب في أجواء مليئة بالإبداع والتفاعل الفني.",
      instagramLink: "https://www.instagram.com/p/C79X5pGMy7P/",
      featured: false,
    },
  ];

  const pastEvents = [
    {
      title: "Community Gathering",
      subtitle: "Networking Event",
      descriptionEn:
        "A community gathering for artists and cultural practitioners from the SWANA region to connect, share experiences, and build lasting collaborations.",
      descriptionAr:
        "لقاء مجتمعي للفنانين والعاملين في المجال الثقافي من منطقة جنوب غرب آسيا وشمال أفريقيا للتواصل وتبادل الخبرات وبناء تعاون دائم.",
      instagramLink: "https://www.instagram.com/mirsat.asbl/",
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="mirsat-section bg-gradient-to-b from-muted/50 to-background">
        <div className="mirsat-container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="mirsat-heading">Events</h1>
            <p className="text-2xl text-muted-foreground arabic">فعالياتنا</p>
            <p className="mirsat-body max-w-2xl mx-auto">
              Discover our workshops, festivals, and performances that celebrate 
              the rich artistic heritage of the SWANA region.
            </p>
          </div>
        </div>
      </section>

      {/* Current/Upcoming Events */}
      <section className="mirsat-section">
        <div className="mirsat-container">
          <div className="space-y-4 mb-12">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Current & Upcoming
              </h2>
              <span className="text-lg text-muted-foreground arabic">
                الفعاليات الحالية
              </span>
            </div>
            <div className="mirsat-divider" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="mirsat-section bg-muted/30">
        <div className="mirsat-container">
          <div className="space-y-4 mb-12">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Past Events
              </h2>
              <span className="text-lg text-muted-foreground arabic">
                الفعاليات السابقة
              </span>
            </div>
            <div className="mirsat-divider" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mirsat-section">
        <div className="mirsat-container">
          <div className="text-center space-y-6 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Stay Updated
            </h2>
            <p className="mirsat-body">
              Follow us on Instagram to stay informed about our upcoming events, 
              workshops, and cultural initiatives.
            </p>
            <a
              href="https://www.instagram.com/mirsat.asbl/"
              target="_blank"
              rel="noopener noreferrer"
              className="mirsat-button inline-flex"
            >
              Follow @mirsat.asbl
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
