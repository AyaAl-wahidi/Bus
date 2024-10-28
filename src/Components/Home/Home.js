import '../Home/Home.css';
import React, { useState } from 'react';
import { Button, Space } from 'antd';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import corsImage1 from '../images/corsal1.webp';  
import corsImage2 from '../images/corsal2.webp'; 
import corsImage3 from '../images/corsal3.webp'; 
import corsImage4 from '../images/corsal4.webp'; 

const Home = () => {
    const [size, setSize] = useState('large'); 

    return (
        <>
            <Carousel>
                <Carousel.Item interval={10000}>
                    <div
                        style={{
                            backgroundImage: `url(${corsImage1})`,
                            height: "570px",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <Carousel.Caption>
                            <h3 className="carousel-caption-text">Reach Your Destination With Us</h3>
                            <h4 className="carousel-caption-text" style={{ paddingTop: '0px' }}>Our Partner</h4>
                            <Space size="small" style={{ paddingTop: '15px' }}>
                                <Button type="primary" size={size} style={{ backgroundColor: '#F19E39' }}>
                                    LTUC
                                </Button>
                            </Space>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={900}>
                    <div
                        style={{
                            backgroundImage: `url(${corsImage2})`,
                            height: "570px",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <Carousel.Caption>
                            <h3 className="carousel-caption-text">Reach Your Destination With Us</h3>
                            <h4 className="carousel-caption-text" style={{ paddingTop: '0px' }}>Our Partner</h4>
                            <Space size="small" style={{ paddingTop: '15px' }}>
                                <Button type="primary" size={size} style={{ backgroundColor: '#F19E39' }}>
                                    LTUC
                                </Button>
                            </Space>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={900}>
                    <div
                        style={{
                            backgroundImage: `url(${corsImage3})`,
                            height: "570px",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <Carousel.Caption>
                            <h3 className="carousel-caption-text">Reach Your Destination With Us</h3>
                            <h4 className="carousel-caption-text" style={{ paddingTop: '0px' }}>Our Partner</h4>
                            <Space size="small" style={{ paddingTop: '15px' }}>
                                <Button type="primary" size={size} style={{ backgroundColor: '#F19E39' }}>
                                    LTUC
                                </Button>
                            </Space>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={900}>
                    <div
                        style={{
                            backgroundImage: `url(${corsImage4})`,
                            height: "570px",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <Carousel.Caption>
                            <h3 className="carousel-caption-text">Reach Your Destination With Us</h3>
                            <h4 className="carousel-caption-text" style={{ paddingTop: '0px' }}>Our Partner</h4>
                            <Space size="small" style={{ paddingTop: '15px' }}>
                                <Button type="primary" size={size} style={{ backgroundColor: '#F19E39' }}>
                                    LTUC
                                </Button>
                            </Space>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Home;
