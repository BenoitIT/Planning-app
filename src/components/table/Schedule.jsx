import React, { useEffect, useState } from 'react'
import { Table, Button, Pagination } from 'antd';
const { Column } = Table;
import  { useLazyGetstaffScheduleQuery } from '../../redux/api/apiSlice'
const Schedule = () => {
    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [staffSchedule, setStaffSchedule] = useState([]);
    const [getstaffSchedule, { data: gotstaffScheduleData, isLoading, error }] = useLazyGetstaffScheduleQuery();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getstaffSchedule();
                const mappedData = mapData(response.data);
                setStaffSchedule(mappedData);
                setFilteredData(mappedData); // Initialize filteredData with the mapped data
            } catch (error) {
                console.error('Error getting staff schedule:', error);
            }
        };

        fetchData();
    }, [getstaffSchedule]);

    // Helper function to get the time range for a specific day
    const getTimeRange = (timetables, day) => {
        const timetable = timetables.find(
            (entry) => entry.day.toLowerCase() === day.toLowerCase()
        );

        if (timetable) {
            return `${timetable.fromTime} - ${timetable.toTime}`;
        }

        return ''; // Return an empty string if no timetable is found for the day
    };

    // Function to update the filteredData based on search text
    const handleSearch = (text) => {
        const filtered = staffSchedule.filter((item) =>
            Object.values(item).some((value) => {
                // Check if value is a string before calling toLowerCase()
                if (typeof value === 'string') {
                    return value.toLowerCase().includes(text.toLowerCase());
                }
                return false;
            })
        );

        setFilteredData(filtered);
        setSearchText(text);
    };

    // Map the staff schedule to the table format
    const mapData = (data) => {
        return data.map((staff) => ({
            key: staff.id.toString(),
            Name: staff.name,
            Monday: getTimeRange(staff.timetables, 'Monday'),
            Tuesday: getTimeRange(staff.timetables, 'Tuesday'),
            Wednesday: getTimeRange(staff.timetables, 'Wednesday'),
            Thursday: getTimeRange(staff.timetables, 'Thursday'),
            Friday: getTimeRange(staff.timetables, 'Friday'),
            Saturday: getTimeRange(staff.timetables, 'Saturday'),
            Sunday: getTimeRange(staff.timetables, 'Sunday'),
        }));
    };

  return (
      <div>
          <div className="flex justify-between mb-1">
              <div className="flex gap-2">
                  <div className="e-toolbar-item" aria-disabled="false" title="Impression">
                      <Button
                          className="e-tbar-btn e-tbtn-txt e-control e-btn e-lib"
                          type="button"
                          id="grid_2131562407_0_print"
                          tabIndex="-1"
                          aria-label="Print"
                          style={{ width: 'auto' }}
                      >
                          <span className="e-btn-icon e-print e-icons e-icon-left"></span>
                          <span className="e-tbar-btn-text">Print</span>
                      </Button>
                  </div>
              </div>
              <div className="e-toolbar-center" style={{ marginLeft: '307px' }}></div>
              <div className="e-toolbar-right">
                  <div className="e-toolbar-item e-search-wrapper" aria-disabled="false" title="Chercher">
                      <div className="e-input-group e-search" role="search">
                          <input
                              id="grid_2131562407_0_searchbar"
                              className="e-input"
                              name="input"
                              type="search"
                              placeholder="Chercher"
                              value={searchText}
                              onChange={(e) => handleSearch(e.target.value)}
                          />
                          <span
                              id="grid_2131562407_0_searchbutton"
                              className="e-input-group-icon e-search-icon e-icons"
                              tabIndex="-1"
                              title="Chercher"
                              aria-label="search"
                          ></span>
                      </div>
                  </div>
              </div>
          </div>
          <Table dataSource={filteredData} pagination={false} bordered className='shadow rounded-lg'>
              <Column title="Name" dataIndex="Name" key="Name" />
              <Column title="Monday" dataIndex="Monday" key="Monday" />
              <Column title="Tuesday" dataIndex="Tuesday" key="Tuesday" />
              <Column title="Wednesday" dataIndex="Wednesday" key="Wednesday" />
              <Column title="Thursday" dataIndex="Thursday" key="Thursday" />
              <Column title="Friday" dataIndex="Friday" key="Friday" />
              <Column title="Saturday" dataIndex="Saturday" key="Saturday" />
              <Column title="Sunday" dataIndex="Sunday" key="Sunday" />
          </Table>
          <Pagination
              total={filteredData.length}
              showTotal={(total) => `Total ${total} items`}
              defaultPageSize={20}
              defaultCurrent={1}
                className="mt-2"    
          />
      </div>
  )
}

export default Schedule