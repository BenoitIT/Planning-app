import React from 'react';
import Layout from '../layouts/Dashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Actions from '../components/models/RankActions';
import { Button } from 'antd';
import { actions } from '../components/data/data';
import {
  faMagnifyingGlass,
  faCaretDown,
  faCaretUp,
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import AddCupboard from '../components/models/AddCupboard';
import { setShowActions } from '../redux/reducers/rankingSlice';
import BardsTable from '../containers/ranking/BardsTable';
import AddBard from '../components/models/AddBard';

const RankingBards = () => {
  /**
   * GET LOGGEDIN USER AND CUPBOARDS FROM STATE
   */

  const dispatch = useDispatch();

  /**
   * RANKS MODALS
   */

  const { bardModal, showActions, rayon } = useSelector((state) => state.ranking);

  return (
    <Layout>
      <div className="w-full bg-slate-200 p-2 h-screen">
        <div className="my-3 flex flex-row justify-between xs:mx-1 md:mx-4">
          <div className="relative w-[15rem]">
            <input
              type="text"
              className="block p-2.5 pr-10 w-full outline-none z-20 text-sm text-gray-900 rounded-lg border-l-gray-50"
              placeholder="Research..."
              required
            />
            <button
              type="submit"
              className="absolute top-0 right-0 h-full p-2.5 px-4 text-sm font-medium text-white rounded-r-lg outline-none bg-primary"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
          <div className="relative">
            <Button
              type="button"
              className="bg-primary hover:bg-primary-900 duration-700 text-white py-4 px-4 rounded flex items-center justify-center"
              onClick={(e) => {
                e.preventDefault();
                dispatch(setShowActions(!showActions));
              }}
            >
              <span className="text-sm">New</span>
              <span className="ml-2">
                <FontAwesomeIcon icon={showActions ? faCaretUp : faCaretDown} />
              </span>
            </Button>
            <div
              className={
                showActions ? 'absolute top-9 -left-20 z-10 w-full' : 'hidden'
              }
            >
              <Actions
                list={actions?.filter((action) =>
                  ['New Bard', 'Import Document']?.includes(action)
                )}
              />
            </div>
          </div>
        </div>
        <BardsTable />
        <div className={`${bardModal ? 'flex' : 'hidden'}`}>
          <AddBard isOpen={bardModal} rayon={rayon} />
        </div>
      </div>
    </Layout>
  );
};

export default RankingBards;
