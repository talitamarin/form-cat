import './Gatos.css';

const Gatos = (props) => {
  return (
    <section className="gatos">
      <h3>{props.nome}</h3>
    </section>
  );
};

export default Gatos;
