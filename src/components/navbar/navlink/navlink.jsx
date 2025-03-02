import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navlinks({link}) {
    const pathName = usePathname()
    return (
       <Link href={link.path} className={`p-2 rounded-full ${pathName===link.path && "bg-black text-white "}`}> {link.title} </Link>
    );
}