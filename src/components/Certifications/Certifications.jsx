import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import './certifications.css';

// Import images for certifications
import uxCert from '../../assets/cert1.jpg';
import uclaCert from '../../assets/uclacert.png';
import freeCodeCampCert from '../../assets/freecodecampcert.png';

import cert1 from '../../assets/cert1.jpg';
import cert2 from '../../assets/cert2.jpg';
import cert3 from '../../assets/cert3.jpg';
import cert4 from '../../assets/cert4.jpg';
import cert5 from '../../assets/cert5.jpg';
import cert6 from '../../assets/cert6.jpg';
import cert7 from '../../assets/cert7.jpg';
import cert8 from '../../assets/cert8.jpg';
import cert9 from '../../assets/cert9.jpg';

const Certifications = () => {
    const [show, setShow] = useState(false);
    const [modalImage, setModalImage] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = (image) => {
        setModalImage(image);
        setShow(true);
    };

    return (
        <div id="certifications">
            {/* Updated to include the container for the title */}
            <div className="certifications-title-container">
                <h1 className="certifications-title">Certifications</h1>
            </div>
            <Container style={{ marginTop: '50px' }}>
                {/* Repeat this Row for all 9 certifications */}
                <Row className="certification-item">
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        <div className="certification-placeholder" onClick={() => handleShow(cert1)}>
                            <img src={cert1} alt="ucla-cert" className="certification-image" />
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center">
                        <div className="text-center">
                            <h3 className="certification-title">ได้รับรางวัล รองชนะเลิศอันดับ 1 การประกวดผลงานและการเผยแพร่ผลงาน</h3>
                            <p className="certification-description">
                                การศึกษาค้นคว้าอิสระ (IS) ระดับชั้นมัธยมศึกษาตอนปลาย<br/>
                                โรงเรียนบัวหลวงวิทยาคม สำนักงานเขตพื้นที่การศึกษามัธยม บุรีรัมย์<br/>
                                ปีการศึกษา 2566 ณ วันที่ 27 กุมภาพันธ์ 2567
                            </p>
                            <div className="d-flex justify-content-center">
                                <a href={cert1} download className="btn btn-secondary mx-2">Download Certificate</a>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className="certification-item">
                    <Col xs={12} md={6} className="d-flex align-items-center">
                        <div className="text-center">
                            <h3 className="certification-title">ได้รับรางวัลระดับดีมาก <br/>
                            การประกวดแข่งขันผลงานสื่อสร้างสรรค์การศึกษาภาพยนตร์สั้นต่อต้านการทุจริต</h3>
                            <p className="certification-description">
                            ภายใต้โครงการเสริมสร้างคุณธรรม จริยธรรมและธรรมาภิบาลในสถานศึกษา (โครงการโรงเรียนสุจริต) ประจำปีงบประมาณ 2566    
                            </p>
                            <div className="d-flex justify-content-center">
                                <a href={cert2} download className="btn btn-secondary mx-2">Download Certificate</a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        <div className="certification-placeholder" onClick={() => handleShow(cert2)}>
                            <img src={cert2} alt="ux-cert" className="certification-image" />
                        </div>
                    </Col>
                </Row>

                <Row className="certification-item">
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        <div className="certification-placeholder" onClick={() => handleShow(cert3)}>
                            <img src={cert3} alt="ucla-cert" className="certification-image" />
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center">
                        <div className="text-center">
                            <h3 className="certification-title">CERTIFICATE OF COMPLETION <br/>
                                For Participation in the Provincial Level - ROV Exclusive Tournament</h3>
                            <p className="certification-description">
                            True5G Young Master 2023 by TRUE
                            </p>
                            <div className="d-flex justify-content-center">
                                <a href={cert3} download className="btn btn-secondary mx-2">Download Certificate</a>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className="certification-item">
                    <Col xs={12} md={6} className="d-flex align-items-center">
                        <div className="text-center">
                            <h3 className="certification-title">ประกาศนียบัตร ความเป็นผู้มีคุณธรรม จริยธรรม ด้านความซื่อสัตย์
                            สมควรได้รับการยกย่องให้เป็นตัวอย่างที่ดีแก่เด็กและเยาวชน <br/></h3>
                            <p className="certification-description">
                            โรงเรียนบัวหลวงวิทยาคม ณ วันที่ 11 กันยายน 2566 (ม.4/4)  
                            </p>
                            <div className="d-flex justify-content-center">
                                <a href={cert6} download className="btn btn-secondary mx-2">Download Certificate</a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        <div className="certification-placeholder" onClick={() => handleShow(cert6)}>
                            <img src={cert6} alt="ux-cert" className="certification-image" />
                        </div>
                    </Col>
                </Row>

                <Row className="certification-item">
                <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        <div className="certification-placeholder" onClick={() => handleShow(cert4)}>
                            <img src={cert4} alt="ucla-cert" className="certification-image" />
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center">
                        <div className="text-center">
                            <h3 className="certification-title">ประกาศนียบัตร ความเป็นผู้มีคุณธรรม จริยธรรม ด้านความซื่อสัตย์
                            สมควรได้รับการยกย่องให้เป็นตัวอย่างที่ดีแก่เด็กและเยาวชน <br/></h3>
                            <p className="certification-description">
                            โรงเรียนบัวหลวงวิทยาคม ณ วันที่ 11 กันยายน 2566 (ม.5/4) 
                            </p>
                            <div className="d-flex justify-content-center">
                                <a href={cert4} download className="btn btn-secondary mx-2">Download Certificate</a>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className="certification-item">
                    <Col xs={12} md={6} className="d-flex align-items-center">
                        <div className="text-center">
                            <h3 className="certification-title">ประกาศนียบัตร การผ่านการอบรมภาวะความเป็นผู้นำ <br/>
                            ในหัวข้อ "การเป็นผู้นำในศตวรรษที่ 21" <br/></h3>
                            <p className="certification-description">
                            THE CHILDREN AND YOUTH COUNCIL OF THAILAND <br/>
                            สภาเด็กและเยาวชนแห่งประเทศไทย <br/>
                            ณ วันที่ 9 เดือนธันวาคม พ.ศ. 2566
                            </p>
                            <div className="d-flex justify-content-center">
                                <a href={cert7} download className="btn btn-secondary mx-2">Download Certificate</a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        <div className="certification-placeholder" onClick={() => handleShow(cert7)}>
                            <img src={cert7} alt="ux-cert" className="certification-image" />
                        </div>
                    </Col>
                </Row>

                <Row className="certification-item">
                <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        <div className="certification-placeholder" onClick={() => handleShow(cert8)}>
                            <img src={cert8} alt="ucla-cert" className="certification-image" />
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center">
                        <div className="text-center">
                            <h3 className="certification-title">ประกาศนียบัตร เข้าร่วมโครงการส่งเสริมการเรียนรู้
                            กิจกรรมค่ายวิทยาศาสตร์ 1 วัน (One Day Camp)<br/></h3>
                            <p className="certification-description">
                            ศูนย์พิพิธภัณฑ์และแหล่งเรียนรู้ตลอดชีวิต มหาวิทยาลัยขอนแก่น <br/>
                            ณ วันที่ 9 เดือนธันวาคม พ.ศ. 2566
                            </p>
                            <div className="d-flex justify-content-center">
                                <a href={cert8} download className="btn btn-secondary mx-2">Download Certificate</a>
                            </div>
                        </div>
                    </Col>
                </Row>
                
                <Row className="certification-item">
                    <Col xs={12} md={6} className="d-flex align-items-center">
                        <div className="text-center">
                            <h3 className="certification-title">Certificate of Recognition<br/>
                            Successfully been an "Foreign Languages camp" <br/></h3>
                            <p className="certification-description">
                            At Bualuangwitthayakhom School, Muang District, Buriram Province<br/>
                            The Secondary Educational Service Area Office Buriram <br/>
                            Held on February 5th - 6th 2024
                            </p>
                            <div className="d-flex justify-content-center">
                                <a href={cert9} download className="btn btn-secondary mx-2">Download Certificate</a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        <div className="certification-placeholder" onClick={() => handleShow(cert9)}>
                            <img src={cert9} alt="ux-cert" className="certification-image" />
                        </div>
                    </Col>
                </Row>

                {/* Add more Rows here for other certifications */}
            </Container>

            {/* Modal for showing enlarged images */}
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Body>
                    <img src={modalImage} alt="Enlarged certification" className="modal-image" />
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Certifications;
