/* eslint-disable @typescript-eslint/no-explicit-any */

const FilterOptions = ({
  genres,
  publicationYears,
  handleGenreFilter,
  handlePublicationYearFilter,
}: any) => {
  return (
    <>
      <h3 className="text-xl font-semibold mb-2 md:block hidden">Filter</h3>

      <div className="bg-white rounded-md shadow-md p-4 mb-4 flex gap-3">
        <div className="mb-4">
          <label className="block text-gray-700">Genre:</label>
          <select
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            onChange={(e) => handleGenreFilter(e.target.value)}
          >
            <option value="">All Genres</option>
            {genres.map((genre: string) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Publication Year:</label>
          <select
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            onChange={(e) => handlePublicationYearFilter(e.target.value)}
          >
            <option value="">All Years</option>
            {publicationYears.map((year: string) => (
              <option key={year} value={year}>
                {new Date(year).getFullYear()}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default FilterOptions;
