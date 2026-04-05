interface CategoryFilterProps {
  categories: string[];
  onSelect?: (category: string) => void;
}

export default function CategoryFilter({ categories, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex gap-2 flex-wrap">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect?.(category)}
          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-[#FFC50B] hover:text-white transition"
        >
          {category}
        </button>
      ))}
    </div>
  );
}
