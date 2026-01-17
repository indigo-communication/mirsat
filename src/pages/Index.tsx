import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import EventCard from "@/components/EventCard";
import efta2024Image from "@/assets/efta-2024.jpg";
import showcase1Image from "@/assets/showcase-1.jpg";

const Index = () => {
  const events = [
    {
      title: "EFTA 2024",
      subtitle: "The Arab Theatre Festival in Europe for 2024",
      descriptionEn:
        "Mirsat's first edition of the EFTA 2024 Festival. This event will feature a dialogue session, interactive workshops, storytelling performance, documentary screenings, and a showcase event. We hope this festival fosters meaningful conversations and solidarity with our communities in Palestine and Lebanon in light of the ongoing Israeli aggressions.",
      descriptionAr:
        "النسخة الأولى من مهرجان المسرح العربي EFTA 2024 يتضمن المهرجان مجموعة من الفعاليات، بما في ذلك جلسات حوار، ورش عمل تفاعلية، عرض مسرحي حكواتي، عرض أفلام وثائقية وعرض فنون مسرحية. نتمنى أن يكون هذا المهرجان فرصة للتلاقي، الحوار، وتعزيز التماسك في ظل العدوان الإسرائيلي المستمر على أهلنا في فلسطين ولبنان.",
      instagramLink: "https://www.instagram.com/p/DBGaSmJOjkP/?igsh=MW11bmRmYXNidnJvbg==",
      image: efta2024Image,
      featured: true,
    },
    {
      title: "LIGHT DESIGN FOR THEATRE WORKSHOP",
      subtitle: "A Takato' Workshop with Alaa Minawi",
      descriptionEn:
        "Organized by Mirsat's initiative Takato', with Alaa Minawi, the light design for theatre workshop offered an opportunity for non-professionals to acquire new technical skills in the field, all the while reflecting on its history and place in theatre.",
      descriptionAr:
        "هذه الورشة من تنظيم \"تقاطع\" من مرساة هي فرصة لغير المحترفين لاكتساب مهارات تقنية جديدة في هذا المجال، وفي نفس الوقت التفكير في تاريخ هذا الفن ومكانته في المسرح. علاء ميناوي هو فنان ومصمم إضاءة هولندي-لبناني-فلسطيني مقيم في أمستردام.",
      instagramLink: "https://www.instagram.com/p/C-arebwpKny/?igsh=MWI4MWoxazFiamRyMw==",
      image: efta2024Image,
      featured: false,
    },
    {
      title: "SHOWCASE",
      subtitle: "Mirsat's June 2024 Showcase",
      descriptionEn:
        "For Mirsat's first Showcase event, we're giving the stage to performers from the SWANA region and its diaspora. Ranging from theatre performances, dance, slam, and so much more.",
      descriptionAr:
        "عرض مرساة المفتوح الأول للفنانين من منطقة الشرق الأوسط وشمال إفريقيا وشتاتها، حيث سيتم تقديم عروض فنية متنوعة من المسرح والموسيقى والشعر. فرصة لاستكشاف وتجربة تنوع الثقافات والمواهب في أجواء مليئة بالإبداع والتفاعل الفني.",
      instagramLink: "https://www.instagram.com/p/C79X5pGMy7P/?igsh=bTdxcDVydTB2Yndw",
      image: showcase1Image,
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted">
        <div className="mirsat-container py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Logo/Brand */}
            <div className="space-y-4 animate-fade-in">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-foreground">
                mirsat
              </h1>
              <p className="text-3xl md:text-4xl text-muted-foreground arabic">
                مرساة
              </p>
            </div>

            {/* Tagline */}
            <p
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Building bridges between the European cultural scene and artistic practices 
              from the SWANA region
            </p>

            {/* CTA */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Link to="/about" className="mirsat-button group">
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/events" className="mirsat-button-secondary">
                View Events
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-muted-foreground/30 rounded-full" />
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="mirsat-section bg-muted/30">
        <div className="mirsat-container">
          <div className="space-y-4 mb-12">
            <div className="flex items-center justify-between">
              <h2 className="mirsat-heading">Latest Events</h2>
              <span className="text-xl text-muted-foreground arabic">فعالياتنا</span>
            </div>
            <div className="mirsat-divider" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/events" className="mirsat-button group">
              <span>View All Events</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="mirsat-section">
        <div className="mirsat-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="mirsat-heading">About Mirsat</h2>
              <div className="mirsat-divider" />
              <p className="mirsat-body">
                Mirsat is a Brussels-based ASBL launched in 2024. We aim to build a bridge 
                between the European cultural scene and artistic practices that shed light 
                on the SWANA region. At Mirsat, we believe art has the power to bring 
                awareness to different socio-political realities and emancipate its subjects 
                from stereotypes and misperceptions.
              </p>
              <Link to="/about" className="mirsat-link inline-flex items-center gap-2 group">
                <span>Learn more about us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="space-y-6 text-right" dir="rtl">
              <h2 className="text-2xl font-semibold text-muted-foreground arabic">
                عن مرساة
              </h2>
              <p className="mirsat-body arabic">
                مرساة هي جمعية غير ربحية مقرها بروكسل تأسست في عام 2024. نهدف إلى بناء جسر 
                بين الساحة الثقافية الأوروبية والممارسات الفنية التي تسلط الضوء على منطقة 
                جنوب غرب آسيا وشمال إفريقيا. نؤمن بأن الفن لديه القدرة على تسليط الضوء على 
                الحقائق الاجتماعية والسياسية المختلفة وتحرير موضوعاتها من الصور النمطية 
                والمفاهيم الخاطئة.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
