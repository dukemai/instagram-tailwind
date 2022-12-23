import { FunctionComponent } from "react";

interface HeaderProps {

}

const users = ['user 1', 'user 2']

const Header: FunctionComponent<HeaderProps> = () => {
  return (<div className='max-w-md w-full border rounded-md p-4 dark:bg-black'>
    <ul className="flex gap-2">
      {
        users.map((user, key) => (
          <li key={key}>
            <a className="flex flex-col items-center" href="#">
              <div className="w-16 h-16 border border-amber-500	 border-2 flex rounded-full items-center justify-center">{user}</div>
              <div className="text-xs mt-2">
                {user}
              </div>
            </a>

          </li>
        ))
      }


    </ul>
  </div>);
}

export default Header;