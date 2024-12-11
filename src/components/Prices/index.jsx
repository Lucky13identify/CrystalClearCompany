import SectionsContainer from '../SectionsContainer';
import { PricesSection, Name, HeaderText, Comment } from './Prices.styled';

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
    comment:
      'CommentCommentCommentCommentCommentCommentCommentCommentCommentComment',
  },
  {
    id: 2,
    name: 'Sophia',
    comment:
      'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem',
  },
  {
    id: 3,
    name: 'Ethan',
    comment: 'TextTextTextTextTextTextTextTextTextTextTextTextTextTextText',
  },
  {
    id: 4,
    name: 'Olivia',
    comment: 'RandomRandomRandomRandomRandomRandomRandomRandomRandomRandom',
  },
  {
    id: 5,
    name: 'James',
    comment: 'SampleSampleSampleSampleSampleSampleSampleSampleSampleSample',
  },
  {
    id: 6,
    name: 'James',
    comment: 'SampleSampleSampleSampleSampleSampleSampleSampleSampleSample',
  },
  {
    id: 7,
    name: 'James',
    comment: 'SampleSampleSampleSampleSampleSampleSampleSampleSampleSample',
  },
];

const Prices = () => {
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

export default Prices;
