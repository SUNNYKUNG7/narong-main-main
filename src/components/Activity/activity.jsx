import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './activity.css';
import liberThumbNail from '../../assets/liberThumbnail.png'; 
import IS1 from '../../assets/IS1.png'; 
import IS2 from '../../assets/IS2.png';
import IS3 from '../../assets/IS3.jpg';
import GD1 from '../../assets/GD1.png';
import GD2 from '../../assets/GD2.png';
import SP1 from '../../assets/SP1.png';
import SP2 from '../../assets/SP2.png';
import ENG1 from '../../assets/ENG1.png';
import ENG2 from '../../assets/ENG2.jpg';
import ENG3 from '../../assets/ENG3.jpg';
import ENG4 from '../../assets/ENG4.jpg';
import KN1 from '../../assets/KN1.png'; 
import KN2 from '../../assets/KN2.png';
import KN3 from '../../assets/KN3.png';
import RJ1 from '../../assets/RJ1.png';
import RJ2 from '../../assets/RJ2.jpg';

const Activity = () => {
    return (
        <div id="activity">
            {/* Container for the colored background */}
            <div className="activity-header-container">
                <h1 className='activity-title'>กิจกรรมที่สำคัญและประสบการณ์ที่ได้รับ</h1>
                <h2 className='activity-header'><span className='emoji'>🎯</span> รายละเอียดกิจกรรมที่เคยเข้าร่วม</h2>
            </div>

            <Container style={{ marginTop: '50px' }}>
                {/* First Row - Image on Left, Text on Right */}
                <Row className='each-proj'>
                <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    src={GD1}
                                    alt="Activity Image 1"
                                    className="rounded-image"
                                    style={{ width: '100%' }}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    src={GD2}
                                    alt="Activity Image 2"
                                    className="rounded-image"
                                    style={{ width: '100%' }}
                                />
                            </Carousel.Item>
                            
                        </Carousel>
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center">
                        <div className="text-center">
                            <h3 className='proj-title'>กิจกรรมรับเกียรติบัตรความดีแบบ VeryGood</h3>
                            <p className='proj-text'>
                            เมื่อวันที่ 13 กันยายน 2022 ผมได้รับเกียรติบัตรความดีจากการเป็นคนซื่อสัตย์ ในหัวข้อ ความซื่อสัตย์เป็นคุณธรรมที่ควรปลูกฝังในจิตสำนึกของคนทุกคนในสังคมไทย ซึ่งก่อนที่จะได้รับเกียรติบัตรนี้ ผมได้พบโทรศัพท์มือถือและกระเป๋าเงินของคนอื่น ซึ่งทำให้ผมตัดสินใจนำไปประกาศหาเจ้าของและคืนให้เจ้าของ
                            </p>
                        </div>
                    </Col>
                </Row>

                {/* Second Row - Text on Left, Image on Right */}
                <Row className='each-proj'>
                    <Col xs={12} md={{ span: 6, order: 2 }} className="d-flex align-items-center justify-content-center">
                    <Carousel>
                            <Carousel.Item>
                                <img
                                    src={IS1}
                                    alt="Activity Image 1"
                                    className="rounded-image"
                                    style={{ width: '100%' }}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    src={IS2}
                                    alt="Activity Image 2"
                                    className="rounded-image"
                                    style={{ width: '100%' }}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    src={IS3}
                                    alt="Activity Image 3"
                                    className="rounded-image"
                                    style={{ width: '100%' }}
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col xs={12} md={{ span: 6, order: 1 }} className="d-flex align-items-center">
                        <div className="text-center">
                            <h3 className='proj-title'>รับเกียรติบัตร IS</h3>
                            <p className='proj-text'>
                            ในวันที่ผมได้รับเกียรติบัตร IS ผมได้เรียนรู้มากมาย ทั้งความอดทนและการแก้ปัญหา งานนี้ทำให้ผมใช้ทักษะการนำเสนอ การออกแบบ และการใช้งานฝีมือ นอกจากนี้ยังทำให้ผมค้นพบว่าชอบการออกแบบ การทำโครงงานครั้งนี้ช่วยพัฒนาทักษะที่มีอยู่และเสริมทักษะใหม่ๆ ที่มีประโยชน์ในอนาคต
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row className='each-proj'>
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                    <Carousel>
                            <Carousel.Item>
                                <img
                                    src={SP1}
                                    alt="Activity Image 1"
                                    className="rounded-image"
                                    style={{ width: '100%' }}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    src={SP2}
                                    alt="Activity Image 2"
                                    className="rounded-image"
                                    style={{ width: '100%' }}
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center">
                        <div className="text-center">
                            <h3 className='proj-title'>ประสบการณ์จากการลงสมัครสภานักเรียน</h3>
                            <p className='proj-text'>
                            การลงสมัครสภานักเรียนปี 2566 ทำให้ผมได้รับประสบการณ์มากมาย ผมได้เรียนรู้การทำงานเป็นทีม และรู้จักจัดการกับความผิดพลาดในการบริหารเวลา การลงสมัครครั้งนี้สอนให้ผมปรับมุมมองและค้นพบว่าตัวเองมีความสามารถในการพูดและนำเสนอนโยบายได้ดี ผมยังได้นำข้อผิดพลาดมาปรับแก้ ทำให้เติบโตและพัฒนาตัวเองอย่างมีประสิทธิภาพ
                            </p>
                        </div>
                    </Col>
                </Row>

                {/* Second Row - Text on Left, Image on Right */}
                <Row className='each-proj'>
                    <Col xs={12} md={{ span: 6, order: 2 }} className="d-flex align-items-center justify-content-center">
                    <Carousel>
                            <Carousel.Item>
                                <img
                                    src={ENG1}
                                    alt="Activity Image 1"
                                    className="rounded-image"
                                    style={{ width: '100%' }}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    src={ENG2}
                                    alt="Activity Image 2"
                                    className="rounded-image"
                                    style={{ width: '100%' }}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    src={ENG3}
                                    alt="Activity Image 3"
                                    className="rounded-image"
                                    style={{ width: '100%' }}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    src={ENG4}
                                    alt="Activity Image 4"
                                    className="rounded-image"
                                    style={{ width: '100%' }}
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col xs={12} md={{ span: 6, order: 1 }} className="d-flex align-items-center">
                        <div className="text-center">
                            <h3 className='proj-title'>ประสบการณ์จากการเข้าร่วม English Comp ปี 2567</h3>
                            <p className='proj-text'>
                            การเข้าร่วมกิจกรรม English Comp ในปี 2567 ทำให้ผมได้รับความรู้และหลักการใช้ภาษาอังกฤษเพิ่มขึ้นอย่างมาก โดยเฉพาะเรื่องของไวยากรณ์ (Grammar) และการใช้เสียงเชื่อม (Linking Sound) ผมยังได้รับโอกาสในการติวข้อสอบและฝึกฝนทักษะการเขียนและการสื่อสารภาษาอังกฤษอย่างเข้มข้น กิจกรรมนี้ไม่เพียงแต่ช่วยให้ผมพัฒนาภาษาได้ดีขึ้น แต่ยังสร้างความมั่นใจในการใช้ภาษาอังกฤษในชีวิตประจำวัน
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row className='each-proj'>
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                    <Carousel>
                            <Carousel.Item>
                                <img
                                    src={KN1}
                                    alt="Activity Image 1"
                                    className="rounded-image"
                                    style={{ width: '100%' }}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    src={KN2}
                                    alt="Activity Image 2"
                                    className="rounded-image"
                                    style={{ width: '100%' }}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    src={KN3}
                                    alt="Activity Image 3"
                                    className="rounded-image"
                                    style={{ width: '100%' }}
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center">
                        <div className="text-center">
                            <h3 className='proj-title'>ประสบการณ์จากการเข้าร่วม Open House ม.ขอนแก่นและกิจกรรมจิตอาสา</h3>
                            <p className='proj-text'>
                            ในการเข้าร่วม Open House ที่ขอนแก่น ผมได้โอกาสเข้าร่วมกิจกรรมติวข้อสอบ T-GAT ซึ่งช่วยเตรียมความพร้อมให้กับผมในการสอบ นอกจากนี้ ผมยังได้มีส่วนร่วมในกิจกรรมจิตอาสา โดยการบริจาคของใช้ที่บ้านพักคนชรา กิจกรรมนี้ไม่เพียงแค่ช่วยเหลือผู้ที่ต้องการ แต่ยังทำให้ผมได้เรียนรู้เรื่องความเอื้อเฟื้อเผื่อแผ่และความรับผิดชอบต่อสังคมอย่างแท้จริง
                            </p>
                        </div>
                    </Col>
                </Row>

                {/* Second Row - Text on Left, Image on Right */}
                <Row className='each-proj'>
                    <Col xs={12} md={{ span: 6, order: 2 }} className="d-flex align-items-center justify-content-center">
                    <Carousel>
                            <Carousel.Item>
                                <img
                                    src={RJ1}
                                    alt="Activity Image 1"
                                    className="rounded-image"
                                    style={{ width: '100%' }}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    src={RJ2}
                                    alt="Activity Image 2"
                                    className="rounded-image"
                                    style={{ width: '100%' }}
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col xs={12} md={{ span: 6, order: 1 }} className="d-flex align-items-center">
                        <div className="text-center">
                            <h3 className='proj-title'>ประสบการณ์จากการเข้าร่วม Open House ราชภัฏ</h3>
                            <p className='proj-text'>
                            ในการเข้าร่วม Open House ของมหาวิทยาลัยราชภัฏ ผมได้มีโอกาสเข้าร่วมกิจกรรมจำลองการเรียนการสอน ทำให้ผมได้เห็นภาพการเรียนในระดับมหาวิทยาลัยอย่างชัดเจน นอกจากนี้ ยังได้เข้าร่วมกิจกรรมต่างๆ ที่ทางมหาวิทยาลัยจัดขึ้น ทำให้ผมได้เรียนรู้เพิ่มเติมเกี่ยวกับบรรยากาศการเรียนและการใช้ชีวิตในมหาวิทยาลัย
                            </p>
                        </div>
                    </Col>
                </Row>

                {/* Add more projects following the same alternating pattern */}
            </Container>
        </div>
    );
};

export default Activity;
