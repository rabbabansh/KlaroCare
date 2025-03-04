import Image from "next/image";

interface CardProps {
  icon: string;
  title: string;
  description: string;
  backgroundColor: string;
}

export const Card = ({ icon, title, description, backgroundColor }: CardProps) => {
  return (
    <div className="feature-card" style={{ backgroundColor }}>
      <div className="feature-card-content">
        <Image
          src={icon}
          alt={`${title} icon`}
          className="feature-card-icon"
          width={48}
          height={48}
        />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}; 