import { ExternalLink } from "lucide-react";
import efta2024Image from "@/assets/efta-2024.jpg";
import lightDesignImage from "@/assets/light-design-workshop.jpg";
import showcaseGrid1 from "@/assets/showcase-grid-1.jpg";
import showcaseGrid2 from "@/assets/showcase-grid-2.jpg";
import showcaseGrid3 from "@/assets/showcase-grid-3.jpg";
import showcaseGrid4 from "@/assets/showcase-grid-4.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* EFTA 2024 - Full width banner with centered text below */}
      <section className="w-full">
        {/* Banner Image - Full width */}
        <a
          href="https://www.instagram.com/p/DBGaSmJOjkP/?igsh=MW11bmRmYXNidnJvbg=="
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <img
            src={efta2024Image}
            alt="EFTA 2024 - Arab Theatre Festival in Europe"
            className="w-full h-auto"
          />
        </a>

        {/* Centered text content */}
        <div className="max-w-3xl mx-auto px-6 py-12 text-center">
          <a
            href="https://www.instagram.com/p/DBGaSmJOjkP/?igsh=MW11bmRmYXNidnJvbg=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="text-[22px] font-bold text-foreground mb-2 hover:text-primary transition-colors">
              EFTA 2024
            </h2>
          </a>
          <a
            href="https://www.instagram.com/p/DBGaSmJOjkP/?igsh=MW11bmRmYXNidnJvbg=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-[16px] text-muted-foreground mb-4 hover:text-primary transition-colors">
              The Arab Theatre Festival in Europe for 2024
            </h3>
          </a>
          
          {/* Divider line */}
          <div className="w-24 h-[2px] bg-primary mx-auto mb-6" />
          
          {/* English description */}
          <p className="text-[14px] text-muted-foreground leading-relaxed mb-4">
            Mirsat's first edition of the EFTA 2024 Festival. This event will feature a dialogue session, 
            interactive workshops, storytelling performance, documentary screenings, and a showcase event. 
            We hope this festival fosters meaningful conversations and solidarity with our communities in 
            Palestine and Lebanon in light of the ongoing Israeli aggressions.
          </p>
          
          {/* Arabic description */}
          <p className="text-[14px] text-muted-foreground leading-relaxed mb-6 arabic text-center" dir="rtl">
            النسخة الأولى من مهرجان المسرح العربي EFTA 2024 يتضمن المهرجان مجموعة من الفعاليات، بما في 
            ذلك جلسات حوار، ورش عمل تفاعلية، عرض مسرحي حكواتي، عرض أفلام وثائقية وعرض فنون مسرحية. 
            نتمنى أن يكون هذا المهرجان فرصة للتلاقي، الحوار، وتعزيز التماسك في ظل العدوان الإسرائيلي 
            المستمر على أهلنا في فلسطين ولبنان.
          </p>
          
          {/* Instagram link */}
          <a
            href="https://www.instagram.com/p/DBGaSmJOjkP/?igsh=MW11bmRmYXNidnJvbg=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[13px] text-foreground hover:text-primary transition-colors tracking-wider"
          >
            <span>Visit our Instagram for more Info</span>
          </a>
        </div>
      </section>

      {/* Spacer */}
      <div className="py-8" />

      {/* LIGHT DESIGN WORKSHOP - Side by side: Image left, Text right */}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Square image on left */}
          <div className="w-full md:w-[280px] flex-shrink-0">
            <a
              href="https://www.instagram.com/p/C-arebwpKny/?igsh=MWI4MWoxazFiamRyMw=="
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src={lightDesignImage}
                alt="Light Design for Theatre Workshop"
                className="w-full aspect-square object-cover"
              />
            </a>
          </div>
          
          {/* Text content on right */}
          <div className="flex-1">
            <h1 className="text-[19px] font-bold text-foreground mb-2 tracking-tight">
              LIGHT DESIGN FOR THEATRE WORKSHOP
            </h1>
            <h3 className="text-[14px] text-muted-foreground mb-3">
              A Takato' Workshop with Alaa Minawi
            </h3>
            
            {/* Divider */}
            <div className="w-16 h-[2px] bg-primary mb-4" />
            
            {/* English description */}
            <p className="text-[13px] text-muted-foreground leading-relaxed mb-4">
              Organized by Mirsat's initiative Takato', with Alaa Minawi, the light design for theatre 
              workshop offered an opportunity for non-professionals to acquire new technical skills in 
              the field, all the while reflecting on its history and place in theatre.
            </p>
            
            {/* Arabic description */}
            <p className="text-[13px] text-muted-foreground leading-relaxed mb-4 arabic text-right" dir="rtl">
              هذه الورشة من تنظيم "تقاطع" من مرساة هي فرصة لغير المحترفين لاكتساب مهارات تقنية جديدة 
              في هذا المجال، وفي نفس الوقت التفكير في تاريخ هذا الفن ومكانته في المسرح. علاء ميناوي 
              هو فنان ومصمم إضاءة هولندي-لبناني-فلسطيني مقيم في أمستردام.
            </p>
            
            {/* Instagram link */}
            <a
              href="https://www.instagram.com/p/C-arebwpKny/?igsh=MWI4MWoxazFiamRyMw=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[12px] text-foreground hover:text-primary transition-colors tracking-wider"
            >
              <span>Visit our Instagram for more Info</span>
            </a>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="py-8" />

      {/* SHOWCASE - Side by side: 2x2 Grid image left, Text right */}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* 2x2 Grid image on left */}
          <div className="w-full md:w-[280px] flex-shrink-0">
            <a
              href="https://www.instagram.com/p/C79X5pGMy7P/?igsh=bTdxcDVydTB2Yndw"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="grid grid-cols-2 gap-[2px] aspect-square">
                <img
                  src={showcaseGrid1}
                  alt="Showcase 1"
                  className="w-full h-full object-cover"
                />
                <img
                  src={showcaseGrid2}
                  alt="Showcase 2"
                  className="w-full h-full object-cover"
                />
                <img
                  src={showcaseGrid3}
                  alt="Showcase 3"
                  className="w-full h-full object-cover"
                />
                <img
                  src={showcaseGrid4}
                  alt="Showcase 4"
                  className="w-full h-full object-cover"
                />
              </div>
            </a>
          </div>
          
          {/* Text content on right */}
          <div className="flex-1">
            <h2 className="text-[19px] font-bold text-foreground mb-2 tracking-tight">
              SHOWCASE
            </h2>
            <h3 className="text-[14px] text-muted-foreground mb-3">
              Mirsat's June 2024 Showcase
            </h3>
            
            {/* Divider */}
            <div className="w-16 h-[2px] bg-primary mb-4" />
            
            {/* English description */}
            <p className="text-[13px] text-muted-foreground leading-relaxed mb-4">
              For Mirsat's first Showcase event, we're giving the stage to performers from the SWANA 
              region and its diaspora. Ranging from theatre performances, dance, slam, and so much more.
            </p>
            
            {/* Arabic description */}
            <p className="text-[13px] text-muted-foreground leading-relaxed mb-4 arabic text-right" dir="rtl">
              عرض مرساة المفتوح الأول للفنانين من منطقة الشرق الأوسط وشمال إفريقيا وشتاتها، حيث سيتم 
              تقديم عروض فنية متنوعة من المسرح والموسيقى والشعر. فرصة لاستكشاف وتجربة تنوع الثقافات 
              والمواهب في أجواء مليئة بالإبداع والتفاعل الفني.
            </p>
            
            {/* Instagram link */}
            <a
              href="https://www.instagram.com/p/C79X5pGMy7P/?igsh=bTdxcDVydTB2Yndw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[12px] text-foreground hover:text-primary transition-colors tracking-wider"
            >
              <span>Visit our Instagram for more Info</span>
            </a>
          </div>
        </div>
      </section>

      {/* Bottom spacer */}
      <div className="py-16" />
    </div>
  );
};

export default Index;
