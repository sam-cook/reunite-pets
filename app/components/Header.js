import Link from "next/link";

const Header = () => (
  <header>
    <Link prefetch href="/">
      <a>Home</a>
    </Link>
    <Link prefetch href="/pets">
      <a>Pets</a>
    </Link>
    <style jsx>
      {`
        header {
          margin-bottom: 25px;
        }
        a {
          font-size: 14px;
          margin-right: 15px;
          text-decoration: none;
        }
      `}
    </style>
  </header>
);

export default Header;
