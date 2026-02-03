import { ExternalLink, Instagram } from "lucide-react";

interface EventCardProps {
  title: string;
  subtitle?: string;
  descriptionEn: string;
  descriptionAr: string;
  instagramLink: string;
  image?: string;
  images?: string[];
  featured?: boolean;
}

const EventCard = ({
  title,
  subtitle,
  descriptionEn,
  descriptionAr,
  instagramLink,
  image,
  images,
  featured = false,
}: EventCardProps) => {
  return (
    <article
      className={`mirsat-card group ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Single image */}
      {image && !images && (
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      {/* Image grid (4 images like Showcase) */}
      {images && images.length > 0 && (
        <div className="grid grid-cols-4 gap-1">
          {images.map((img, index) => (
            <div key={index} className="relative overflow-hidden aspect-square">
              <img
                src={img}
                alt={`${title} - Image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      )}

      <div className="p-6 space-y-4">
        {/* Title - larger, bold */}
        <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-base font-medium text-muted-foreground">
            {subtitle}
          </p>
        )}
        
        {/* Descriptions */}
        <div className="space-y-4">
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            {descriptionEn}
          </p>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed arabic text-right" dir="rtl">
            {descriptionAr}
          </p>
        </div>

        {/* Instagram link */}
        <a
          href={instagramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors duration-300 group/link text-sm"
        >
          <Instagram className="w-4 h-4" />
          <span>Visit our Instagram for more Info</span>
          <ExternalLink className="w-3 h-3 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
        </a>
      </div>
    </article>
  );
};

export default EventCard;
