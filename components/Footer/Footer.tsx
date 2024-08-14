function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className=" px-8 p-4 bg-base-200 shadow-inner text-lg">
      <section className="max-w-7xl flex flex-col lg:flex-row justify-between mx-auto">
        <div className="items-center grid-flow-col">
          <p>Copyright © {year} - All right reserved</p>
        </div>
        <div>
          <p>
            Created by:{" "}
            <a
              target="_blank"
              href="https://daniel-kowalski.com"
              className="underline"
              rel="noreferrer"
            >
              Daniel Kowalski
            </a>
          </p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
