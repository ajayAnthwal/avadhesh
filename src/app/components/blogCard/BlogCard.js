import Image from "next/image";

const BlogCard = ({ card }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative h-72 w-full">
        <Image
          src={card.imgSrc}
          alt={card.title}
          width={500}
          height={300}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-left">{card.title}</h3>
        <p className="text-gray-600 text-left">{card.description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
