import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <span className="footer__logo">RU<span className="footer__logo-dot">.</span></span>
          <span className="footer__copy">&copy; {year} Raghav Uparkar</span>
        </div>
        <div className="footer__right">
          <span className="footer__note">Designed &amp; built with intention.</span>
        </div>
      </div>
    </footer>
  );
}
