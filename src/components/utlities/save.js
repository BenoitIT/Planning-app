const saveRank = (
  setCupboard,
  newRank,
  actionName,
  newRayon,
  setNewRayon,
  setBoard,
  newBoard
) => {
  if (actionName === "New cupboard") {
    setCupboard(newRank);
  } else if (actionName === "New Rayon") {
    setNewRayon(newRayon);
  } else if (actionName === "New Bard") {
    setBoard(newBoard);
  } else {
    return;
  }
};
export default saveRank;
