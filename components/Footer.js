const getCurrentYear = () => {
  return new Date().getFullYear();
};

function Footer() {
  return (
    <footer className={"xp-bg"}>
      <div className="pt-6 pb-6 text-center text-accent-6 text-sm">
        <span>&copy; {getCurrentYear()} Juicebox. All Rights Reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
