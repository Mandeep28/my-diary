import { useEffect } from "react";
import { AppState } from "../../utils/Context";
import NoteContainer from "../utils/NoteContainer";

const TrashBin = () => {
  const { trashbinNotes, setTrashbinNotes } = AppState();
  useEffect(()=>{
    setTimeout(() => {
      setTrashbinNotes([])
      
    }, 3000);
  })

  return (
    <>
      <NoteContainer title={"Trash Bin"} data={trashbinNotes} />
    </>
  );
};

export default TrashBin;
