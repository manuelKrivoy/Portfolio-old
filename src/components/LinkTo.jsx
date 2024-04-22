import { Link } from "react-scroll";

const LinkTo = ({ target, name, onClick }) => {
  return (
    <Link
      to={target}
      smooth={true}
      duration={750}
      style={{ cursor: "pointer" }}
      onClick={onClick} // Pasa onClick al componente Link interno
    >
      {name}
    </Link>
  );
};

export default LinkTo;
