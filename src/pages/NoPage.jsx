import React from 'react';
import { Button, Result } from 'antd';
const NoPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary text-black shadow">Back Home</Button>}
      />
    </div>

  )
}

export default NoPage
