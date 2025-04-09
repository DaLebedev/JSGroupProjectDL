// Header component contains title & searchbar
const Header = ({ setSearchQuery }) => {
  return (
    <header className="header">
      <h1 className="text-3xl font-bold">EmployeeHub - Connect With Your Team</h1>
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search by name..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </header>
  );
};

export default Header;
