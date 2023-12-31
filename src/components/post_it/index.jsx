import React, { useState } from "react";
import { Button } from "antd";
import TodoCard from "./TodoCard";
import AddPostItModel from "../models/AddPostIt";
function MyPostIts() {
  const tasks = [
    {
      id: 1,
      name: "add posts",
      description:
        "This involves writing the content for a new post and making it accessible to the audience.",
    },
    {
      id: 3,
      name: "delete a posts",
      description:
        "This action permanently deletes the post and makes it inaccessible to the public",
    },
    {
      id: 4,
      name: "remove a posts",
      description:
        "Unlike deleting, this action might allow for the possibility of restoring the post later",
    },
    {
      id: 5,
      name: "share a posts",
      description:
        "This involves promoting a post to increase its visibility among the public or specific groups",
    },
  ];
  const [minimizeTodoCard, setMinimizeTodoCard] = React.useState(false);
  const [minimizeOnProgressCard, setMinimizeOnProgressCard] = useState(false);
  const [minimizeCompletedCard, setMinimizeCompletedCard] = useState(false);
  const [isTodoDragging, setIsTodoDragging] = useState(false);
  const [isOnProgressDragging, setOnPregressDragging] = useState(false);
  const [isOnCompletedDragging, setOnCompletedDragging] = useState(false);
  const [InTodoList, setInTodoList] = useState(tasks);
  const [isDroppedFrom, setDroppedFrom] = useState("");
  const [isDroppedFromEvent, setDroppedFromEvent] = useState();
  const [inProgressList, setInProgressList] = useState([{
    id: 2,
    name: "update a posts",
    description:
      "This task involves making changes to the content or details of a post that has already been published",
  }]);
  const [inCompletedList, setInCompletedList] = useState([
    {
      id: 4,
      name: "find workplaces",
      description:
        "action might allow for the possibility of physical works",
    },
  ]);
  const [OpenPostItModel, setOpenPostIt] = useState(false);
  const [recordStarted, setRecordStarted] = useState(false);
  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [progressInput, setProgressInput] = useState("");
  const [displaySuccessMessage, setDisplaySuccessMessage] = useState(false);
  const minimizeTodoCardHandler = () => {
    setMinimizeTodoCard(!minimizeTodoCard);
    setMinimizeOnProgressCard(minimizeOnProgressCard);
  };
  const minimizeOnProgressCardHandler = () => {
    setMinimizeOnProgressCard(!minimizeOnProgressCard);
    setMinimizeCompletedCard(minimizeCompletedCard);
  };
  const minimizeCompletedCardHandler = () => {
    setMinimizeCompletedCard(!minimizeCompletedCard);
    setMinimizeTodoCard(minimizeTodoCard);
  };
  const handleOnProgressDraggover = (e) => {
    e.preventDefault();
    setOnPregressDragging(true);
  };
  const handleCompletedDraggover = (e) => {
    e.preventDefault();
    setOnCompletedDragging(true);
  };
  const handleTodoDraggover = (e) => {
    e.preventDefault();
    setIsTodoDragging(true);
  };
  const handleOnProgressDragStart = (e, target) => {
    e.dataTransfer.setData("id", e.currentTarget.id);
    setDroppedFrom(target);
    setDroppedFromEvent(e.currentTarget.id);
  };
  //remove dragged item from the origin list
  const RemoveDropItem = (target, taskId) => {
    if (target === "progress") {
      const unDroppedProgressTask = inProgressList.filter(
        (tsk) => tsk.id != taskId
      );
      setInProgressList(unDroppedProgressTask);
    } else if (target === "completed") {
      const unDroppedCompletedTask = inCompletedList.filter(
        (tsk) => tsk.id != taskId
      );
      setInCompletedList(unDroppedCompletedTask);
    } else if (target === "todos") {
      const unDroppedTodoList = InTodoList.filter((tsk) => tsk.id != taskId);
      setInTodoList(unDroppedTodoList);
    } else {
      return;
    }
  };
  //drop the task function
  const handleDrop = (e, target) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("id");
    const task = tasks.find((tsk) => tsk.id == id);
    if (task && target === "progress") {
      setInProgressList([...inProgressList, task]);
      setIsTodoDragging(false);
      setOnPregressDragging(false);
      setOnCompletedDragging(false);
      RemoveDropItem(isDroppedFrom, isDroppedFromEvent);
    } else if (task && target === "completed") {
      setInCompletedList([...inCompletedList, task]);
      setIsTodoDragging(false);
      setOnPregressDragging(false);
      setOnCompletedDragging(false);
      RemoveDropItem(isDroppedFrom, isDroppedFromEvent);
    } else {
      setInTodoList([...InTodoList, task]);
      setIsTodoDragging(false);
      setOnPregressDragging(false);
      setOnCompletedDragging(false);
      RemoveDropItem(isDroppedFrom, isDroppedFromEvent);
    }
  };

  const handleOpenPostItModel = () => {
    setOpenPostIt(true);
  };
  const handleClosePostItModel = () => {
    setOpenPostIt(false);
  };

  const handleVoiceRecord = () => {
    setRecordStarted(!recordStarted);
  };
  //task input recieption
  const handeTitleInput = (e) => {
    setTitleInput(e.target.value);
  };
  const handeDescriptionInput = (e) => {
    setDescriptionInput(e.target.value);
  };
  const handesetProgressInput = (e) => {
    setProgressInput(e.target.value);
  };

  //handle Task record
  const saveRecordTask = () => {
    const newPlan = {
      id: Math.floor(Math.random() * 20 + 1),
      name: titleInput,
      description: descriptionInput,
    };
    if (progressInput === "completed") {
      setInCompletedList([...inCompletedList, newPlan]);
    } else if (progressInput === "progress") {
      setInProgressList([...inProgressList, newPlan]);
    } else {
      setInTodoList([...InTodoList, newPlan]);
    }
    setTimeout(() => {
      handleClosePostItModel();
      setDisplaySuccessMessage(true);
    }, 2000);
    setTimeout(() => {
      setDisplaySuccessMessage(false);
    }, 4000);
  };
  return (
    <div className="mt-2 h-full max-h-[75%] relative">
      <div className="flex flex-col lg:flex-row justify-start lg:justify-between m-3">
        <h2 className="text-2xl font-bold">My post-its</h2>
        <Button
          type="button"
          className="bg-primary hover:bg-primary-900 duration-700 text-white py-4  px-8 rounded flex items-center justify-center"
          onClick={handleOpenPostItModel}
        >
          New post it
        </Button>
      </div>
      <div className="flex flex-row space-x-2 mx-3 pr-6 my-8 w-full">
        <TodoCard
          title="todos"
          tasks={InTodoList}
          handleMinimize={minimizeTodoCardHandler}
          isMinimized={minimizeTodoCard}
          draggable={true}
          handleDraggover={handleTodoDraggover}
          isDragging={isTodoDragging}
          onDragStart={handleOnProgressDragStart}
          onDrop={handleDrop}
        />
        <TodoCard
          title="progress"
          tasks={inProgressList}
          handleMinimize={minimizeOnProgressCardHandler}
          isMinimized={minimizeOnProgressCard}
          draggable={true}
          handleDraggover={handleOnProgressDraggover}
          isDragging={isOnProgressDragging}
          onDragStart={handleOnProgressDragStart}
          onDrop={handleDrop}
        />
        <TodoCard
          title="completed"
          tasks={inCompletedList}
          handleMinimize={minimizeCompletedCardHandler}
          isMinimized={minimizeCompletedCard}
          draggable={true}
          handleDraggover={handleCompletedDraggover}
          isDragging={isOnCompletedDragging}
          onDragStart={handleOnProgressDragStart}
          onDrop={handleDrop}
        />
      </div>
      {OpenPostItModel && (
        <AddPostItModel
        ModalHeader="Add post it"
          onClose={handleClosePostItModel}
          isRecording={recordStarted}
          handleRecording={handleVoiceRecord}
          grabTitle={handeTitleInput}
          grabDescription={handeDescriptionInput}
          grabProcess={handesetProgressInput}
          title={titleInput}
          description={descriptionInput}
          process={progressInput}
          saveRecordTask={saveRecordTask}
          chooseProgress={true}
        />
      )}
      <div className={`${displaySuccessMessage?"absolute top-1 z-10 left-1/3 flex items-center bg-white text-primary text-sm font-bold p-2 px-4  rounded-lg shadow-md w-fit":"hidden"}`}>
        <p>Note created successfully</p>
      </div>
    </div>
  );
}

export default MyPostIts;
