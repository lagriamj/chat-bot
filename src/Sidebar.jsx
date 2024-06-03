import {
  HomeIcon,
  ClockIcon,
  QuestionMarkCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-black">
      <ul className="menu p-4 w-64 min-h-full bg-[#1E1F20] text-white text-base">
        {/* Sidebar content here */}
        <li className="">
          <img src="/transparent-logo.png" alt="" />
        </li>
        <li className="flex flex-row items-center justify-start hover:rounded-lg hover:bg-white hover:text-black cursor-pointer hover:font-semibold">
          <HomeIcon className="h-14 w-14  flex items-center justify-center" />
          <a>Home</a>
        </li>
        <li className="flex flex-row items-center justify-start hover:rounded-lg hover:bg-white hover:text-black cursor-pointer hover:font-semibold">
          <ClockIcon className="h-14 w-14  flex items-center justify-center" />
          <a>Activity</a>
        </li>
        <li className="mt-auto flex flex-row items-center justify-start hover:rounded-lg hover:bg-white hover:text-black cursor-pointer hover:font-semibold">
          <QuestionMarkCircleIcon className="h-14 w-14 flex items-center justify-center " />
          <a>Help</a>
        </li>
        <li className="flex flex-row items-center justify-start hover:rounded-lg hover:bg-white hover:text-black cursor-pointer hover:font-semibold">
          <Cog6ToothIcon className="h-14 w-14 flex items-center justify-center " />
          <a>Settings</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
