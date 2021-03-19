import { Api } from "./index";

export async function getListStaffMember() {
  return Api.get('/staffs')
}