interface InitiativeCardProps {
  name: string;
  nameAr: string;
  descriptionEn: string;
  descriptionAr: string;
  accentColor?: "primary" | "accent";
}

const InitiativeCard = ({
  name,
  nameAr,
  descriptionEn,
  descriptionAr,
  accentColor = "primary",
}: InitiativeCardProps) => {
  return (
    <div className="group relative p-6 md:p-8 rounded-xl bg-card border border-border hover:shadow-md transition-all duration-300 overflow-hidden">
      {/* Accent bar */}
      <div
        className={`absolute top-0 left-0 w-1 h-full ${
          accentColor === "primary" ? "bg-primary" : "bg-accent"
        }`}
      />
      
      <div className="space-y-5">
        {/* Title */}
        <div className="flex items-center justify-between">
          <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
            {name}
          </h3>
          <span className="text-base font-medium text-muted-foreground arabic">
            {nameAr}
          </span>
        </div>

        {/* Description */}
        <div className="space-y-4">
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            {descriptionEn}
          </p>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed arabic text-right" dir="rtl">
            {descriptionAr}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InitiativeCard;
