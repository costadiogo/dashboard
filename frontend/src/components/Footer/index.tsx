const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <p className="text-light">
          App desenvolvido por{" "}
          <a
            href="https://www.linkedin.com/in/diogo-costa-8138a69b/"
            target="_blank"
            rel="noreferrer"
          >
            Diogo Costa
          </a>
        </p>
        <p className="text-light">
          <small>
            <strong>Semana Spring React</strong>
            <br />
            Evento promovido pela escola DevSuperior
          </small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;