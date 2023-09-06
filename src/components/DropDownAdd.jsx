import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Text from "./Text";
import Img from "./Img";

export default function DropDownAdd() {
  const [selectedItem, setSelectedItem] = React.useState("Title");
  const [selectsort, setSelectedsort] = React.useState("Inscreasing");
  const menuButtonRef = React.useRef(null); // Ref to the Menu.Button
  const menuItemsRef = React.useRef(null); // Ref to the Menu.Items

  const handleMenuItemClick = (item) => {
    setSelectedItem(item);
  };
  const handleMenuItemClickSort = (item) => {
    setSelectedsort(item);
  };
  //   React.useEffect(() => {
  //     let sortedData = [...props.chartData];

  //     if (selectedItem === "Title") {
  //       sortedData.sort((a, b) =>
  //         a.trackMetadata.trackName.localeCompare(b.trackMetadata.trackName)
  //       );
  //     } else if (selectedItem === "Artist") {
  //       sortedData.sort((a, b) =>
  //         a.trackMetadata.artists[0].name.localeCompare(
  //           b.trackMetadata.artists[0].name
  //         )
  //       );
  //     } else if (selectedItem === "Duration") {
  //       sortedData.sort((a, b) => a.duration.localeCompare(b.duration));
  //     }

  //     if (selectsort === "Decreasing") {
  //       sortedData.reverse();
  //     }

  //     props.SortData(sortedData);
  //   }, [selectedItem, selectsort]);

  return (
    <Menu as="div" className="relative w-full h-full text-left">
      <div>
        <Menu.Button className="" ref={menuButtonRef}>
          <Img src="/images/moreicon.svg" className="h-9 w-9"></Img>
        </Menu.Button>
      </div>

      <Menu.Items
        className=" absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md dark:bg-black dark:bg-opacity-[40%] bg-white bg-opacity-70 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        ref={menuItemsRef}
      >
        <div className=" font-poppins font-semibold flex flex-col dark:text-white items-center dark:divide-y dark:divide-gray-300 divide-y divide-black">
          <div className="py-1 flex flex-col items-center">
            <Menu.Item className="p-2 cursor-pointer">
              {({ active }) => (
                <div onClick={() => handleMenuItemClick("Add library")}>
                  Add library
                </div>
              )}
            </Menu.Item>
            <Menu as="div" className=" w-full h-full text-left">
              <div>
                <Menu.Button className="" ref={menuButtonRef}>
                  <Text>Add to playlist</Text>
                </Menu.Button>
              </div>

              <Menu.Items
                className=" absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md dark:bg-black dark:bg-opacity-[40%] bg-white bg-opacity-70 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                ref={menuItemsRef}
              >
                <div className=" font-poppins font-semibold flex flex-col dark:text-white items-center dark:divide-y dark:divide-gray-300 divide-y divide-black">
                  <div className="py-1 flex flex-col items-center">
                    <Menu.Item className="p-2 cursor-pointer">
                      {({ active }) => (
                        <div onClick={() => handleMenuItemClick("Title")}></div>
                      )}
                    </Menu.Item>
                  </div>
                </div>
              </Menu.Items>
            </Menu>
          </div>
        </div>
      </Menu.Items>
    </Menu>
  );
}
