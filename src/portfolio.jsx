import React from 'react';
import styles from './common.module.css';
import myPhoto from './myPhoto.jpg';
import "./font.css";
import { CalendarOutlined, BankOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import { Card, Col, Row, Tooltip } from 'antd';

const Portfolio = () => {
    return (
        <>
            <div className={styles.section1}>
                <img className={styles.myPhoto} src={myPhoto} alt="photo"/>
                <div className={styles.intro}>
                    <h1>안녕하세요. <br/>밝고 꼼꼼한 성격을 가진<br />프론트엔드 개발자 홍유미입니다. <br /></h1>
                </div>
            </div>

            <div className={styles.section2}>
                <div>
                    <h1>기본정보</h1>
                    <hr/>
                </div>
                <div>
                    <ul>
                        <li>
                            <CalendarOutlined className={styles.fs30}/>
                            <p>생년월일 : 96년 01월 11일</p>
                        </li>
                        <li>
                            <BankOutlined className={styles.fs30}/>
                            <p>학력 : 건양대학교(의료IT공학과) 졸업</p>
                        </li>
                        <li>
                            <PhoneOutlined className={styles.fs30}/>
                            <p>연락처 : 010-2173-1864</p>
                        </li>
                        <li>
                            <MailOutlined className={styles.fs30}/>
                            <p>이메일 : ghddid13@naver.com</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.section3}>
                <div>
                    <h1>경력</h1>
                    <hr />
                </div>
                <div className={styles.cardWrapper}>
                    <div className="site-card-wrapper">
                        <Row gutter={[16,16]}> {/*gutter={}은 16+8n의 정수 24를 갖고있는 row의 수를 바꿀수 있음 */}
                            <Col span={12}> {/*span={}은 24분할중 얼마나 차지할지*/}
                                <Card title="위지언" bordered={false}>
                                    2017.12.26 ~ 2019.01.24 (사원)
                                </Card>
                            </Col>
                            <Col span={12}>
                                <Card title="에스큐아이소프트" bordered={false}>
                                    2019.05.02 ~ 2022.02.28 (선임)
                                </Card>
                            </Col>

                            <Col span={24}> 
                                <Card title="한싹" bordered>
                                    2022.05.23 ~ 재직중 (대리)
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>

            <div className={styles.section4}>
                <div>
                    <h1>한싹 프로젝트</h1>
                    <hr />
                </div>
                <div className={styles.projectWrap}>
                    <div>
                        <h2>[ 망연계 클라우드 시스템 front 개발 ] </h2>

                        <Tooltip title="분리된 망 환경의 서버 간 실시간 데이터 연계와 사용자PC간 파일 전송 기능을 제공하는 솔루션이고 관리자가 보는 웹 페이지를 구현했습니다.">
                            <span className={styles.firstProject}>이런 시스템입니다!</span>
                        </Tooltip>

                        <h3>( 주요업무 )</h3>
                        <ul>
                            <li>게시판 형태 react table library 적용하여 개발</li>
                            <li>고객사 관리 기능 개발(게시판 형태)</li>
                            <li>trello 형식의 카드뉴스 개발</li>
                            <li>nivo chart 활용한 대시보드 화면개발</li>
                        </ul>
                        <br/>
                        <h3>기간 : 2022.05.24 ~ 2022.09.30</h3>
                        <h3>주사용기술 : html, css , react, java, postgresql</h3>
                    </div>
                    <br/>
                    <div>
                        <h2>[ 사내 공통 프레임워크 개발 ] </h2>

                        <h3>( 주요업무 )</h3>
                        <ul>
                            <li>
                                디자인 프레임워크변경<br />
                                - ant design 을 사용했지만 mantis 템플릿을 적용하게되어 mui로 수정 
                            </li>
                            <li>대시보드 차트부분을 nivo에서 amchart5로 변경 </li>
                            <li>
                                보안 서약서 작성 메뉴, 보고서 관리 메뉴 기능 구현<br />
                                - 테이블 형식의 데이터를 PDF로 변환 후 저장, 암호화 기능구현(jspdf autoTable 사용)
                            </li>
                            <li>
                                문서결재 서비스, 알림 기능 구현<br />
                                - 결재 신청, 조회, 승인 화면 구현<br />
                                - 공지사항 등록시 선택된 권한 사용자들에게 알림
                            </li>
                        </ul>
                        <br/>
                        <h3>기간 : 2022.09.26 ~ 현재 진행중</h3>
                        <h3>주사용기술 : html, css , react, java, postgresql</h3>
                    </div>
                    <br />
                    <div>
                        <h2>[ 팀 내부 세미나 진행 ] </h2>

                        <h3>( 주요업무 )</h3>
                        <ul>
                            <li>
                                typescript 기본 소개 및 개발가이드 작성
                            </li>
                            <li>react hook 소개 및 개발가이드 작성</li>
                            <li>
                                amChart5 소개 및 개발가이드 작성
                            </li>
                        </ul>
                        <br/>
                        <h3>기간 : 2022.05.24 ~ 2022.12.23</h3>
                    </div>
                </div>
            </div>

            <div className={styles.section4}>
                <div>
                    <h1>에스큐아이소프트 프로젝트</h1>
                    <hr />
                </div>
                <div className={styles.projectWrap}>
                    <div>
                        <h2>[ 저에너지건축물 통합지원시스템 개발] </h2>

                        <Tooltip title="국민 누구나 건물 주소만 입력하면 현재 사용 중인 에너지 사용량은 물론 과소비 여부를 한 눈에 파악할 수 있으며
                        사용자가 에너지 소비를 줄이고자 하는 경우 난방, 냉방, 급탕, 조명 등 항목별 기술 대안과 비용 분석 등의 정보를
                        온라인상으로 무료로 제공하는 시스템입니다.">
                            <span className={styles.firstProject}>이런 시스템입니다!</span>
                        </Tooltip>

                        <h3>( 주요업무 )</h3>
                        <ul>
                            <li>
                                에너지 자가진단 퍼블리싱 및 기능개발<br/>
                                - 공동주택(ex 아파트) 기본정보, 시설정보, 거주자정보, 기기정보, 에너지정보 입력 및 진단<br/>
                                - 업무시설(ex 00빌딩) 사용정보, 설비정보, 기기정보, 에너지정보 입력 및 진단<br/>
                            </li>
                            <li>컨텐츠 페이지 개발</li>
                            <li>연계시스템인 계측기반 상세 에너지정보 시스템 퍼블리싱</li>
                        </ul>
                        <br/>
                        <h3>( 성과 )</h3>
                        <ul>
                            <li>사이트 퍼블리싱 경험</li>
                        </ul>
                        <br/>
                        <h3>기간 : 2019.05.08 ~ 2020.06.30</h3>
                        <h3>주사용기술 : html, css, javascript(jquery), oracle</h3>
                    </div>
                    <br/>
                    <div>
                        <h2>[ 2020년녹색건축인증통합관리시스템개발 ]</h2>

                        <Tooltip title="설계와 시공 유지, 관리 등 전 과정에 걸쳐 에너지 절약 및 환경오염 저감에 기여한 건축물에 대한
                        친환경 건축물 인증을 부여하는 제도로써 7개 전문분야의 평가 항목별 점수를 합산하여 등급을 인증하는 시스템입니다.">
                            <span className={styles.secondProject}>이런 시스템입니다!</span>
                        </Tooltip>

                        <h3>( 주요업무 )</h3>
                        <ul>
                            <li>
                                녹색건축물 인증절차 퍼블리싱 및 기능개발 <br/>
                                - 신청자 - 신청서 작성<br/>
                                - 운영기관 - 신청서 접수 및 검토<br/>
                                - 인증기관 - 현장 심사에 필요한 인력,일정 관리<br/>
                                - 운영기관 - 심의 완료된 건축물 관리
                            </li>
                            <li>참여마당(게시판 형태) 퍼블리싱 및 기능개발</li>
                            <li>녹색건축 인증 수수료 계산 양식 엑셀다운로드 기능개발</li>
                            <li>고객 문의사항 대응 및 유지보수</li>
                            <li>데이터 관리 및 간단한 테이블 작업</li>
                        </ul>
                        <br/>
                        <h3>( 성과 )</h3>
                        <ul>
                            <li>규모가 있는 프로젝트를 진행하며 고객과의 커뮤니케이션 향상</li>
                            <li>Zeplin 활용하여 디자이너와 커뮤니케이션 향상</li>
                            <li>사이트 검색을위해 네이버서치어드바이저 경험</li>
                        </ul>
                        <br/>
                        <h3>기간 : 2020.03.02 ~ 2020.11.30</h3>
                        <h3>주사용기술 : html, css, javascript(jquery), oracle</h3>
                    </div>
                    <br/>
                    <div>
                        <h2>[ 녹색건축물 인증시스템 고도화 ]</h2>
                        <h3>( 주요업무 )</h3>
                        <ul>
                            <li>
                                관리자 전용 메뉴 퍼블리싱 및 기능개발<br/>
                                - 녹색건축물 회원관리<br/>
                                - 건축물의 인증 진행상태 관리<br/>
                                - 10개의 인증기관에 속한 전문인력이 현장에서 심사하는 일정을 달력형태로 관리<br/>
                                - 사용자, 인증기관, 관리자의 질의응답 게시판
                            </li>
                            <li>녹색건축자료실(게시판 형태) 퍼블리싱 및 기능개발</li>
                            <li>녹색건축인증전문가(G-SEED ID) 메뉴 퍼블리싱 및 기능개발<br/>
                                - 운영기관에서 수기로 관리하던 데이터를 사이트에서 관리<br/>
                                - G-SEED ID 인증서 PDF 다운로드 기능개발
                            </li>
                            <li>고객 문의사항 대응 및 유지보수</li>
                            <li>서비스 교육용 매뉴얼 제작에 참여</li>
                        </ul>
                        <br/>
                        <h3>( 성과 )</h3>
                        <ul>
                            <li>G-SEED ID 데이터를 사이트에서 관리하면서 처리기간과 누락데이터가 감소되어 민원의 불편함 해소</li>
                            <li>심사일정을 달력으로 시각화하여 일정 중복 최소화</li>
                            <li>질의사항이 생길경우 .hwp 파일에 작성하고 메일로 전송하여 해결하던 기존 방식을 시스템화하여 처리기간 단축 및 사용자들의 편의성 증가</li>
                        </ul>
                        <br/>
                        <h3>기간 : 2021.03.01 ~ 2021.11.30</h3>
                        <h3>주사용기술 : html, css, javascript(jquery), oracle</h3>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Portfolio;