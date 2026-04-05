interface ProductCardProps {
  id?: string;
  name: string;
  price: number;
  category: string;
  image: string;
}

export default function ProductCard({
  name,
  price,
  category,
  image,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-xs text-gray-500 uppercase tracking-wide">{category}</p>
        <h3 className="text-lg font-semibold mt-2">{name}</h3>
        <p className="text-xl font-bold text-[#FFC50B] mt-2">${price}</p>
        <button className="w-full mt-4 bg-[#FFC50B] text-black py-2 rounded hover:opacity-90 transition">
          View Details
        </button>
      </div>
    </div>
  );
}
