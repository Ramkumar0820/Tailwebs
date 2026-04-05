import { useState } from "react";
import { ProductCard, Loader, NoResults, SearchBar } from "../../components";
import { latestCards } from "../../data/latestCards";

function HomepageLatestEGovSection() {
  const popularBlogs = latestCards.filter((item) => item.type === "Latest");

  const dynamicCategories = [
    "All",
    ...Array.from(
      new Set(
        popularBlogs
          .map((blog) => blog.category?.name)
          .filter((name): name is string => Boolean(name))
      )
    ),
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(3);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (query: string) => {
    setIsLoading(true);
    setSearchQuery(query);
    setVisibleCount(3);
    setTimeout(() => setIsLoading(false), 500);
  };

  const handleCategoryChange = (cat: string) => {
    setIsLoading(true);
    setActiveCategory(cat);
    setVisibleCount(3);
    setTimeout(() => setIsLoading(false), 500);
  };

  const filteredBlogs = popularBlogs
    .filter((item) =>
      activeCategory === "All" ? true : item.category?.name === activeCategory
    )
    .filter((item) =>
      searchQuery.trim() === ""
        ? true
        : item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const visibleBlogs = filteredBlogs.slice(0, visibleCount);
  const handleViewMore = () => setVisibleCount((prev) => prev + 3);
  const showViewMore = visibleCount < filteredBlogs.length;

  return (
    <section className="relative bg-white px-6 py-6 md:py-12 overflow-hidden">
      <div className="max-w-[1920px] mx-auto">

        <div className="text-center mb-10 space-y-1">
          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold">
            Latest from eGov
          </h2>
          <p className="text-[14px] lg:text-[18px] font-medium mt-2 max-w-3xl mx-auto text-gray-500">
            Discover insights, trends, and updates that drive digital governance
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-8">
          <SearchBar
            placeholder="Search by title..."
            onSearch={handleSearch}
          />
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {dynamicCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 rounded-full border text-sm md:text-base font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#3DBFB8] text-white border-[#3DBFB8]"
                  : "bg-white text-black border-gray-300 hover:bg-[#3DBFB8]/20 hover:border-[#3DBFB8]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {isLoading ? (
          <Loader />
        ) : visibleBlogs.length === 0 ? (
          <NoResults />
        ) : (
          <>
            <div
              className={`gap-8 ${
                visibleBlogs.length === 1
                  ? "flex flex-col md:flex-row justify-center"
                  : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {visibleBlogs.map((item, index) => (
                <ProductCard
                  key={index}
                  category={item.category?.name || "General"}
                  title={item.title}
                  description={item.shortDescription}
                  coverImage={item.coverImage?.url}
                  date={item.createdAt}
                  tags={item.tags}
                />
              ))}
            </div>

            {showViewMore && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={handleViewMore}
                  className="px-8 py-3 rounded-full border-2 border-[#3DBFB8] text-[#3DBFB8] font-semibold hover:bg-[#3DBFB8] hover:text-white transition"
                >
                  View More
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default HomepageLatestEGovSection;