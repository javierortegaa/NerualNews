const NewsSection = ({
  title,
  body,
  date,
  tags,
  source,
  og_url,
  selectedTag,
  handleTagChange,
}) => {
  return (
    <div className="border-border-black p-4 rounded-md">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm mb-2">{date}</p>
      <p className="mt-2">{body}</p>
      {tags && (
        <div className="mt-2 flex flex-wrap">
          {tags.map((tag, index) => (
            <span
              key={index}
              onClick={() => handleTagChange(tag)}
              className={`text-xs border border-border-black rounded-full px-2 py-1 mr-1 mb-1 cursor-pointer transition duration-300 ${
                selectedTag === tag
                  ? "bg-black text-[#f5f1e1]"
                  : "bg-transparent text-black"
              }`}
              style={{ textTransform: "uppercase" }}
            >
              {tag}
            </span>
          ))}
          <a
            className="text-xs border border-border-black rounded-full px-2 py-1 mr-1 mb-1 cursor-pointer"
            href={og_url}
            style={{ textTransform: "uppercase" }}
          >
            READ MORE
          </a>
        </div>
      )}
    </div>
  );
};

export default NewsSection;
