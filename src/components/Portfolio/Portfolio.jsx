import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './porfilio.css';
import anyyes from '../../assets/anyesThumbnail.png';
import techblog from '../../assets/techBlogThumbnail.png';
import liberThumbNail from '../../assets/liberThumbnail.png';
import cryptograbber from '../../assets/CryptoGrabberThumbNail.png';
import blicky from '../../assets/blicky-thumbnail.png';
import GDATMs from '../../assets/gd-Thumbnail.png';
import school from '../../assets/SchoolV1.png';
import school2 from '../../assets/SchoolV2.png';
import programmer from '../../assets/Programmer.png';
import university from '../../assets/University.png';

const Portfolio = () => {
    return (
        <div id="portfolio">
            <div className="activity-header-container2">
            <h1 className='portfolio-title'>ประวัติการศึกษา</h1>
            <h2 className='port-header'><span className='emoji'>🎓</span>ไทม์ไลน์นี้แสดงถึงการศึกษาในอดีตของผมจนถึงการศึกษามัธยมปลายในปัจจุบัน และแผนการในอนาคต</h2>
            </div>
            <Container style={{ marginTop: '50px' }}>
                {/* Project 1 */}

                <Row className='each-proj'>
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        <img
                            src={school}
                            alt="School project"
                            className="rounded-image"
                        />
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center">
    <div className="text-center">
        <div className="d-flex align-items-center justify-content-start mb-3">
            <h3 className='certification-title'>ชื่อโรงเรียน :</h3>
            <p className='certification-description2'>โรงเรียน บ้านหนองทะลอก</p>
        </div>
        <div className="d-flex align-items-center justify-content-start mb-3">
            <h3 className='certification-title'>ระดับชั้น :</h3>
            <p className='certification-description2'>ประถมศึกษา 1-6</p>
        </div>
        <div className="d-flex align-items-center justify-content-start mb-3">
            <h3 className='certification-title'>เกรดเฉลี่ยสะสม (GPAX) :</h3>
            <p className='certification-description2'>#NA</p>
        </div>
    </div>
</Col>
                </Row>

                {/* Project 2 */}
                <Row className='each-proj'>
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        <img
                            src={school2}
                            alt="School project"
                            className="rounded-image"
                        />
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center">
    <div className="text-center">
        <div className="d-flex align-items-center justify-content-start mb-3">
            <h3 className='certification-title'>ชื่อโรงเรียน :</h3>
            <p className='certification-description2'>โรงเรียน บัวหลวงวิทยาคม</p>
        </div>
        <div className="d-flex align-items-center justify-content-start mb-3">
            <h3 className='certification-title'>ระดับชั้น :</h3>
            <p className='certification-description2'>มัธยมศึกษาปีที่ 1-3 (ม.ต้น)</p>
        </div>
        <div className="d-flex align-items-center justify-content-start mb-3">
            <h3 className='certification-title'>เกรดเฉลี่ยสะสม (GPAX) :</h3>
            <p className='certification-description2'>2.24</p>
        </div>
        <div className="d-flex align-items-center justify-content-start mb-3">
            <h3 className='certification-title'>ระดับชั้น :</h3>
            <p className='certification-description2'>มัธยมศึกษาปีที่ 4-5 (ม.ปลาย)</p>
        </div>
        <div className="d-flex align-items-center justify-content-start mb-3">
            <h3 className='certification-title'>ห้องเรียน :</h3>
            <p className='certification-description2'> ศิลป์-ภาษา</p>
        </div>
        <div className="d-flex align-items-center justify-content-start mb-3">
            <h3 className='certification-title'>เกรดเฉลี่ยสะสม (GPAX) :</h3>
            <p className='certification-description2'>3.28</p>
        </div>
    </div>
</Col>
                </Row>

                {/* Project 3 */}
                <Row className='each-proj'>
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        <img
                            src={university}
                            alt="University project"
                            className="rounded-image"
                        />
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center">
                    <div className="text-center">
        <div className="d-flex align-items-center justify-content-start mb-3">
            <h3 className='certification-title'>การศึกษา :</h3>
            <p className='certification-description2'>ระดับมหาวิทยาลัย (To Be)</p>
        </div>
        <div className="d-flex align-items-center justify-content-start mb-3">
            <h3 className='certification-title'>คณะ :</h3>
            <p className='certification-description2'>เทคโนโลยีสารสนเทศ</p>
        </div>
        <div className="d-flex align-items-center justify-content-start mb-3">
        <h3 className='certification-title'>สาขา :</h3>
        <p className='certification-description2'>วิทยาการคอมพิวเตอร์</p>
        </div>
    </div>
                    </Col>
                </Row>

                {/* Project 4 */}
                <Row className='each-proj'>
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        <img
                            src={programmer}
                            alt="Crypto Grabber project"
                            className="rounded-image"
                        />
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center">
                    <div className="text-center">
                    <div className="d-flex align-items-center justify-content-start mb-3">
    <h3 className='certification-title'>เข้าทำงาน :</h3>
    <p className='certification-description2'>บริษัทเทคโนโลยีชั้นนำด้าน IT ที่เน้นนวัตกรรมและการพัฒนา (To Be)</p>
</div>
<div className="d-flex align-items-center justify-content-start mb-3">
    <h3 className='certification-title'>ลักษะงาน :</h3>
    <p className='certification-description2'>สร้างสรรค์และพัฒนาโปรแกรม รวมถึงการออกแบบซอฟต์แวร์ที่ตอบสนองความต้องการของผู้ใช้</p>
</div>        

    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Portfolio;
