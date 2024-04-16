import { useTheme } from "next-themes";

export default function NavbarLogo() {
    const { theme } = useTheme();

    return (
        <div>
            <img
                src={theme === "dark" ? "/vite.svg" : "/vite.svg"}
                className="navbar-logo"
                alt="logo"
            />
        </div>
    );
}