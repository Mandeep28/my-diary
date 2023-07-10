import { createContext, useContext, useState } from "react";
import data from "./data";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [allNotes, setAllNotes] = useState(null);

  const [favNotes, setFavNotes] = useState([]);

  const [trashbinNotes, setTrashbinNotes] = useState(null);

  // for home , fav (common)
  // add to fav
  const addToFav = (id) => {
    console.log(typeof id);
    //  client side change
    let filterData = allNotes.map((item) => {
      if (item.id === id) {
        item.fav = true;
      }
      return item;
    });
    setAllNotes(filterData);
    console.log("from context api (add to fav) ", filterData);

    // server side changes (todo ...)
  };

  // add to trash bin
  const addToTrashBin = (id) => {
    console.log(typeof id);
    //  client side change
    let filterData = allNotes.filter((item) => item.id !== id)
    setAllNotes(filterData);

    console.log("from context api( add to trashbin)", filterData);

    // server side changes (todo ...)

  };




  // trash bin
  // delete forever
  // restore

  return (
    <AppContext.Provider
      value={{
        allNotes,
        setAllNotes,
        favNotes,
        setFavNotes,
        trashbinNotes,
        setTrashbinNotes,
        addToFav,
        addToTrashBin
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const AppState = () => {
  return useContext(AppContext);
};
export default AppProvider;
