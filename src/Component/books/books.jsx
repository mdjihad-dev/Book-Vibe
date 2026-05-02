import React, { useContext } from "react";
import { BookContext } from "../context/Context";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Books = () => {
  const { storedBook, wishList } = useContext(BookContext);
  console.log(storedBook);
  return (
    <div className="flex gap-4 my-5">
      <Tabs>
        <TabList>
          <Tab>Stored Book</Tab>
          <Tab>Wish Lish</Tab>
        </TabList>

        <TabPanel>
          <h2>WishList {storedBook.length}</h2>
        </TabPanel>
        <TabPanel>
          <h2>WishList {wishList.length}</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
