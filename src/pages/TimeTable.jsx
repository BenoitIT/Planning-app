import React from 'react'
import { Tabs } from 'antd';
import Layout from '../layouts/Dashboard';
import Schedule from '../components/table/Schedule';
import Staff from '../components/table/Staff';
const TimeTable = () => {
    const { TabPane } = Tabs;
    function callback(key) {
        console.log(key);
    }
    return (
      <Layout>
            <div className="lg:p-4 overflow-y-auto max-w-screen bg-slate-200 p-6">
          <div className="m-2 md:m-5 p-2 pt-4 md:p-10 min-h-[78vh] bg-white rounded-2xl relative">
              <div className="mb-5 flex justify-between items-start lg:items-center">
                  <p className="md:text-2xl text-1xl font-bold tracking-tight to-slate-900 p-2">Schedule</p>
              </div>
              <Tabs defaultActiveKey="1" onChange={callback}>
                  <TabPane tab="Schedule" key="1">
                      <Schedule />
                  </TabPane>
                  <TabPane tab="Staff" key="2">
                      <Staff />
                  </TabPane>
              </Tabs>
          </div>
            </div>
            </Layout>
  )
}

export default TimeTable