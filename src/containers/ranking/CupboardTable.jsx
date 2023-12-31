import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import Button from '../../components/inputs/Button';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useLazyListCupboardsQuery } from '../../redux/api/apiSlice';
import { setCupboardsList } from '../../redux/reducers/rankingSlice';
import moment from 'moment';
import { Table } from 'antd';
import Loading from '../../components/inputs/Loading';
import { useNavigate } from 'react-router-dom';

const CupboardTable = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  /**
   * GET LOGGEDIN USER AND CUPBOARDS FROM STATE
   */

  const { user } = useSelector((state) => state.user);
  const { cupboards } = useSelector((state) => state.ranking);

  /**
   * FETCH CUPBOARDS FROM API
   */

  const [
    listCupboards,
    {
      data: cupboardsData,
      isLoading: cupboardsIsLoading,
      isSuccess: cupboardsIsSuccess,
    },
  ] = useLazyListCupboardsQuery();

  useEffect(() => {
    listCupboards({
      organizationId: user.organizationId,
    });
  }, [listCupboards, user.organizationId]);

  useEffect(() => {
    if (cupboardsIsSuccess) {
      dispatch(setCupboardsList(cupboardsData?.data || []));
    }
  }, [cupboardsData, cupboardsIsSuccess, dispatch]);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'key',
      render: (text, record) => (
        <Button
          onClick={(e) => {
            e.preventDefault();
            navigate(`cupboard/${record.key}`)
          }}
          value={
            <span className="flex items-center gap-2">
              <FontAwesomeIcon icon={faServer} className="opacity-80" /> {text}
            </span>
          }
        />
      ),
    },
    { title: 'Size', dataIndex: 'rayonCount', key: 'key' },
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
    <div className="mt-3 w-[90%] mx-auto p-2 h-[85vh] bg-white pt-4 md:p-5 max-h-[85vh] overflow-auto rounded-2xl relative xs:w-full xs:mx-1 md:mx-4">
      <div className="flex justify-between items-center">
        <h3 className="font-normal text-sm pb-8">Archive</h3>
      </div>
      {cupboardsIsLoading ? (
        <main className="min-h-[50vh] w-full flex items-center justify-center">
          <Loading />
        </main>
      ) : (
        <Table
          dataSource={cupboards.map((cupboard) => {
            return {
              key: cupboard.id,
              name: cupboard.name,
              rayonCount: `${cupboard.rayonCount} elements`,
              createdAt: moment(cupboard.createdAt).format('DD/MM/YYYY'),
              updatedAt: moment(cupboard.updatedAt).format('DD/MM/YYYY'),
            };
          })}
          pagination={true}
          columns={columns}
        ></Table>
      )}
    </div>
  );
};

export default CupboardTable;
