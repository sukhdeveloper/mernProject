import React from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import '../../css/Frontend/style.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
const FeaturedSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 3,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 2000,
        cssEase: "linear",
            responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                arrows:false
              }
            },
            {
              breakpoint: 320,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false
              }
            }
          ]
      };
    return (
        <div className="FeaturedSlider">
            <Container>
            <Typography variant="h3" component="div" className="sliderHeading">Featured teachers</Typography>
            <Typography paragraph={true} component="div" className="mb-0 subHeadings">Skilled and highly recommended professionals</Typography>
            <Slider {...settings} className="sliderSettings">
                        <div className="SlideWrap">
                                <div className="TeacherProfile">
                                    <div class="profileImg">
                                    <img src="../images/teacher.png" alt="teacherProfile"/>
                                    </div>
                                    <Typography variant="h5" component="div" className="mb-0" align="left">Amanda Smith</Typography>
                                    <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">Dance Teacher</Typography>
                                    <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">Riverside, CA & Online</Typography>
                                        <div className="d-flex align-items-center">
                                           <Stack spacing={1}>
                                                <Rating name="half-rating" className="RatingVal" defaultValue={2.5} precision={0.5} />
                                            </Stack>
                                            <span className="totalReviews"> 
                                            <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">(88)</Typography>
                                            </span>
                                        </div>
                                </div>
                        </div>
                        <div className="SlideWrap">
                        <div className="TeacherProfile">
                                    <div class="profileImg">
                                    <img src="../images/teacher.png" alt="teacherProfile"/>
                                    </div>
                                    <Typography variant="h5" component="div" className="mb-0" align="left">Amanda Smith</Typography>
                                    <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">Dance Teacher</Typography>
                                    <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">Riverside, CA & Online</Typography>
                                        <div className="d-flex align-items-center">
                                           <Stack spacing={1}>
                                                <Rating name="half-rating" className="RatingVal" defaultValue={2.5} precision={0.5} />
                                            </Stack>
                                            <span className="totalReviews"> 
                                            <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">(88)</Typography>
                                            </span>
                                        </div>
                                </div>
                        </div>
                        <div className="SlideWrap">
                        <div className="TeacherProfile">
                                    <div class="profileImg">
                                    <img src="../images/teacher.png" alt="teacherProfile"/>
                                    </div>
                                    <Typography variant="h5" component="div" className="mb-0" align="left">Amanda Smith</Typography>
                                    <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">Dance Teacher</Typography>
                                    <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">Riverside, CA & Online</Typography>
                                        <div className="d-flex align-items-center">
                                           <Stack spacing={1}>
                                                <Rating name="half-rating" className="RatingVal" defaultValue={2.5} precision={0.5} />
                                            </Stack>
                                            <span className="totalReviews"> 
                                            <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">(88)</Typography>
                                            </span>
                                        </div>
                                </div>
                        </div>
                        <div className="SlideWrap">
                        <div className="TeacherProfile">
                                    <div class="profileImg">
                                    <img src="../images/teacher.png" alt="teacherProfile"/>
                                    </div>
                                    <Typography variant="h5" component="div" className="mb-0" align="left">Amanda Smith</Typography>
                                    <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">Dance Teacher</Typography>
                                    <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">Riverside, CA & Online</Typography>
                                        <div className="d-flex align-items-center">
                                           <Stack spacing={1}>
                                                <Rating name="half-rating" className="RatingVal" defaultValue={2.5} precision={0.5} />
                                            </Stack>
                                            <span className="totalReviews"> 
                                            <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">(88)</Typography>
                                            </span>
                                        </div>
                                </div>
                        </div>
                        <div className="SlideWrap">
                        <div className="TeacherProfile">
                                    <div class="profileImg">
                                    <img src="../images/teacher.png" alt="teacherProfile"/>
                                    </div>
                                    <Typography variant="h5" component="div" className="mb-0" align="left">Amanda Smith</Typography>
                                    <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">Dance Teacher</Typography>
                                    <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">Riverside, CA & Online</Typography>
                                        <div className="d-flex align-items-center">
                                           <Stack spacing={1}>
                                                <Rating name="half-rating" className="RatingVal" defaultValue={2.5} precision={0.5} />
                                            </Stack>
                                            <span className="totalReviews"> 
                                            <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">(88)</Typography>
                                            </span>
                                        </div>
                                </div>
                        </div>
                        <div className="SlideWrap">
                        <div className="TeacherProfile">
                                    <div class="profileImg">
                                    <img src="../images/teacher.png" alt="teacherProfile"/>
                                    </div>
                                    <Typography variant="h5" component="div" className="mb-0" align="left">Amanda Smith</Typography>
                                    <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">Dance Teacher</Typography>
                                    <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">Riverside, CA & Online</Typography>
                                        <div className="d-flex align-items-center">
                                           <Stack spacing={1}>
                                                <Rating name="half-rating" className="RatingVal" defaultValue={2.5} precision={0.5} />
                                            </Stack>
                                            <span className="totalReviews"> 
                                            <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">(88)</Typography>
                                            </span>
                                        </div>
                                </div>
                        </div>
                        <div className="SlideWrap">
                        <div className="TeacherProfile">
                                    <div class="profileImg">
                                    <img src="../images/teacher.png" alt="teacherProfile"/>
                                    </div>
                                    <Typography variant="h5" component="div" className="mb-0" align="left">Amanda Smith</Typography>
                                    <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">Dance Teacher</Typography>
                                    <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">Riverside, CA & Online</Typography>
                                        <div className="d-flex align-items-center">
                                           <Stack spacing={1}>
                                                <Rating name="half-rating" className="RatingVal" defaultValue={2.5} precision={0.5} />
                                            </Stack>
                                            <span className="totalReviews"> 
                                            <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">(88)</Typography>
                                            </span>
                                        </div>
                                </div>
                        </div>
                        <div className="SlideWrap">
                        <div className="TeacherProfile">
                                    <div class="profileImg">
                                    <img src="../images/teacher.png" alt="teacherProfile"/>
                                    </div>
                                    <Typography variant="h5" component="div" className="mb-0" align="left">Amanda Smith</Typography>
                                    <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">Dance Teacher</Typography>
                                    <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">Riverside, CA & Online</Typography>
                                        <div className="d-flex align-items-center">
                                           <Stack spacing={1}>
                                                <Rating name="half-rating" className="RatingVal" defaultValue={2.5} precision={0.5} />
                                            </Stack>
                                            <span className="totalReviews"> 
                                            <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">(88)</Typography>
                                            </span>
                                        </div>
                                </div>
                        </div>
                        <div className="SlideWrap">
                        <div className="TeacherProfile">
                                    <div className="profileImg">
                                    <img src="../images/teacher.png" alt="teacherProfile"/>
                                    </div>
                                    <Typography variant="h5" component="div" className="mb-0" align="left">Amanda Smith</Typography>
                                    <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">Dance Teacher</Typography>
                                    <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">Riverside, CA & Online</Typography>
                                        <div className="d-flex align-items-center">
                                           <Stack spacing={1}>
                                                <Rating name="half-rating" className="RatingVal" defaultValue={2.5} precision={0.5} />
                                            </Stack>
                                            <span className="totalReviews"> 
                                            <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">(88)</Typography>
                                            </span>
                                        </div>
                                </div>
                        </div>
                        <div className="SlideWrap">
                        <div className="TeacherProfile">
                                    <div class="profileImg">
                                    <img src="../images/teacher.png" alt="teacherProfile"/>
                                    </div>
                                    <Typography variant="h5" component="div" className="mb-0" align="left">Amanda Smith</Typography>
                                    <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">Dance Teacher</Typography>
                                    <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">Riverside, CA & Online</Typography>
                                        <div className="d-flex align-items-center">
                                           <Stack spacing={1}>
                                                <Rating name="half-rating" className="RatingVal" defaultValue={2.5} precision={0.5} />
                                            </Stack>
                                            <span className="totalReviews"> 
                                            <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">(88)</Typography>
                                            </span>
                                        </div>
                                </div>
                        </div>
                        <div className="SlideWrap">
                        <div className="TeacherProfile">
                                    <div className="profileImg">
                                    <img src="../images/teacher.png" alt="teacherProfile"/>
                                    </div>
                                    <Typography variant="h5" component="div" className="mb-0" align="left">Amanda Smith</Typography>
                                    <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">Dance Teacher</Typography>
                                    <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">Riverside, CA & Online</Typography>
                                        <div className="d-flex align-items-center">
                                           <Stack spacing={1}>
                                                <Rating name="half-rating" className="RatingVal" defaultValue={2.5} precision={0.5} />
                                            </Stack>
                                            <span className="totalReviews"> 
                                            <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">(88)</Typography>
                                            </span>
                                        </div>
                                </div>
                        </div>
                        <div className="SlideWrap">
                        <div className="TeacherProfile">
                                    <div className="profileImg">
                                    <img src="../images/teacher.png" alt="teacherProfile"/>
                                    </div>
                                    <Typography variant="h5" component="div" className="mb-0" align="left">Amanda Smith</Typography>
                                    <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">Dance Teacher</Typography>
                                    <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">Riverside, CA & Online</Typography>
                                        <div className="d-flex align-items-center">
                                           <Stack spacing={1}>
                                                <Rating name="half-rating" className="RatingVal" defaultValue={2.5} precision={0.5} />
                                            </Stack>
                                            <span className="totalReviews"> 
                                            <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">(88)</Typography>
                                            </span>
                                        </div>
                                </div>
                        </div>
                        <div className="SlideWrap">
                        <div className="TeacherProfile">
                                    <div className="profileImg">
                                    <img src="../images/teacher.png" alt="teacherProfile"/>
                                    </div>
                                    <Typography variant="h5" component="div" className="mb-0" align="left">Amanda Smith</Typography>
                                    <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">Dance Teacher</Typography>
                                    <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">Riverside, CA & Online</Typography>
                                        <div className="d-flex align-items-center">
                                           <Stack spacing={1}>
                                                <Rating name="half-rating" className="RatingVal" defaultValue={2.5} precision={0.5} />
                                            </Stack>
                                            <span className="totalReviews"> 
                                            <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">(88)</Typography>
                                            </span>
                                        </div>
                                </div>
                        </div>
                        <div className="SlideWrap">
                        <div className="TeacherProfile">
                                    <div className="profileImg">
                                    <img src="../images/teacher.png" alt="teacherProfile"/>
                                    </div>
                                    <Typography variant="h5" component="div" className="mb-0" align="left">Amanda Smith</Typography>
                                    <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">Dance Teacher</Typography>
                                    <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">Riverside, CA & Online</Typography>
                                        <div className="d-flex align-items-center">
                                           <Stack spacing={1}>
                                                <Rating name="half-rating" className="RatingVal" defaultValue={2.5} precision={0.5} />
                                            </Stack>
                                            <span className="totalReviews"> 
                                            <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">(88)</Typography>
                                            </span>
                                        </div>
                                </div>
                        </div>
                        <div className="SlideWrap">
                        <div className="TeacherProfile">
                                    <div className="profileImg">
                                    <img src="../images/teacher.png" alt="teacherProfile"/>
                                    </div>
                                    <Typography variant="h5" component="div" className="mb-0" align="left">Amanda Smith</Typography>
                                    <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">Dance Teacher</Typography>
                                    <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">Riverside, CA & Online</Typography>
                                        <div className="d-flex align-items-center">
                                           <Stack spacing={1}>
                                                <Rating name="half-rating" className="RatingVal" defaultValue={2.5} precision={0.5} />
                                            </Stack>
                                            <span className="totalReviews"> 
                                            <Typography paragraph={true} component="div" className="mb-0 TeacherInfo" align="left">(88)</Typography>
                                            </span>
                                        </div>
                                </div>
                        </div>
                </Slider>
            </Container>
        </div>
    )
}

export default FeaturedSlider
