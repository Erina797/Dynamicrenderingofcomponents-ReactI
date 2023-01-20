const Form = ({handleSubmit,catchEmail, catchName, name, email}) => {
  return (
    <form action="" className="d-flex flex-column pt-4" onSubmit={handleSubmit}>
      <label htmlFor="">Nombre del Colaborador:</label>
      <input
        type="text"
        name="name"
        id="inptName"
        placeholder="Ingresa el nombre del Colaborador"
        onChange={catchName}
        value={name}
      />
      <label htmlFor="">Correo del Colaborador:</label>
      <input
        type="email"
        name="email"
        id="inptEmail"
        placeholder="Ingresa el correo del Colaborador"
        onChange={catchEmail}
        value={email}
      />
      <button type="submit" className="btn btn-primary w-25 my-4">
        Agregar Colaborador
      </button>
    </form>
  );
};

export default Form;
