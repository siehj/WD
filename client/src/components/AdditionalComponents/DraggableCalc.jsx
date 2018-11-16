import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import Draggable from 'react-draggable';

class DraggableCalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: ''
    };
  }

  render() {
    return (
      <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{x: 30, y: 0}}
        position={null}
        grid={[25, 25]}
        bounds="parent"
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div id="floatingCalc" >
          <div style={{ backgroundColor: 'gray' }}> 
            <div className="handle"></div>
          </div>
          <div id="fcBody">
            <input type="text" style={{ width: '100%', height: '42px' }} placeholder="0.00" />
              <div className="calcBtnRow" >
                <button>1</button><button>2</button><button>3</button><button>+</button>
                <button>4</button><button>5</button><button>6</button><button>-</button>
                <button>7</button><button>8</button><button>9</button><button>*</button>
                <button>0</button><button>+/-</button><button>%</button><button>/</button>
              </div>
              <div className="lastRow" >
                <button >clear</button>
                <button >undo</button>
              </div>
              <div style={{ backgroundColor: '#fff' }} >
                <Button outline color="success" block > = </Button>
              </div>
            {/* <div>This readme is really dragging on...</div> */}
          </div>
        </div>
      </Draggable>
    )
  }
}

export default DraggableCalc;