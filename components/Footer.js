const getCurrentYear = () => {
  return new Date().getFullYear();
};

function Footer() {
  return (
    <footer className={"xp-bg"}>
      <div className="py-4 text-center text-accent-6 text-sm">
        <span className="font-primary uppercase">
          &copy; {getCurrentYear()} Juicebox. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
