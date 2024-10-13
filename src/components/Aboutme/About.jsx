import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faDiscord, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import avatar1 from '../../assets/Profile3.jpg';
import avatar2 from '../../assets/IMG_0113.jpg';
import avatar3 from '../../assets/Profile.png';
import './about.css';

function About() {
    const [showTextBox, setShowTextBox] = useState(false);
    const [randomText, setRandomText] = useState('');
    const [currentImage, setCurrentImage] = useState(avatar3);
    const [currentImage2, setCurrentImage2] = useState(avatar1);

    const textOptions = [
        'ยินดีที่ได้รู้จัก',
        'ฉันชื่อเล่น บาส',
        'อยากรู้ฉันให้มากขึ้นใช่ไหมหล่ะ',
        'อยากรู้อะไร เลือกด้านบนได้เลย',
        'ดีใจนะ ที่เข้ามาเยี่ยมชม',
        'ขอบคุณครับ'
    ];

    useEffect(() => {
        if (showTextBox) {
            const randomIndex = Math.floor(Math.random() * textOptions.length);
            setRandomText(textOptions[randomIndex]);
        }
    }, [showTextBox]);

    const handleImageClick = () => {
        setShowTextBox(!showTextBox);
    };

    const handleImage2Click = () => {
        setShowTextBox(!showTextBox);
    };

    useEffect(() => {
        if (showTextBox && randomText === '' && textOptions.length > 0) {
            setRandomText('สวัสดีครับ');
        }
    }, [showTextBox, randomText, textOptions]);

    return (
        <div className="about-container" id="about-me">
            <div className="dot-container">
                {Array.from({ length: 150 }, (_, index) => {
                    const dotStyle = {
                        backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`,
                        left: `${Math.random() * 100}vw`,
                        top: `${Math.random() * 100}vh`,
                        animationDelay: `-${Math.random() * 20}s`,
                    };
                    return <div className="dot" style={dotStyle} key={index}></div>;
                })}
            </div>

{/* Second Avatar image with click event 
            <div className="container text-center">
                <h1 className='first-name'>Mr. Narongdach Sujintanathum</h1>
                
                <p className='personal-title'>"ผมเป็นนักเรียนมัธยมปลายที่มีความสนใจในด้านเทคโนโลยีสารสนเทศ และ การเขียนโปรแกรมเป็นสิ่งที่ผมชื่นชอบมาก"</p>
                <p className='about-me'>
                เพราะมันไม่เพียงแต่ช่วยให้ผมแก้ปัญหาได้อย่างสร้างสรรค์ แต่ยังเปิดโอกาสให้ผมได้ค้นพบและเรียนรู้สิ่งใหม่ๆ อยู่เสมอ ผมมีความกระตือรือร้นในการพัฒนาทักษะด้านนี้ และเชื่อว่าการศึกษาในคณะเทคโนโลยีสารสนเทศจะช่วยเสริมสร้างความรู้และความสามารถที่จำเป็นในการก้าวหน้าในอนาคต ผมมั่นใจว่าการเรียนในคณะนี้จะทำให้ผมสามารถนำความรู้ที่ได้รับไปใช้ในการพัฒนาเทคโนโลยีที่มีประโยชน์ต่อสังคมได้
                <br/>
                <br/>
                ผมหวังเป็นอย่างยิ่งว่าจะได้เข้าร่วมเป็นส่วนหนึ่งของมหาวิทยาลัยนี้ เพื่อเรียนรู้และเติบโตไปพร้อมกับเพื่อนร่วมรุ่นและคณาจารย์ที่มีความรู้และประสบการณ์ ผมเชื่อว่ามหาวิทยาลัยของท่านจะเป็นสถานที่ที่เหมาะสมที่สุดสำหรับผมในการพัฒนาทักษะและเติบโตในสายงานที่ผมรัก
                </p> 
*/}                

                <div className="container text-center">
                <h1 className='first-name'>Mr. Narongdach Sujintanathum</h1>
                
                <p className='personal-title'>สวัสดีครับผมนายณรงค์เดช สุจินตนาธรรม ผมชอบการเรียนรู้สิ่งใหม่ๆมาตั้งแต่เด็กและลองที่จะทำหลายอย่าง เช่น การเล่นกีฬา ฟุตบอล วอลเล่ย์บอล การแสดงหนังสั้น วาดรูป การใช้คอมพิวเตอร์ที่ร้านอินเทอร์เน็ตอยู่บ่อยๆ และผมก็ได้มีโอกาสได้ไป OPEN HOUSE ที่มหาวิทยาลัยขอนแก่น จึงเกิดความสนใจที่อยากอยากเรียนคณะเทคโนโลยีสารสนเทศเพื่อที่จะตอบสนองความต้องการของตัวเองตอนเด็กที่อยากจะสร้างเกมแนว MMORPG และ ต่อ ยอดไปถึงการเรียนรู้เกี่ยวกับคอมพิวเตอร์ การเขียนโค้ด และ ต้องการเรียนรู้ทักษะต่างๆเพิ่มเติม ในด้านเทคโนโลยีสารเทศ ให้มากยิ่งขึ้น</p>
                <br/>
                <p className='about-me'>
                วิทยาการคอมพิวเตอร์เป็นหลักสูตรที่ผมชื่นชอบและมีความถนัดมากที่สุด ในบรรดาหลักสูตรต่างๆ ที่ผมสนใจ โดยหลักสูตรนี้ครอบคลุมการเรียนเขียนโปรแกรม มัลติมีเดีย และเทคโนโลยีใหม่ๆ อีกมากมาย ผมมองว่าสถาบันแห่งนี้ตอบโจทย์ทั้งในเรื่องของความพร้อม สภาพแวดล้อมที่เหมาะสม และความสะดวกสบายในการเรียนรู้ จึงทำให้ผมเลือกสถาบันนี้และหลักสูตรนี้สำหรับคนที่ชอบเรียนรู้สิ่งใหม่ๆ อย่างผม ผมเชื่อมั่นว่าสถาบันนี้จะมอบความรู้และประสบการณ์ที่มีคุณค่าให้กับผมได้อย่างแน่นอน
                <br/>
                <br/>
                ตั้งแต่เดือนธันวาคม พ.ศ. 2566 ผมเริ่มเรียนรู้การเขียนโค้ดเพื่อพัฒนาเว็บไซต์นี้ โดยผมได้ศึกษา พัฒนา และเพิ่มพูนทักษะการเขียนเว็บไซต์มาอย่างต่อเนื่อง นอกจากนี้ ผมยังมุ่งมั่นพัฒนาความสามารถของตนเองอย่างไม่หยุดยั้ง เพื่อบรรลุเป้าหมายในอนาคต ผมสามารถรับมือกับความกดดันได้ดี มีความรับผิดชอบสูง และทำงานร่วมกับทีมได้อย่างมีประสิทธิภาพ
                <br/>
                <br/>
                ในอนาคตที่โลกดิจิทัลกำลังเติบโต หลากหลายบริษัทต่างต้องการ โปรแกรมเมอร์ที่เก่ง มีความสามารถและความกดดันได้ดี ผมจึงอยากที่จะใช้ความสามารถความพยายามของผมเพื่อเป็นประโยชน์ให้กับสถาบันและโลกยุคใหม่ที่กำลังจะมาถึง
                </p> 

                <div className="social-links-container">
                    <a className="social-links" href="">
                        <FontAwesomeIcon icon={faLinkedin} className="fa-1x socail-icons" />
                    </a>
                    <a className="social-links" href="https://github.com/SUNNYKUNG7">
                        <FontAwesomeIcon icon={faGithub} className="fa-1x socail-icons" />
                    </a>
                    <a className="social-links" href="">
                        <FontAwesomeIcon icon={faDiscord} className="fa-1x socail-icons" />
                    </a>
                    <a className="social-links" href="https://www.facebook.com/narongdach.bass">
                        <FontAwesomeIcon icon={faFacebook} className="fa-1x socail-icons" />
                    </a>
                    <a className="social-links" href="https://x.com/muixx50?s=09">
                        <FontAwesomeIcon icon={faTwitter} className="fa-1x socail-icons" />
                    </a>
                </div>

                {/* First Avatar image with click event */}
                <img
                    src={currentImage}
                    alt="avatar image"
                    className="rounded-circle img-fluid swipe-image"
                    style={{
                        width: '180px',
                        height: '180px',
                        cursor: 'pointer',
                        objectFit: 'cover',
                        border: '4px solid transparent',
                        position: 'relative',
                        animation: 'innerBorderAnimation 1s infinite alternate, outerRingAnimation 4s infinite linear',
                    }}
                    onClick={handleImageClick}
                />

                {/* Second Avatar image with click event */}
                <img
                    src={currentImage2}
                    alt="second avatar image"
                    className="rounded-circle img-fluid swipe-image"
                    style={{
                        width: '180px',
                        height: '180px',
                        cursor: 'pointer',
                        objectFit: 'cover',
                        border: '4px solid transparent',
                        position: 'relative',
                        marginLeft: '50px', // Adjust this value to reduce space between images
                        animation: 'innerBorderAnimation 1s infinite alternate, outerRingAnimation 5s infinite linear',
                    }}
                    onClick={handleImage2Click}
                />

                {/* Render text box conditionally */}
                {showTextBox && (
                    <div className="text-box cartoon-bubble">
                        <p>{randomText}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default About;
