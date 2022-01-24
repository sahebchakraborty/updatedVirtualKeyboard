import React from 'react';
import { VirtualKeyboard } from './VK';
 
class Test extends React.Component {
  V={value:""}
  render() {
    return <div style={{marginTop:2}}>
    <input style={{marginTop:300,marginLeft:300,width:700,height:25}} onClick={() => VirtualKeyboard.showKeyboardSetState(this.V, this)} value={this.V.value} />
    </div> 
  }}
  
  export default Test;
