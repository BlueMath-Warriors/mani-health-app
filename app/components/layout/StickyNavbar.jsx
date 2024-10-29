const StickyNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 180);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`bg-white py-4 text-[#33302B] text-sm font-normal transition-all duration-500 ${
        isScrolled ? "fixed top-0 left-0 w-full shadow-lg z-50 opacity-100 transform translate-y-0" : "relative opacity-0 -translate-y-full"
      }`}
    >
      <div className="flex w-full max-w-[1500px] justify-between items-center px-[25px] large:px-24 gap-0 large:gap-[57px] min-[1223px]:gap-0 mx-auto">
        <Link href="/" className="w-[100px] h-[50px]">
          <Image
            src="/images/Al-Mani-logo.svg"
            height={50}
            width={100}
            alt="Al Mani Logo"
            className="h-full w-full"
          />
        </Link>
        <ul className="hidden large:flex justify-between gap-x-[38px] h-[50px] text-base whitespace-nowrap">
          {QUICK_LINKS.map((item, index) => (
            <NavItem
              key={index}
              label={item.name}
              href={item.destination}
              hasDropdown={item.hasDropdown}
              links={item.linksName}
              selected={pathname === item.destination}
            />
          ))}
        </ul>
        <Menu />
      </div>
    </div>
  );
};

export default StickyNavbar;
