interface PartnerCardProps {
  title: string;
  description: string;
}

export const PartnerCard = ({ title, description }: PartnerCardProps) => {
  return (
    <div className="partner-card">
      <div className="partner-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}; 