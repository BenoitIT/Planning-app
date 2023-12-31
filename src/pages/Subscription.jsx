/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { CheckCircleOutlined } from "@ant-design/icons";
import Layout from "../layouts/Dashboard";
const Subscription = () => {
  const [allowPayement, setAllowPayement] = useState(false);
  return (
    <Layout>
      <div className=" bg-slate-200 p-2 pr-6 h-screen">
        <div className="mt-3   bg-white min-h-[85vh] overflow-auto rounded-3xl relative xs:w-full xs:mx-1 md: w-full">
          <div className="w-full grid desktop:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 p-8 h-full">
            <div className="mb-6 lg:mb-0 h-fit">
              <div className="ml-2 py-6">
                <strong className="text-3xl font-bold ">
                  Module subscription
                </strong>
              </div>
              <div className="block h-full rounded-lg p-6 border border-slate-200 bg-white shadow relative">
                <div className="h-full rounded-lg border border-slate-200 bg-white shadow mb-4">
                  <div className="p-3">
                    <div
                      className={
                        allowPayement
                          ? "mb-4 text-sm  flex gap-12"
                          : "mb-4 text-sm"
                      }
                    >
                      {allowPayement && (
                        <span className="text-4xl bg-transparent text-primary border-2 border-white rounded-full">
                          {" "}
                          <CheckCircleOutlined />
                        </span>
                      )}
                      <strong className="flex justify-center py-2 px-4 shadow-sm text-sm">
                        Organisation
                      </strong>
                    </div>
                  </div>
                  <div className="py-2 px-8 text-xs">
                    <ol className="list-inside">
                      <li className="mb-4 flex">
                        <span className="text-primary mr-4">
                          <FontAwesomeIcon icon={faHandPointRight} />
                        </span>
                        Gestion De Courriers
                      </li>
                      <li className="mb-4 flex">
                        <span className="text-primary mr-4">
                          <FontAwesomeIcon icon={faHandPointRight} />
                        </span>
                        Gestion Des Notes Et Post Its
                      </li>
                      <li className="mb-4 flex">
                        <span className="text-primary mr-4">
                          <FontAwesomeIcon icon={faHandPointRight} />
                        </span>
                        Gestion Des Plannings Et Events
                      </li>
                      <li className="mb-4 flex">
                        <span className="text-primary mr-4">
                          <FontAwesomeIcon icon={faHandPointRight} />
                        </span>
                        Gestion Des Cooordonees
                      </li>
                      <li className="mb-4 flex">
                        <span className="text-primary mr-4">
                          <FontAwesomeIcon icon={faHandPointRight} />
                        </span>
                        Gestion D'horaire
                      </li>
                      <li className="mb-4 flex">
                        <span className="text-primary mr-4">
                          <FontAwesomeIcon icon={faHandPointRight} />
                        </span>
                        Archivage Des Documents
                      </li>
                    </ol>
                  </div>
                  <div className="flex justify-center flex-col gap-3 pb-6 px-4">
                    <strong className="text-center text-3xl -rotate-6">
                      45 €
                    </strong>
                    <p className="text-center text-slate-500 font-light">
                      vous facilite l'organisation de votre travail
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 -right-2">
                  <div className="relative w-fit">
                    <div className="bg-violet-500 text-white w-fit px-4 rounded-md rounded-br-none">
                      <span>1 année</span>
                    </div>
                    <div className="bg-violet-700 h-2 w-2 rounded-br-full absolute right-0"></div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setAllowPayement(!allowPayement)}
                  className={`w-full mt-16 rounded border border-slate-300 px-6  py-2 text-sm font-semibold  leading-normal focus:outline-primary ${
                    allowPayement ? "bg-primary text-white" : "text-primary"
                  } text-primary transition duration-150 ease-in-out flex justify-center space-x-2`}
                >
                  {allowPayement && (
                    <span className="text-xl bg-transparent text-white  rounded-full">
                      {" "}
                      <CheckCircleOutlined />
                    </span>
                  )}
                  <span className="mt-1">
                    {allowPayement ? "Annuler" : "Sélectionner"}
                  </span>
                </button>
              </div>
            </div>
          </div>
          {allowPayement && (
            <div className="w-full">
              <button
                type="button"
                className="absolute bottom-6 right-8 w-[300px] rounded-lg border bg-primary border-slate-300 px-6  py-2 text-sm font-semibold  leading-normal text-white transition duration-150 ease-in-out flex justify-center"
              >
                Pay 45 €
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Subscription;
