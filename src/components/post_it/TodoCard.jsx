// eslint-disable-next-line no-unused-vars
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
function TodoCard({
  title,
  tasks,
  handleMinimize,
  isMinimized,
  draggable,
  handleDraggover,
  isDragging,
  onDragStart,
  onDrop
}) {
  return (
    <div
      className={`${
        isMinimized ? "w-12 h-auto" : "w-full"
      } bg-lightergray rounded shadow-sm opacity-90 pb-2`}
      onDragOver={handleDraggover}
    >
      <div
        className={`flex  pt-3 px-2 ${
          isMinimized ? "flex-col-reverse" : "flex-row justify-between"
        }`}
      >
        <h6
          className={`${
            isMinimized ? "rotate-90 origin-top-left ml-7" : "rotate-0"
          } text-base`}
        >
          <span>{title} </span>
          <span
            className={`${isMinimized ? "hidden" : "ml-2 text-sm opacity-50"}`}
          >
            - {tasks.length} articles
          </span>
        </h6>
        <span
          className={`rounded-full hover:bg-lightgray py-1 px-3 hover:cursor-pointer text-bold opacity-70 ${
            isMinimized ? "rotate-0 bg-lightgray mb-6" : "rotate-180"
          }`}
          onClick={handleMinimize}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </span>
      </div>
      <div
        className={`mt-4 px-2 flex flex-col space-y-2 min-h-full ${
          isDragging ? "border border-black border-dashed" : "border-none"
        }`}
        onDragOver={handleDraggover}
        onDrop={(e)=>onDrop(e,title)}
      >
        {tasks?.map((task) => (
          <div
            className={`${
              isMinimized ? "hidden" : "p-2"
            } bg-white rounded flex flex-col space-y-2 hover:cursor-move`}
            key={task?.id}
            id={task?.id}
            draggable={draggable}
            onDragStart={(e)=>onDragStart(e,title)}
          >
            <p>{task?.name}</p>
            <p className="text-sm opacity-70">{task?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
TodoCard.propTypes = {
  title: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes,
    })
  ).isRequired,
  handleMinimize: PropTypes.func.isRequired,
  isMinimized: PropTypes.bool.isRequired,
  draggable: PropTypes.bool.isRequired,
  handleDraggover: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  onDragStart:PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired
};

export default TodoCard;
