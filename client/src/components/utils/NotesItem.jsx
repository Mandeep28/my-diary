import { useEffect, useState } from "react";
import { IoScan } from "react-icons/io5";
import { HiPencil } from "react-icons/hi";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { AppState } from "../../utils/Context";

const NotesItem = ({ data, setPreviewData , type }) => {

  const { addToFav, addToTrashBin } = AppState();


  const handleStarClick = (e) => {
    const noteId = e.target.parentElement.parentElement.dataset.id;
    console.log(noteId);

    addToFav(parseInt(noteId));
  };
  // ---------------- handle preview button ----------------------
  const handlePreview = () => {
    setPreviewData(data);
    console.log(data.id);
  };

  // ------------------ handle trash bin click ----------------------
  const handleTrashBinClick = (e) => {
    const noteId = e.target.parentElement.parentElement.parentElement.dataset.id;
    console.log(noteId);
    console.log(typeof noteId);
    addToTrashBin(parseInt(noteId));
  };

  return (
    <div
      data-id={data?.id}
      className={`card  ${
        data?.colorMode === "dark"
          ? "text-bg-dark"
          : `bg-${data.colorMode}-subtle`
      } shadow shadow-md col mx-3 mb-4`}
      style={{ width: "18rem" }}
    >
      <div className="card-header fs-5 text-end " style={{ border: "none" }}>
        {
          type!=='trashbin' ?
          <>
  <IoScan
          className="mx-1 cursor-pointer grow-1"
          onClick={handlePreview}
          data-bs-toggle="modal"
          data-bs-target="#previewModal"
        />
        {(data.fav )? (
          <AiFillStar
            className="mx-1 cursor-pointer grow-1 text-warning"
            // onClick={handleStarClick}
          />
        ) : (
          <AiOutlineStar
            className="mx-1 cursor-pointer grow-1"
            onClick={handleStarClick}
          />
        )}
        <Link
          to="/dashboard/editnote"
          className={`text-${data?.colorMode === "dark" ? "light" : "dark"}`}
        >
          <HiPencil className="mx-1 cursor-pointer grow-1" />
        </Link>
          </>
          :
          <MdDelete
          className="mx-1 cursor-pointer grow-1"
          onClick={handleTrashBinClick}
        />

        }


      
        
      </div>
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">
          {data?.description.slice(0, 100)}
          {data?.description.length > 100 ? " ...." : ""}
        </p>
        <p
          className="card-text card-footer"
          style={{
            borderTop: `1px solid ${
              data?.colorMode === "dark" ? "#6c6c6c" : "rgb(0 0 0 /30%)"
            }`,
          }}
        >
          <small
            className={`text-body-${
              data?.colorMode === "dark" ? "white" : "secondary"
            }`}
          >
            Last updated 3 mins ago
          </small>
        </p>
      </div>
    </div>
  );
};

export default NotesItem;
