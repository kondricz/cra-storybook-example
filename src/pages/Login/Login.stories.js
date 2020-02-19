import React from "react";
import Login from "./Login"

export const loginScreen = () => <Login/>

const storyWrapperStyles = {
  display: 'flex',
  height: '80vh',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid gray'
}


const TYPE = '(visual)'
export default {
  title: `Pages/Login ${TYPE}`,
  component: Login,
  decorators: [
    story => <div style={storyWrapperStyles}>{story()}</div>
  ],
};
