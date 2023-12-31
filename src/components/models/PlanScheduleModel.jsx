import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dayjs from "dayjs";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useDispatch,useSelector } from "react-redux";
import { DatePicker, TimePicker, Button } from "antd";
import { Modal } from "antd";
import { handleAddMoreEventInfo } from "../../redux/reducers/calendarReducer";
import CheckBox from "../utlities/checkbox";

const PlanCategories = () => {
  return (
    <div className="w-full bg-white shadow-md px-2 text-slate-600 z-50">
      <div className="py-1 hover:bg-slate-100 hover:cursor-pointer px-3">
        sabine
      </div>
      <div className="py-1 hover:bg-slate-100 hover:cursor-pointer px-3">
        urgent
      </div>
      <div className="py-1 hover:bg-slate-100 hover:cursor-pointer px-3">
        quadrants
      </div>
      <div className="py-1 hover:bg-slate-100 hover:cursor-pointer px-3">
        Boss agenda
      </div>
    </div>
  );
};

const SavePlanSchedule = () => {
  const dispatch=useDispatch();
  const [PriorityFocused, setPriorityFocused] = React.useState(false);
  const [TiltleFocused, setTitleFocused] = useState(false);
  const [EmplacementFocused, setEmplacementFocused] = useState(false);
  const [startFocused, setStartFocused] = useState(false);
  const [startFinish, setFinishFocused] = useState(false);
  const [repeaterFocused, setRepeaterFocused] = useState(false);
  const [DescriptionFocused, setDescriptionFocused] = useState(false);
  const [lastFocused, setLastFocused] = useState(false);
  const [lastInFocus, setLastInFocus] = useState(false);
  const [isDayChecked, setIsDayChecked] = useState(true);
  const [isHoraireChecked, setIsHoraireChecked] = useState(false);
  const [StartDate, setStartDate] = useState();
  const [finishDate, setfinishDate] = useState();
  const openModel=useSelector(state=>state.currentMonthIndex.addMoreEventInfo);
  const format = "HH:mm";
  const onChangeStartDate = (value, dateString) => {
    setStartDate(dateString);
  };
  const onChangeFinishDate = (value, dateString) => {
    setfinishDate(dateString);
  };

  const handleDayCheck=()=>{
    setIsDayChecked(!isDayChecked);
  }
  const handleHoraireCheck=()=>{
    setIsHoraireChecked(!isHoraireChecked);
  }
  return (
    <div>
      <Modal
        title="New Event Schedule"
        open={openModel}
        onCancel={()=>dispatch(handleAddMoreEventInfo(false))}
        className="relative mt-[10vh] rounded-none"
        footer={null}
      >
        <div className="min-h-[420px] flex flex-col w-full mx-auto">
          <div
            className={`flex flex-col border-b w-full gap-1 mt-4 ${
              PriorityFocused ? "border-green-800" : "border-slate-400"
            }  relative`}
          >
            <label
              className={`text-xs ${
                PriorityFocused ? "text-green-700" : "text-slate-500"
              }`}
            >
              Priority
            </label>
            <div className="flex justify-between w-full mb-1">
              <input
                type="text"
                onFocus={() => setPriorityFocused(true)}
                onBlur={() => setPriorityFocused(false)}
                value="sabine"
                className="outline-none w-full"
              />
              <span
                className={`${
                  PriorityFocused ? "rotate-180 duration-200" : "rotate-0"
                } text-slate-500 mr-1`}
              >
                <FontAwesomeIcon icon={faCaretDown} />
              </span>
            </div>
            <div
              className={`absolute top-12 w-full ${
                PriorityFocused ? "block" : "hidden"
              }`}
            >
              <PlanCategories />
            </div>
          </div>

          <div className="flex flex-row gap-2 w-full">
            <div
              className={`flex flex-col border-b w-full gap-1 mt-4 ${
                TiltleFocused ? "border-green-800" : "border-slate-400"
              }`}
            >
              <label
                className={`text-xs ${
                  TiltleFocused ? "text-green-700" : "text-slate-500"
                }`}
              >
                Title
              </label>
              <div className="flex justify-between w-full mb-1">
                <input
                  type="text"
                  onFocus={() => setTitleFocused(true)}
                  onBlur={() => setTitleFocused(false)}
                  className="outline-none w-full"
                />
              </div>
            </div>
            <div
              className={`flex flex-col border-b w-full gap-1 mt-4 ${
                EmplacementFocused ? "border-green-800" : "border-slate-400"
              }`}
            >
              <label
                className={`text-xs ${
                  EmplacementFocused ? "text-green-700" : "text-slate-500"
                }`}
              >
                Emplacement
              </label>
              <div className="flex justify-between w-full mb-1">
                <input
                  type="text"
                  onFocus={() => setEmplacementFocused(true)}
                  onBlur={() => setEmplacementFocused(false)}
                  value=""
                  className="outline-none w-full"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-4 w-full">
            <div
              className={`flex flex-col border-b w-full gap-1 mt-4 ${
                startFocused ? "border-green-800" : "border-slate-400"
              }`}
            >
              <label
                className={`text-xs ${
                  startFocused ? "text-green-700" : "text-slate-500"
                }`}
              >
                Start
              </label>
              <div className="flex justify-between w-full mb-1">
                <input
                  type="text"
                  onFocus={() => setStartFocused(true)}
                  onBlur={() => setStartFocused(false)}
                  value={StartDate}
                  className="outline-none w-full"
                />
                <div className="flex flex-row">
                  <DatePicker
                    onChange={onChangeStartDate}
                    placeholder={null}
                    value=""
                    className="border-none outline-none w-10"
                  />
                  <TimePicker
                    defaultValue={dayjs("", format)}
                    placeholder={null}
                    format={format}
                    className={isDayChecked?"border-none outline-none w-1 -ml-2 focus:outline-none":"hidden"}
                  />
                </div>
              </div>
            </div>
            <div
              className={`flex flex-col border-b w-full gap-1 mt-4 ${
                startFinish ? "border-green-800" : "border-slate-400"
              }`}
            >
              <label
                className={`text-xs ${
                  startFinish ? "text-green-700" : "text-slate-500"
                }`}
              >
                Finish
              </label>
              <div className="flex justify-between w-full mb-1">
                <input
                  type="text"
                  onFocus={() => setFinishFocused(true)}
                  onBlur={() => setFinishFocused(false)}
                  value={finishDate}
                  className="outline-none w-full"
                />
                <div className="flex flex-row">
                  <DatePicker
                    onChange={ onChangeFinishDate}
                    placeholder={null}
                    value=""
                    className="border-none outline-none w-10"
                  />
                  <TimePicker
                    defaultValue={dayjs("", format)}
                    placeholder={null}
                    format={format}
                    className={isDayChecked?"border-none outline-none w-1 -ml-2 focus:outline-none":"hidden"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <div className="flex">
              <CheckBox
                checked={isDayChecked}
                onChange={handleDayCheck}
              />
              <p className="mt-2 text-sm">Toute la journee</p>
            </div>
            <div className={isDayChecked?"flex":"hidden"}>
              <CheckBox
                checked={isHoraireChecked}
                onChange={handleHoraireCheck}
              />
              <p className="mt-2 text-sm">Fouseou horaire</p>
            </div>
          </div>
          <div className={isHoraireChecked?"flex flex-row gap-3":"hidden"}>
            <div
              className={`flex flex-col border-b w-full gap-1 mt-4 ${
                lastInFocus ? "border-green-800" : "border-slate-400"
              }  relative`}
            >
              <label
                className={`text-xs ${
                  lastInFocus ? "text-green-700" : "text-slate-500"
                }`}
              >
                Demarrer le fousseu horaire
              </label>
              <div className="flex justify-between w-full mb-1">
                <input
                  type="text"
                  onFocus={() => setLastInFocus(true)}
                  onBlur={() => setLastInFocus(false)}
                  value="Africa/Kigali"
                  className="outline-none w-full"
                />
                <span
                  className={`${
                    PriorityFocused ? "rotate-180 duration-200" : "rotate-0"
                  } text-slate-500 mr-1`}
                >
                  <FontAwesomeIcon icon={faCaretDown} />
                </span>
              </div>
            </div>
            <div
              className={`flex flex-col border-b w-full gap-1 mt-4 ${
                lastFocused ? "border-green-800" : "border-slate-400"
              }  relative`}
            >
              <label
                className={`text-xs ${
                  lastFocused ? "text-green-700" : "text-slate-500"
                }`}
              >
                Fin du fuseau horaire
              </label>
              <div className="flex justify-between w-full mb-1">
                <input
                  type="text"
                  onFocus={() => setLastFocused(true)}
                  onBlur={() => setLastFocused(false)}
                  value="Africa/Kigali"
                  className="outline-none w-full"
                />
                <span
                  className={`${
                    PriorityFocused ? "rotate-180 duration-200" : "rotate-0"
                  } text-slate-500 mr-1`}
                >
                  <FontAwesomeIcon icon={faCaretDown} />
                </span>
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col border-b w-3/4 gap-1 mt-4 ${
              repeaterFocused ? "border-green-800" : "border-slate-400"
            }  relative`}
          >
            <label
              className={`text-xs ${
                repeaterFocused ? "text-green-700" : "text-slate-500"
              }`}
            >
              Repeter
            </label>
            <div className="flex justify-between w-full mb-1">
              <input
                type="text"
                onFocus={() => setRepeaterFocused(true)}
                onBlur={() => setRepeaterFocused(false)}
                value="Jamais"
                className="outline-none w-full"
              />
              <span
                className={`${
                  repeaterFocused ? "rotate-180 duration-200" : "rotate-0"
                } text-slate-500 mr-1`}
              >
                <FontAwesomeIcon icon={faCaretDown} />
              </span>
            </div>
          </div>
          <div className="w-full flex flex-col mt-3">
            <label
              className={`text-xs ${
                DescriptionFocused ? "text-green-700" : "text-slate-500"
              }`}
            >
              Descriptive
            </label>
            <textarea
              rows={3}
              className={`w-full border-b outline-none ${
                DescriptionFocused ? "border-green-700" : "border-slate-400"
              }`}
              onFocus={() => setDescriptionFocused(true)}
              onBlur={() => setDescriptionFocused(false)}
            ></textarea>
          </div>
          <div className="flex flex-row justify-between mt-5">
            <Button
              type="button"
              className="uppercase text-sm font-medium hover:bg-slate-100 px-2"
              onClick={()=>dispatch(handleAddMoreEventInfo(false))}
            >
              Suppreme
            </Button>
            <div className="flex flex-row justify-between">
              <Button
                type="button"
                className="uppercase text-sm font-medium hover:bg-green-100 px-2 text-green-600"
              >
                Souvegarder
              </Button>
              <Button
                type="button"
                className="uppercase text-sm font-medium hover:bg-slate-100 px-2"
              >
                Annuler
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SavePlanSchedule;
