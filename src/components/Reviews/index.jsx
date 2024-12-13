import SectionsContainer from '../SectionsContainer';
import { PricesSection, Name, HeaderText, Comment } from './Reviews.styled';

// import Swiper core and required modules
import { Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const listComment = [
  {
    id: 1,
    name: 'Max',
    comment: "Great work on this feature, it's exactly what we needed!",
  },
  {
    id: 2,
    name: 'Sophia',
    comment: 'This approach seems a bit too complex; maybe we can simplify it?',
  },
  {
    id: 3,
    name: 'Ethan',
    comment: "Love how you handled the edge cases, it's very robust!",
  },
  {
    id: 4,
    name: 'Olivia',
    comment: 'Can we add more unit tests to cover the new functionality?',
  },
  {
    id: 5,
    name: 'James',
    comment:
      'I think the UI could use a bit more refinement, especially in the mobile view.',
  },
  {
    id: 6,
    name: 'Liam',
    comment:
      'Nice job, but the logic here might be prone to errors when input values are unexpected.',
  },
  {
    id: 7,
    name: 'Amelia',
    comment:
      "Could you document this part a bit more? It's hard to follow without context.",
  },
];

const Reviews = () => {
  return (
    <PricesSection>
      <SectionsContainer>
        <HeaderText>Reviews</HeaderText>
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={5}
          navigation
        >
          {listComment.map(({ name, comment, id }) => (
            <SwiperSlide
              key={id}
              style={{
                backgroundColor: 'white',
                maxWidth: 260,
                height: 80,
                padding: 20,
                borderRadius: 20,
              }}
            >
              <Name>{name}</Name>
              <Comment style={{ wordBreak: 'break-word' }}>{comment}</Comment>
            </SwiperSlide>
          ))}
        </Swiper>
      </SectionsContainer>
    </PricesSection>
  );
};

export default Reviews;
