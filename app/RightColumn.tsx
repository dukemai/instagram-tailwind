import { FunctionComponent } from "react";

interface RightColumnProps {

}

const suggestedFriends = ['user1', 'user2', 'user3']
const menu = ['About', 'Help', 'Press', 'Api', 'Jobs', 'Privacy', 'Terms', 'Locations', 'Language']

const RightColumn: FunctionComponent<RightColumnProps> = () => {
  return (<div className="pl-6 max-w-sm">
    <div className="flex items-center mt-16">
      <span className="w-12 h-12 bg-white rounded-full overflow-hidden">Avatar</span>
      <div className="ml-4">
        <a href="#">mrpinochio</a>
        <div className="text-slate-400">Duke Mai</div>
      </div>
      <div className="flex-1"></div>
      <button className="text-sm text-blue-500 font-bold">
        Switch
      </button>
    </div>
    <div className="mt-4 flex justify-between">
      <h4 className="text-slate-400">Suggestions For You</h4>
      <button className="text-sm text-white font-bold">See All</button>
    </div>

    <ul>
      {
        suggestedFriends.map((friend, key) => (
          <li key={key} className="flex items-center mt-2">
            <span className="w-10 h-10 bg-white rounded-full overflow-hidden">Avatar</span>
            <div className="ml-2">
              <a href="#">{friend}</a>
              <div className="text-slate-400 text-sm">
                Suggested for you
              </div>
            </div>
            <div className="flex-1"></div>
            <button className="text-blue-500 text-sm font-bold">Follow</button>
          </li>
        ))
      }

    </ul>
    <ul className="mt-8 flex gap-x-2 flex-wrap text-sm text-slate-400">
      {menu.map((item, key) => (
        <li key={key}>
          <a href="#">{item}</a>
        </li>
      ))}

    </ul>
    <div className="mt-4 text-slate-400">
      © 2022 CLONE INSTAGRAM
    </div>
  </div>);
}

export default RightColumn;