const Navbar = () => {
  return (
    <div className="bg-[#2c4a52] text-[#f4ebdb] px-8 py-4 flex justify-between items-center">
      <div>
        <h2 className="text-3xl">Дизайн студія</h2>
      </div>

      <div className="flex gap-8 text-2xl">
        <p className="hover:underline cursor-pointer">Галерея</p>
        <p className="hover:underline cursor-pointer">Проекти</p>
        <p className="hover:underline cursor-pointer">Контакти</p>
      </div>
    </div>
  );
};

export default Navbar;
