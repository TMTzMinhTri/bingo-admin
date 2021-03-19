import { useEffect, useState } from "react";
import { getListStaffMember } from "../../../api/staffMember";
import { Table, Tag, Space } from 'antd';

const { Column } = Table;

export function ListStaffMember({ currentTab }) {
  const [listStaff, setListStaff] = useState([]);

  useEffect(async () => {
    if (currentTab === "staff_member") {
      const { error, data } = await getListStaffMember()
      setListStaff(data)
      console.log(data)
    }
  }, [currentTab])

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'First Name',
      dataIndex: 'first_name',
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Appointment",
      dataIndex: "is_appointment",
      render: (value) => {
        if (value === true) return "Calendar bookings enabled"
        else return "Calendar bookings disabled"
      }
    },
    {
      title: "User Permission",
      dataIndex: "role",
      render: (value) => {
        return value.name
      }
    }
  ]

  return (
    <Table columns={columns} dataSource={listStaff} rowKey={record => record.id} />
  )
}