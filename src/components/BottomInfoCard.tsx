interface BottomInfoCardProps {
  image: string;
  alt: string;
  title: string;
  desc: string;
  txt: string;
}

const BottomInfoCard: React.FC<BottomInfoCardProps> = ({
  image,
  alt,
  title,
  desc,
  txt,
}) => {
  return (
    <div>
      <img src={image} alt={alt} />
      <h1>{title}</h1>
      <p>{desc}</p>
      <button>{txt}</button>
    </div>
  );
};

export default BottomInfoCard;
