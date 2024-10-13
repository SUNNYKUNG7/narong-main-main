import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './transcript.css';

// Import PDF files for certifications
import cert1 from '../../assets/Tran1.pdf';
import cert2 from '../../assets/Tran2.pdf';

const Transcript = () => {
    return (
        <div id="transcript">
            {/* Updated to include the container for the title */}
            <div className="transcript-title-container">
                <h1 className="transcript-title">Transcript</h1>
            </div>
            <Container style={{ marginTop: '50px' }}>
                {/* First Row for cert1 */}
                <Row className="transcript-item">
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        <div className="transcript-placeholder">
                            {/* Link to open the PDF in a new tab */}
                            <p className="pdf-text">Click to view or download the PDF</p>
                            <a href={cert2} target="_blank" rel="noopener noreferrer" className="btn btn-secondary mx-2">
                                Open PDF
                            </a>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center">
                        <div className="text-center">
                            <h3 className="transcript-title2">ผลการเรียนหลักสูตรการศึกษาขั้นพื้นฐาน ระดับชั้นมัธยมศึกษาตอนปลาย (ปพ.1 : พ)</h3>
                            <p className="transcript-description">
                            โรงเรียน บัวหลวงวิทยาคม<br/>
                            ระดับชั้นมัธยมปลาย เกรดเฉลี่ยสะสม (4 ภาคเรียน): 3.28<br/>
                            </p>
                            <div className="d-flex justify-content-center">
                                <a href={cert2} download className="btn btn-secondary mx-2">Download Certificate</a>
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* Second Row for cert2 */}
                <Row className="transcript-item">
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        <div className="transcript-placeholder">
                            {/* Link to open the PDF in a new tab */}
                            <p className="pdf-text">Click to view or download the PDF</p>
                            <a href={cert1} target="_blank" rel="noopener noreferrer" className="btn btn-secondary mx-2">
                                Open PDF
                            </a>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center">
                        <div className="text-center">
                            <h3 className="transcript-title2">ผลการเรียนหลักสูตรการศึกษาขั้นพื้นฐาน ระดับชั้นมัธยมศึกษาตอนต้น (ปพ.1 : บ)</h3>
                            <p className="transcript-description">
                                โรงเรียน บัวหลวงวิทยาคม<br/>
                                ระดับชั้นมัธยมต้น เกรดเฉลี่ยสะสม (6 ภาคเรียน): 2.24<br/>
                            </p>
                            <div className="d-flex justify-content-center">
                                <a href={cert1} download className="btn btn-secondary mx-2">Download Certificate</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Transcript;
