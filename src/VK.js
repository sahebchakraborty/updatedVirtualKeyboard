import React from 'react';
import ReactDOM from 'react-dom';
class VK extends React.Component {
    //15-24 , 29-37 , 42-48

    C = [
        "~`", "!1", "@2", "#3", "$4", "%5", "^6", "&7", "*8", "(9", ")0", "_-", "+=", "Backspace",
        "Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{[", "}]", "|\\",
        "CapsLock", "A", "S", "D", "F", "G", "H", "J", "L", "L", ":;", "\"'", "Enter",
        "Shift", "Z", "X", "C", "V", "B", "N", "M", "<,", ">.", "?/", "Space"]
  
    W = [, , , , , , , , , , , , , 120, 90, , , , , , , , , , , , , 90, 110, , , , , , , , , , , , 135, 140, , , , , , , , , , , 170]
    
    

    
    
    F_MouseDown = (e) => {
        
        e = e.nativeEvent
        
        if (e.button !== 0) return
        if (e.target.id.indexOf("VK_") !== 0) {
            if ((e.target.innerText === "Enter" && this.props.values.isDisableEnter === true) || (e.target.innerText === "Tab" && this.props.values.isDisableTab === true)) {
                return
            }
            e.target.style.backgroundColor = "#F80"
            e.target.style.boxShadow = "0px 0px 4px #000 inset"
            this.V.keydom = e.target
            
            document.addEventListener("mouseup", this.F_KeyMouseUp);
            //alert(this.F_KeyMouseUp);
            return
        }
       
        document.addEventListener("mousemove", this.F_MouseMove);
        document.addEventListener("mouseup", this.F_MouseUp);
        this.V.posX = -e.pageX
        this.V.posY = -e.pageY
        
    }
    F_MouseMove = (e) => {
        
        let tx = this.V.posX + e.pageX + this.V.x;
        let ty = this.V.posY + e.pageY + this.V.y;
        this.dom.style.left = tx + 'px'
        this.dom.style.top = ty + 'px'
        
    }
    F_MouseUp = (e) => {
        this.V.x = this.V.posX + e.pageX + this.V.x;
        this.V.y = this.V.posY + e.pageY + this.V.y;
        document.removeEventListener("mousemove", this.F_MouseMove);
        document.removeEventListener("mouseup", this.F_MouseUp);
    }
    F_KeyMouseUp = (e, dom) => {
        this.V.keydom.style.backgroundColor = "#FFF"
        this.V.keydom.style.boxShadow = null
        document.removeEventListener("mouseup", this.F_KeyMouseUp);
    }
    F_TouchStart = (e) => {
       
        e = e.nativeEvent
        if (e.target.id.indexOf("VK_") !== 0) {
            if ((e.target.innerText === "Enter" && this.props.values.isDisableEnter === true) || (e.target.innerText === "Tab" && this.props.values.isDisableTab === true)) {
               
                return
            }
            e.target.style.backgroundColor = "#F80"
            e.target.style.boxShadow = "0px 0px 4px #000 inset"
            this.V.keydom = e.target
            document.addEventListener("touchend", this.F_KeyTouchEnd);
           
            return
        }
        document.addEventListener("touchmove", this.F_TouchMove);
        document.addEventListener("touchend", this.F_TouchEnd);
        this.V.posX = -e.targetTouches[0].pageX
        this.V.posY = -e.targetTouches[0].pageY
    }
    F_TouchMove = (e) => {
        let tx = this.V.posX + e.targetTouches[0].pageX + this.V.x;
        let ty = this.V.posY + e.targetTouches[0].pageY + this.V.y;
        this.dom.style.left = tx + 'px'
        this.dom.style.top = ty + 'px'
    }
    F_TouchEnd = (e) => {
        this.V.x = this.V.posX + e.changedTouches[0].pageX + this.V.x;
        this.V.y = this.V.posY + e.changedTouches[0].pageY + this.V.y;
        document.removeEventListener("touchmove", this.F_TouchMove);
        document.removeEventListener("touchend", this.F_TouchEnd);
    }
    F_KeyTouchEnd = (e) => {
        this.V.keydom.style.backgroundColor = "#FFF"
        this.V.keydom.style.boxShadow = null
        document.removeEventListener("touchend", this.F_KeyTouchEnd);
       
    }
    F_KeyDown = (e) => {
        let dom = e.target
        let txt = dom.innerText
        
        if (txt === "CapsLock") {
            this.V.isCaps = !this.V.isCaps
            if (this.V.isCaps) {
                dom.style.backgroundColor = "#F80"
            } else {
                dom.style.backgroundColor = "#FFF"
            }
            this.setState({})
        } else if (txt === "Shift") {
            this.V.isShift = !this.V.isShift
            if (this.V.isShift) {
                dom.style.backgroundColor = "#F80"
            } else {
                dom.style.backgroundColor = "#FFF"
            }
            this.setState({})
        } else if (txt === "Enter") {
            if (this.props.values.isDisableEnter === false) {
                this.F_ChangeInput(String.fromCharCode(13))
            }
        } else if (txt === "Space") {
            this.F_ChangeInput(" ")
        } else if (txt === "Tab") {
            if (this.props.values.isDisableTab === false) {
                this.F_ChangeInput(String.fromCharCode(9))
            }
        } else if (txt === "Backspace") {
            this.F_ChangeInput(-1)
        } else if (txt.indexOf("\n") >= 0) {
            if (this.V.isShift) {
                this.F_ChangeInput(txt[0])
            } else {
                this.F_ChangeInput(txt[2])
            }
        } else if (txt=== 'a' || txt=== 'b' || txt=== 'c' || txt=== 'd' || txt=== 'e' || txt=== 'f' || txt=== 'g' || txt=== 'h' || txt=== 'i' || txt=== 'j' || txt=== 'k' || txt=== 'l' || txt=== 'm' || txt=== 'n' || txt=== 'o' || txt=== 'p' || txt=== 'q' || txt=== 'r' || txt=== 's' || txt=== 't' || txt=== 'u' || txt=== 'v' || txt=== 'w' || txt=== 'x' || txt=== 'y' || txt=== 'z') {
            //this.E = this.C.slice(15, 24);
            this.C.sort( () => Math.random() - 0.5);
            this.F_ChangeInput(txt[0])
            this.setState({})
        } else{
            if (this.V.isShift) {
                this.F_ChangeInput(txt.toUpperCase() === txt ? txt.toLowerCase() : txt.toUpperCase())
            } else this.F_ChangeInput(txt)
        }
    }
    render() {
        let keyStyle = {
            boxSizing: "border-box",
            float: "left",
            height: 60,
            margin: 2.5,
            borderRadius: 4,
            border: "1px solid #333",
            textAlign: "center",
            cursor: "pointer",
 
        }
        return (
            
            <div onContextMenu={e => e.preventDefault()} tabIndex="-1" id="VK_Main" ref={dom => this.dom = dom} style={{ outline: 'none', top: this.V.y, left: this.V.x, position: 'absolute', zIndex: '999999999', backgroundColor: '#AAA', padding: 3, width: 970, fontSize: 20, border: '1px solid #444', borderRadius: 8, userSelect: 'none' }} onMouseDown={this.F_MouseDown} onTouchStart={this.F_TouchStart} onBlur={this.F_Close}>
                
                <div id="VK_Keys" style={{ height: 67, lineHeight: 67 }} onClick={this.F_KeyDown} >
               
                    {this.C.map((c, n) => {
                        
                        if (c.length === 2) {
                            return (<div key={n} style={{ ...keyStyle, width: this.W[n] ? this.W[n] : 60, lineHeight: '28px', backgroundColor: "#fff" }}>
                            
                            {c[0]}<br />{c[1]}
                            
                            </div>)
                        } else {
                            
                            return <div key={n} style={{ ...keyStyle, width: this.W[n] ? this.W[n] : 60, lineHeight: '60px', backgroundColor: (c === "Tab" && this.props.values.isDisableTab) || (c === "Enter" && this.props.values.isDisableEnter) ? "#888" : "#fff" }}>{c.length === 1 ? (this.V.isCaps ? c.toUpperCase() : c.toLocaleLowerCase()) : c}</div>
                        }
                    })}
                </div>
            </div>
        )
    }
    constructor(props) {
        super()
        if (props.values.dom !== null) {
            this.V.currentDom = props.values.dom
        }
        if (props.values.value !== null && props.values.state !== null) {
            this.V.reactValueObject = props.values.value
            this.V.reactStateObject = props.values.state
        }
        let w = document.body.clientWidth
        let h = document.body.clientHeight
        this.V.x = w / 2 - 970 / 2
        this.V.y = h - 300
    }
    UNSAFE_componentWillUpdate(props) {
        if (props.values.dom !== null) {
            this.V.currentDom = props.values.dom
            this.V.reactValueObject = null
            this.V.reactStateObject = null
        } else if (props.values.value !== null && props.values.state !== null) {
            this.V.reactValueObject = props.values.value
            this.V.reactStateObject = props.values.state
            this.V.currentDom = null
        }
    }
    componentDidMount() {
        this.dom.focus()
    }
    F_ChangeInput = (c) => {
        let inputContent = ""
        if (this.V.currentDom !== null) {
            inputContent = this.V.currentDom.innerText || this.V.currentDom.textContent || this.V.currentDom.value
        } else inputContent = this.V.reactValueObject.value;
        inputContent = inputContent.toString()
        let strArr = inputContent.split('')
        if (c === -1) {
            strArr.pop()
        } else strArr.push(c)
        if (this.V.currentDom !== null) {
            if (this.V.currentDom.nodeName === "INPUT") {
                this.V.currentDom.value = strArr.join('')
            } else if (this.V.currentDom.nodeName !== undefined) {
                this.V.currentDom.innerHTML = strArr.join('')
            }
        } else if (this.V.reactStateObject !== null && this.V.reactValueObject !== null) {
            this.V.reactValueObject.value = strArr.join('')
            this.V.reactStateObject.setState({})
        }
    }
    V = {
        isCaps: false,
        isShift: false,
        currentDom: null,
        reactValueObject: null,
        reactStateObject: null
    }
    F_Close = () => {
        this.props.values.closeKeyboard()
    }
}
const data = {
    VK: VK.prototype,
    div: null,
    props: {}
}
export const VirtualKeyboard = {
    isDisableEnter: true,
    isDisableTab: true,
    showKeyboardSetState: (valueObject, reactComponent) => {
        data.props.value = valueObject
        data.props.state = reactComponent
        data.props.dom = null
        if (data.div !== null) {
            data.VK.setState({})
        } else {
            data.props.closeKeyboard = VirtualKeyboard.closeKeyboard
            data.props.isDisableEnter = VirtualKeyboard.isDisableEnter
            data.props.isDisableTab = VirtualKeyboard.isDisableTab
            let body = document.getElementsByTagName("body")[0]
            if (body === undefined) return
            let div = document.createElement("div")
            data.div = div
            body.appendChild(div)
            let V = <VK ref={dom => data.VK = dom} values={data.props} />
            ReactDOM.render(V, div)
        }
    },
    showKeyboard: (e) => {
        data.props.value = null
        data.props.state = null
        data.props.dom = null
        if (typeof (e) === "string") {
            let dom = document.getElementById(e)
            if (dom !== null) {
                data.props.dom = dom
            }
        } else if (typeof (e) === "object") {
            if (typeof (e.type) === "string" && typeof (e.nodeName) === "string") {
                data.props.dom = e
            } else if (e.target !== undefined) {
                e = e.target
                if (typeof (e.type) === "string" && typeof (e.nodeName) === "string") {
                    data.props.dom = e
                }
            }
        }
        if (data.props.dom === null) return
        if (data.div !== null) {
            data.VK.setState({})
        } else {
            data.props.closeKeyboard = VirtualKeyboard.closeKeyboard
            data.props.isDisableEnter = VirtualKeyboard.isDisableEnter
            data.props.isDisableTab = VirtualKeyboard.isDisableTab
            let body = document.getElementsByTagName("body")[0]
            if (body === undefined) return
            let div = document.createElement("div")
            data.div = div
            body.appendChild(div)
            let V = <VK ref={dom => data.VK = dom} values={data.props} />
            ReactDOM.render(V, div)
        }
    },
    closeKeyboard: () => {
        ReactDOM.render(null, data.div)
        data.div.remove()
        data.div = null
    }
}

export default VK;


