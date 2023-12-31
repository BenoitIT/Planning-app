import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  setBardModal,
  setCupboardModal,
  setImportDocumentModal,
  setRayonModal,
  setShowActions,
} from '../../redux/reducers/rankingSlice';

const Actions = ({ list }) => {
  const dispatch = useDispatch();

  return (
    <div className="p-3 w-[170px] bg-white rounded shadow-md">
      {list.map((name, i) => (
        <p
          key={i}
          className="text-sm text-slate-600 px-1 py-1 hover:bg-slate-100 hover:cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            switch (name) {
              case 'New Rayon':
                dispatch(setRayonModal('New Rayon'));
                break;
              case 'New Cupboard':
                dispatch(setCupboardModal(true));
                break;
              case 'New Bard':
                dispatch(setBardModal('New Bard'));
                break;
              case 'New Document':
                dispatch(setImportDocumentModal('New Import Document'));
                break;
              default:
                break;
            }
          dispatch(setShowActions(false));
          }}
        >
          {name}
        </p>
      ))}
    </div>
  );
};

Actions.propTypes = {
  list: PropTypes.array.isRequired,
  setRank: PropTypes.func.isRequired,
};

export default Actions;
