import { Wrapper } from "../components/layout";
import { ListStaffMember } from '../components/home/staffmember/listStaffMember'
import { getCurrentUser } from "../api/authentication";
import { Tabs } from 'antd';
import { useState } from "react";

const { TabPane } = Tabs;

export default function Home() {
  const [currentTab, setCurrentTab] = useState("staff_member")
  const tabs = [
    { name: "Staff member", key: "staff_member", component: <ListStaffMember currentTab={currentTab} /> },
    { name: "User permission", key: "user_permission", component: <div>user_permission</div> },
    { name: "Staff working hour", key: "staff_working_hour", component: <div>staff_working_hour</div> },
  ]

  const changeTab = (value) => {
    console.log(value)
    setCurrentTab(value)
  }

  return (
    <Wrapper >
      <Tabs onChange={changeTab}>
        {tabs.map(it => <TabPane tab={it.name} key={it.key}>{it.component}</TabPane>)}
      </Tabs>
    </Wrapper>
  )
}
export async function getServerSideProps(context) {
  const { object, error } = await getCurrentUser()
  console.log(object)
  if (error) {
    return {
      redirect: {
        destination: '/login',
      }
    }
  }
  return {
    props: {}
  }
}