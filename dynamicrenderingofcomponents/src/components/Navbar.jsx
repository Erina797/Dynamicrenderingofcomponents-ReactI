const Navbar = ({ handleSearch, setSearch, search }) => {
  const catchSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark w-100 text-white">
      <div className="container-fluid">
        <h2>Buscador de Colaboradores</h2>
        <form
          action=""
          className="d-flex"
          role="search"
          onSubmit={handleSearch}
        >
          <input
            type="search"
            className="form-control me-2"
            placeholder="Buscar Nombre"
            onChange={catchSearch}
            value={search}
          />
          <button type="submit" className="btn btn-outline-warning">
            Buscar
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
