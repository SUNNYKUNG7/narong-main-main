import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './components/transitions/transitions.css'; // สร้างไฟล์ transitions.css เพื่อเพิ่มสไตล์ของแอนิเมชัน

function App() {
    return (
        <CSSTransition
            in={true} 
            appear={true} 
            timeout={300} 
            classNames="fade"
        >
            <div className="App">
                {/* ส่วนประกอบของหน้า */}
            </div>
        </CSSTransition>
    );
}

export default App;