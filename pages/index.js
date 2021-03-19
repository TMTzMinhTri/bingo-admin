import { Wrapper } from "../components/layout";
import { getCurrentUser } from "../api/authentication";
import { Tabs } from 'antd';

const { TabPane } = Tabs;

export default function Home() {
  const tabs = [
    { name: "Staff member", key: "staff_member", component: <div>staff_member</div> },
    { name: "User permission", key: "user_permission", component: <div>user_permission</div> },
    { name: "Staff working hour", key: "staff_working_hour", component: <div>staff_working_hour</div> },
  ]
  return (
    <Wrapper >
      <Tabs>
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