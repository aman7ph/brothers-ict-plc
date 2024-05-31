import { Link } from "react-router-dom";

function ServiceListCard({ title, image, description, category }) {
  return (
    <Link to={`/service/${category}`}>
      <div className="flex gap-3 flex-col w-[300px] bg-light p-6 rounded-lg border border-green-2 shadow-lg hover:scale-110 transition duration-200 min-h-[440px]">
        <img
          src={image}
          alt={title}
          className="border border-green-2 rounded-lg max-h-[190px]"
        />
        <h5 className="font-bold text-pretty  text-xl">{title}</h5>
        <p className="text-pretty">{description}</p>
      </div>
    </Link>
  );
}

export default ServiceListCard;
