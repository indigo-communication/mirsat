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
    <div className="group relative p-8 md:p-10 rounded-2xl bg-muted/50 hover:bg-muted transition-colors duration-300 overflow-hidden">
      {/* Accent bar */}
      <div
        className={`absolute top-0 left-0 w-1 h-full ${
          accentColor === "primary" ? "bg-primary" : "bg-accent"
        }`}
      />
      
      <div className="space-y-6">
        {/* Title */}
        <div className="flex items-center justify-between">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
            {name}
          </h3>
          <span className="text-lg font-medium text-muted-foreground arabic">
            {nameAr}
          </span>
        </div>

        {/* Description */}
        <div className="space-y-4">
          <p className="mirsat-body">{descriptionEn}</p>
          <p className="mirsat-body arabic text-right" dir="rtl">
            {descriptionAr}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InitiativeCard;
