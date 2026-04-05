import { ArrowUpRight } from "lucide-react";
import type { ProductCardProps } from "../../types";

export default function ProductCard({
  category,
  title,
  description,                                                                                              
  coverImage,
  date,
  tags,
}: ProductCardProps) {
  const formattedDate = new Date(date);
  const day = formattedDate.getDate();
  const monthYear = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(formattedDate);

  return (
    <div className="xl:w-[415px] 2xl:w-[523px] xl:mx-auto">
        <div className="rounded-lg p-[1px] bg-gradient-to-tr from-[#3DBFB8] to-[#3DBFB8]">
          <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-2 flex flex-col h-full">
            <div className="rounded-lg p-3 border border-[#E0E0E0]">
              <img
                src={coverImage || "/images/placeholder.jpg"}
                alt={title}
                width={380}
                height={170}
                className="object-contain mb-4 rounded-lg w-full 2xl:w-[510px]"
              />

              <p className="text-[14px] 2xl:text-[18px] text-[#3DBFB8] font-semibold mb-4">
                {category}
              </p>

              <div className="flex items-start justify-between">
                <h3 className="max-w-[330px] 2xl:max-w-[430px] text-base sm:text-lg md:text-[18px] 2xl:text-[32px] font-semibold line-clamp-2">
                  {title}
                </h3>
                <ArrowUpRight className="w-6 h-6 2xl:w-8 2xl:h-8 text-[#454852] cursor-pointer hover:text-black" />
              </div>

              <div className="w-[100px] h-[1px] bg-black my-4" />

              <p className="text-[14px] 2xl:text-[19px] font-normal max-w-[352px] 2xl:max-w-[470px] text-start flex-grow leading-[1.825] line-clamp-2">
                {description}
              </p>

              {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-[#3DBFB8]/10 text-[#3DBFB8] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex justify-between items-center mt-14">
                <div className="flex flex-row text-center items-center leading-tight gap-2">
                  <div className="text-[36px] md:text-[48px] font-medium text-[#101828]">
                    {day}
                  </div>
                  <div className="text-[12px] md:text-[15px] font-normal text-[#454852] uppercase tracking-wide">
                    {monthYear.split(" ")[0]} <br /> {monthYear.split(" ")[1]}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}