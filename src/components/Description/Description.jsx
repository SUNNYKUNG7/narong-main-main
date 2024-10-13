import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './description.css';
import portrait1 from '../../assets/39808_0.jpg';
import portrait2 from '../../assets/Profile.png';

import portrait3 from '../../assets/Profile3.jpg';
import portrait4 from '../../assets/Profile4.jpg';
import portrait5 from '../../assets/Profile5.jpg';
import portrait6 from '../../assets/Profile6.jpg';
import portrait7 from '../../assets/Profile7.jpg';
import portrait8 from '../../assets/Profile8.jpg';

function Description() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // ต้องเป็น true เพื่อให้เลื่อนอัตโนมัติ
        autoplaySpeed: 2500, // กำหนดเวลาการเลื่อนอัตโนมัติเป็น 3 วินาที
        arrows: false
    };

    return (
        <div className="description-container" id="description">
            <Container className="description-content">
                <Row className="align-items-center">
                    <Col xs={10} md={10} lg={6} className='mb-4'>
                        {/* Carousel for portrait images */}
                        <Slider {...carouselSettings}>
                            { [portrait3, portrait4, portrait5, portrait6, portrait7 , portrait8].map((portrait, index) => (
                                <img
                                    key={index}
                                    src={portrait}
                                    alt={`Portrait Image ${index + 1}`}
                                    className="img-fluid description-image"
                                />
                            ))}
                        </Slider>
                    </Col>
                    <Col xs={12} md={12} lg={6} className='texttext'>
                        {/* About me header */}
                        <h4 className='about-me-title'>ประวัติส่วนตัว</h4>
                        {/* About me description */}
                        <p className="about-me-text">
                            <span className="bold-label">👋 ชื่อ:</span> ณรงค์เดช <span className="bold-label">นามสกุล:</span> สุจินตนาธรรม <span className="bold-label">ชื่อเล่น:</span> บาส<br/>
                            <span className="bold-label">วัน/เดือน/ปีเกิด:</span> 10 ธันวาคม 2549<br/>
                            <span className="bold-label">หมู่เลือด:</span> B <span className="bold-label">เชื้อชาติ:</span> ไทย <span className="bold-label">สัญชาติ:</span> ไทย <span className="bold-label">ศาสนา:</span> พุทธ<br/>
                            <span className="bold-label">ที่อยู่:</span> 16 หมู่ 8 ต.ลุมปุ๊ก อ.เมือง จ.บุรีรัมย์<br/>
                            <span className="bold-label">ลักษณะนิสัย:</span> ร่าเริง เฮฮา, เรียนรู้ไว, ชอบศึกษาหาความรู้ใหม่<br/>
                            <span className="bold-label">งานอดิเรก:</span> เขียนโปรแกรมคอมพิวเตอร์, อ่านนิยาย, ฟังเพลง, เล่นฟุตบอล, เล่นสเก็ตบอร์ด<br/>
                            <span className="bold-label">ความสามารถพิเศษ:</span> เขียนโปรแกรม, การเรียนรู้สิ่งใหม่ๆ อย่างรวดเร็ว, การทำกิจกรรมกีฬาหลากหลายประเภท<br/>
                            <span className="bold-label">ข้อมูลครอบครัว:</span><br/>
                            <span className="bold-label">บิดา:</span> นาย อนุสรณ์ สุจินตนาธรรม<br/>
                            <span className="bold-label">มารดา:</span> น.ส ศนันธฉัตร พันทอง<br/>
                            <span className="bold-label">อาชีพบิดา:</span> (พนักงานบริษัทเอกชน)<br/>
                            <span className="bold-label">อาชีพมารดา:</span> (พนักงานบริษัทเอกชน)<br/>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Description;
