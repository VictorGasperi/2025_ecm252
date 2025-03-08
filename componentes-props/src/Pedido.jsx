const Pedido = (props) => {
  return (
    // .card>(.card-header+.card-body)
    <div className="card">
      <div className="card-header text-muted">{props.data}</div>
      <div className="card-body d-flex">
        <div className="d-flex justify-content-center flex-column">
          <i className={`fa-solid fa-2x fa-${props.icone}`}></i>
        </div>
        <div className="flex-grow-1 py-3 ms-3">
          <h4 className="text-center">{props.titulo}</h4>
          <p className="text-center">{props.descricao}</p>
        </div>
      </div>
    </div>
  );
};

export default Pedido;
