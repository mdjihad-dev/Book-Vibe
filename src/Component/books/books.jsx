import React, { useContext, useState } from "react";
import { BookContext } from "../context/Context";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import WishLIst from "../wishList/WishLIst";
import ReadListCard from "../readListCart/ReadListCard";

const Books = () => {
  const [shorTing, setShortion] = useState('')
  console.log(shorTing); 
  
  return (
    <div className="container mx-auto my-5">
      <div className="flex justify-center mb-10">
        <div className="dropdown dropdown-bottom">
          <div tabIndex={0} role="button" className="btn btn-primary m-1">
            Sort By: {shorTing || "Select"}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[10] w-52 p-2 shadow-xl"
          >
            <li onClick={() => setShortion("pages")}>
              <a>Pages</a>
            </li>
            <li onClick={() => setShortion("rating")}>
              <a>Rating</a>
            </li>
          </ul>
        </div>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read List </Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <ReadListCard shorTing={shorTing} />
        </TabPanel>
        <TabPanel>
          <WishLIst shorTing={shorTing} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
