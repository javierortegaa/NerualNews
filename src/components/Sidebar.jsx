// Sidebar.jsx
const Sidebar = () => (
  <aside className="w-1/4 border-l-2 border-border-black pl-4">
    {/* Trending Section */}
    <div className="border border-border-black p-4 mb-4">
      <h2 className="text-lg font-bold">Trending</h2>
      <ul className="text-sm list-disc list-inside mt-2 space-y-1">
        <li>AI breakthroughs in 2024</li>
        <li>Apple's latest launch</li>
        <li>Global economic outlook</li>
      </ul>
    </div>

    {/* Editors' Picks Section */}
    <div className="border border-border-black p-4 mb-4">
      <h2 className="text-lg font-bold">Editors' Picks</h2>
      <ul className="text-sm list-disc list-inside mt-2 space-y-1">
        <li>NVIDIA's new GPU</li>
        <li>The rise of LLMs</li>
        <li>Cybersecurity threats</li>
      </ul>
    </div>

    {/* Random Crap Section */}
    <div className="border border-border-black p-4">
      <h2 className="text-lg font-bold">Random Crap</h2>
      <ul className="text-sm list-disc list-inside mt-2 space-y-1">
        <li>Poopy poo poop poop</li>
        <li>Poopy poo poop poop</li>
        <li>Poopy poo poop poop</li>
      </ul>
    </div>
  </aside>
);

export default Sidebar;
