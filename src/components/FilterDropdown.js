const FilterDropdown = ({ filter, setFilter }) => {
  return (
    <select
      value={filter}
      onChange={(e) => setFilter(Number(e.target.value))}
      className="border border-gray-300 rounded px-2 py-1 focus:outline-none "
    >
      <option value={7}>Last 7 Days</option>
      <option value={30}>Last 30 Days</option>
      <option value={90}>Last 3 Months</option>
    </select>
  );
};

export default FilterDropdown;
