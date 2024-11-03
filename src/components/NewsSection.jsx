// NewsSection.jsx
const NewsSection = ({ title, body, date, tags, }) => (
  <div className="border border-border-black p-4 rounded-md">
    <h2 className="text-lg font-bold mb-2">{title}</h2>
    <p className="text-sm">{body}</p>
  </div>
);

export default NewsSection;
