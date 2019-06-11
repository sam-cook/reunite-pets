import Link from "next/link";
import { withRouter } from "next/router";

const Header = ({ router: { pathname } }) => (
  <header>
    <Link prefetch href="/">
      <a>Home</a>
    </Link>
    <Link prefetch href="/pets">
      <a>Pets</a>
    </Link>
    <style jsx>{`
      header {
        margin-bottom: 25px;
      }
      a {
        font-size: 14px;
        margin-right: 15px;
        text-decoration: none;
      }
    `}</style>
  </header>
);

export default withRouter(Header);
