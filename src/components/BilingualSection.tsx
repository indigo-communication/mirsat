interface BilingualSectionProps {
  titleEn: string;
  titleAr?: string;
  contentEn: string;
  contentAr: string;
  className?: string;
}

const BilingualSection = ({
  titleEn,
  titleAr,
  contentEn,
  contentAr,
  className = "",
}: BilingualSectionProps) => {
  return (
    <section className={`mirsat-section ${className}`}>
      <div className="mirsat-container">
        <div className="space-y-8">
          {/* Title */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="mirsat-heading">{titleEn}</h2>
            {titleAr && (
              <span className="text-2xl font-semibold text-muted-foreground arabic">
                {titleAr}
              </span>
            )}
          </div>

          <div className="mirsat-divider" />

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <p className="mirsat-body">{contentEn}</p>
            <p className="mirsat-body arabic text-right" dir="rtl">
              {contentAr}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BilingualSection;
