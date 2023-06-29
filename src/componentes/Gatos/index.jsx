import './Gatos.css';
import AddGato from '../AddGato';

const Gatos = (props) => {
  return (
    <section className="gatos" style={{ backgroundColor: props.corSecundaria }}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <AddGato />
    </section>
  );
};

export default Gatos;
