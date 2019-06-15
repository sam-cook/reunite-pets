import Link from "next/link";

const Header = () => (
  <header className="bg-black-90 w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
    <nav className="f6 fw6 ttu tracked">
      <Link prefetch href="/">
        <a className="link dim white dib mr3 b i">Reunite Pets</a>
      </Link>
      <Link prefetch href="/lost-pets">
        <a className="link dim white dib mr3">Animals away from home</a>
      </Link>
      <Link prefetch href="/found-pets">
        <a className="link dim white dib mr3">Found critters</a>
      </Link>
    </nav>
  </header>
);

export default Header;
