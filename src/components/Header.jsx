import Link from "next/link";

const Header = () => {
    return (
        <header className="flex justify-between bg-white px-[20px] py-[10px] mb-[20px]">
            <img src="/img/logo.svg" alt="Logo" className="" />
            <Link href={"/"}>
                <img src="/img/RightSide.svg" alt=""/>
            </Link>
        </header>
    );
};

export default Header;
