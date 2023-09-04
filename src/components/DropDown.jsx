import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Text from "./Text";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropDown(props) {
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
  React.useEffect(() => {
    let sortedData = [...props.chartData];

    if (selectedItem === "Title") {
      sortedData.sort((a, b) =>
        a.trackMetadata.trackName.localeCompare(b.trackMetadata.trackName)
      );
    } else if (selectedItem === "Artist") {
      sortedData.sort((a, b) =>
        a.trackMetadata.artists[0].name.localeCompare(
          b.trackMetadata.artists[0].name
        )
      );
    } else if (selectedItem === "Duration") {
      sortedData.sort(
        (a, b) => a.trackMetadata.durationInMs - b.trackMetadata.durationInMs
      );
    }

    if (selectsort === "Decreasing") {
      sortedData.reverse();
    }

    props.SortData(sortedData);
  }, [selectedItem, selectsort]);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="" ref={menuButtonRef}>
          <img src="./images/sort.svg" alt="Sort" />
        </Menu.Button>
      </div>

      <Menu.Items
        className=" absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-black bg-opacity-[40%] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        ref={menuItemsRef}
      >
        <div className="flex flex-col text-white items-center divide-y divide-gray-300">
          <div className="py-1 flex flex-col items-center">
            <Menu.Item className="p-2 cursor-pointer">
              {({ active }) => (
                <div
                  onClick={() => handleMenuItemClick("Title")}
                  className={selectedItem === "Title" ? "text-[#d14b4b]" : ""}
                >
                  Title {selectedItem === "Title" && " ✓"}
                </div>
              )}
            </Menu.Item>
            <Menu.Item className="p-1 cursor-pointer">
              {({ active }) => (
                <div
                  onClick={() => handleMenuItemClick("Artist")}
                  className={selectedItem === "Artist" ? "text-[#d14b4b]" : ""}
                >
                  Artist {selectedItem === "Artist" && " ✓"}
                </div>
              )}
            </Menu.Item>
            <Menu.Item className="p-1 cursor-pointer">
              {({ active }) => (
                <div
                  onClick={() => handleMenuItemClick("Duration")}
                  className={
                    selectedItem === "Duration" ? "text-[#d14b4b]" : ""
                  }
                >
                  Duration {selectedItem === "Duration" && " ✓"}
                </div>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item className="p-1 cursor-pointer">
              {({ active }) => (
                <div
                  onClick={() => handleMenuItemClickSort("Inscreasing")}
                  className={
                    selectsort === "Inscreasing" ? "text-[#d14b4b]" : ""
                  }
                >
                  Inscreasing {selectsort === "Inscreasing" && " ✓"}
                </div>
              )}
            </Menu.Item>
            <Menu.Item className="p-1 cursor-pointer">
              {({ active }) => (
                <div
                  onClick={() => handleMenuItemClickSort("Decreasing")}
                  className={
                    selectsort === "Decreasing" ? "text-[#d14b4b]" : ""
                  }
                >
                  Decreasing {selectsort === "Decreasing" && " ✓"}
                </div>
              )}
            </Menu.Item>
          </div>
        </div>
      </Menu.Items>
    </Menu>
  );
}
