/* eslint-disable @typescript-eslint/no-explicit-any */


const SearchBar = ({ handleSearch }:any) => {
  return (
    <div className="flex items-center justify-between bg-white rounded-md shadow-md p-4 mb-4">
      <input
        type="text"
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Search by title, author, or genre"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
