import Link from "next/link";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <ul>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
