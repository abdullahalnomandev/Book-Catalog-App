
const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1f2937] p-4 text-white text-center">
      <div className="container mx-auto">&copy; {new Date().getFullYear()} Book Catalog System</div>
    </footer>
  );
};

export default Footer;
