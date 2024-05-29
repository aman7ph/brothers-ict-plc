import { Link } from "react-router-dom";

function Card({ title, image, description }) {
  return (
    <Link to={{ pathname: "/service" }}>
      <div className="flex gap-3 flex-col w-[300px] bg-light p-6 rounded-lg border border-green-300 shadow-lg hover:scale-110 transition duration-200 max-h-[430px]">
        <img
          src={image}
          alt={title}
          className="border border-green-300 rounded-lg max-h-[190px]"
        />
        <h5 className="font-bold text-xl">{title}</h5>
        <p className="text-justify">{description}</p>
      </div>
    </Link>
  );
}

export default Card;
