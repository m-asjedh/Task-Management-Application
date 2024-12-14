import { createSlice } from "@reduxjs/toolkit";
import { StaticImageData } from "next/image";
import profile1 from "../../../../public/assets/images/profile1.png";
import profile2 from "../../../../public/assets/images/profile2.png";

export interface Assignee {
  id: string;
  name: string;
  image: StaticImageData;
}

const initialState: Assignee[] = [
  {
    id: "1",
    name: "Mohamed",
    image: profile1,
  },
  {
    id: "2",
    name: "Asjedh",
    image: profile2,
  },
];

const assigneeSlice = createSlice({
  name: "assignees",
  initialState,
  reducers: {},
});

export default assigneeSlice.reducer;
