import { FunctionComponent } from "react";

interface MenuProps {

}

type MenuItem = { title: string, href: string }

const items: Array<MenuItem> = [{ title: "Home", href: "/" },


{ title: "Search", href: "/" }, { title: "Explore", href: "/" },
{ title: "Reels", href: "/" }, { title: "Messages", href: "/" },
{ title: "Notifications", href: "/" }, { title: "Create", href: "/" },
{ title: "Profile", href: "/" }]

const Menu: FunctionComponent<MenuProps> = () => {
  return (<div className="bg-black h-screen p-4 flex flex-col">
    <h1 className="h1 mt-2 mb-4 text-xl pl-2 font-bold">Instagram</h1>
    <nav>
      <ul>
        {
          items.map((item, key) => <li className="" key={key}>
            <a className="rounded-full block hover:bg-white/30 py-2 pl-2" href="#">
              {item.title}
            </a>
          </li>)
        }
      </ul>
    </nav>
    <div className="flex-1"></div>
    <div className="">
      <a className="rounded-full block hover:bg-white/30 py-2 pl-2" href="#">
        More
      </a>
    </div>
  </div>);
}

export default Menu;
