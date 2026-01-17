import { ExternalLink, Instagram } from "lucide-react";

interface EventCardProps {
  title: string;
  subtitle?: string;
  descriptionEn: string;
  descriptionAr: string;
  instagramLink: string;
  image?: string;
  featured?: boolean;
}

const EventCard = ({
  title,
  subtitle,
  descriptionEn,
  descriptionAr,
  instagramLink,
  image,
  featured = false,
}: EventCardProps) => {
  return (
    <article
      className={`mirsat-card group ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      {image && (
        <div className="relative overflow-hidden aspect-[16/9]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
      <div className="p-6 md:p-8 space-y-4">
        {subtitle && (
          <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
            {subtitle}
          </span>
        )}
        <h3 className="mirsat-subheading group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <div className="space-y-3">
          <p className="mirsat-body">{descriptionEn}</p>
          <p className="mirsat-body arabic text-right" dir="rtl">
            {descriptionAr}
          </p>
        </div>

        <a
          href={instagramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors duration-300 group/link"
        >
          <Instagram className="w-4 h-4" />
          <span>Visit our Instagram for more info</span>
          <ExternalLink className="w-3 h-3 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
        </a>
      </div>
    </article>
  );
};

export default EventCard;
