import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BaseColaboradores } from "./components/BaseColaboradores";
import Form from "./components/Form";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dataList, setDataList] = useState(BaseColaboradores);
  const [filter, setFilter] = useState(null);
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setDataList([...dataList, { id: Date.now(), nombre: name, correo: email }]);
    setName("");
    setEmail("");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const filterList = dataList.filter((item) =>
      item.nombre.toLowerCase().includes(search)
    );
    setSearch("");
    setFilter(filterList);
  };

  const catchName = (e) => {
    setName(e.target.value);
  };

  const catchEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="app container-fluid d-flex flex-column">
      <Navbar
        handleSearch={handleSearch}
        search={search}
        setSearch={setSearch}
      />
      <div>
        <Form
          handleSubmit={handleSubmit}
          catchName={catchName}
          catchEmail={catchEmail}
          name={name}
          email={email}
        />

        {filter ? (
          <div className="border border-warning p-3">
            <h2>Filtro:</h2>
            <table className="table table-striped w-100 text-center ">
              <thead>
                <tr>
                  <td>#</td>
                  <td>Nombre</td>
                  <td>E-mail</td>
                </tr>
              </thead>
              <tbody>{filter.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.nombre}</td>
                  <td>{item.correo}</td>
                </tr>
              ))}</tbody>
              
            </table>
          </div>
        ) : null}

        <h1 className="m-3">Listado</h1>
        <table className="table table-striped w-100 text-center">
          <thead className="table table-info">
            <tr>
              <td>#</td>
              <td>Nombre</td>
              <td>E-mail</td>
            </tr>
          </thead>
          <tbody>
            {dataList
              ? dataList.map((col) => (
                  <tr key={col.id}>
                    <td>{col.id}</td>
                    <td>{col.nombre}</td>
                    <td>{col.correo}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
