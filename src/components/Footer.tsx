const Footer = () => {
  return (
    <footer className="py-12 text-center bg-background flex flex-col gap-4">
      <p className="font-script text-3xl text-gold">
        Made with ♥ for Oluwasayofunmi Precious
      </p>
      <p className="font-sans text-xs text-muted-foreground tracking-widest uppercase">
        Happy Valentine's Day 2026
      </p>
      <a
        href="https://github.com/xarmzon"
        target="_blank"
        className="font-script text-xl hover:bg-black hover:text-gold-light text-gold hover:px-2 hover:py-1 max-w-max mx-auto"
      >
        From Your Oluwakayode
      </a>
    </footer>
  );
};

export default Footer;
