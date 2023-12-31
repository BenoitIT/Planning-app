import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Button from '../../components/inputs/Button';
import { faTable } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useLazyListRayonsQuery } from '../../redux/api/apiSlice';
import { setCupboard, setRayonsList } from '../../redux/reducers/rankingSlice';
import moment from 'moment';
import { Table } from 'antd';
import Loading from '../../components/inputs/Loading';
import { useNavigate, useParams } from 'react-router-dom';

const RayonsTable = () => {
  const dispatch = useDispatch();

  const { cupboard } = useSelector((state) => state.ranking);

  const navigate = useNavigate();

  const { cupboardId } = useParams();

  /**
   * GET LOGGEDIN USER AND CUPBOARDS FROM STATE
   */

  const { rayons } = useSelector((state) => state.ranking);

  /**
   * FETCH CUPBOARDS FROM API
   */

  const [
    listRayons,
    {
      data: rayonsData,
      isLoading: rayonsIsLoading,
      isSuccess: rayonsIsSuccess,
    },
  ] = useLazyListRayonsQuery();

  useEffect(() => {
    listRayons({
      cupboardId,
    });
  }, [listRayons, cupboardId]);

  useEffect(() => {
    if (rayonsIsSuccess) {
      dispatch(setRayonsList(rayonsData?.data?.rayons || []));
      dispatch(setCupboard(rayonsData?.data?.cupboard || {}));
    }
  }, [rayonsData, rayonsIsSuccess, dispatch]);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'key',
      render: (text, record) => (
        <Button
          onClick={(e) => {
            e.preventDefault();
            navigate(`rayon/${record.key}`);
          }}
          value={
            <span className="flex items-center gap-2">
              <FontAwesomeIcon icon={faTable} className="opacity-80" /> {text}
            </span>
          }
        />
      ),
    },
    { title: 'Size', dataIndex: 'bardCount', key: 'key' },
    { title: 'Added', dataIndex: 'createdAt', key: 'key' },
    { title: 'Charge', dataIndex: 'updatedAt', key: 'key' },
    {
      title: 'Details',
      dataIndex: 'Details',
      key: 'key',
      render: () => <Button value="Plus" />,
    },
  ];

  return (
    <div className="flex flex-col gap-4 mt-3 w-[90%] mx-auto p-2 h-[85vh] bg-white pt-4 md:p-5 max-h-[85vh] overflow-auto rounded-2xl relative xs:w-full xs:mx-1 md:mx-4">
      <h3 className="font-bold text-lg">{cupboard?.name}</h3>
      {rayonsIsLoading ? (
        <main className="min-h-[50vh] w-full flex items-center justify-center">
          <Loading />
        </main>
      ) : (
        <Table
          dataSource={rayons.map((rayon) => {
            return {
              key: rayon.id,
              name: rayon.name,
              bardCount: `${rayon.bardCount} element(s)`,
              createdAt: moment(rayon.createdAt).format('DD/MM/YYYY'),
              updatedAt: moment(rayon.updatedAt).format('DD/MM/YYYY'),
            };
          })}
          pagination={true}
          columns={columns}
        ></Table>
      )}
    </div>
  );
};

export default RayonsTable;
