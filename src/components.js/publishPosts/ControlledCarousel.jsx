import React from 'react';
import BackgroundPost from './BackgroundPost';

function ControlledCarousel(props) {
  // Array form body passed through props up to here
  const arrayFromBody = props.arrayFromBody;

  return (
    <div className='customContainer'>
      <div
        id='carouselExampleControls'
        class='carousel slide'
        data-bs-ride='carousel'
      >
        <div class='carousel-inner'>
          {/* here is the element that show before anyone types something */}

          <div class='carousel-item active samplePost'>
            <BackgroundPost key='' id='' title='' address='' content='' />
          </div>

          {/* --------------------------------------------------------------- */}

          {/* // here i am looping through an array taken in the BODY FILE and
      // i am setting the value of title, address and content by holding each element
      // of the array from BODY FILE which is made of objects using the
      map function */}
          {arrayFromBody.map((arrayItem, index) => {
            return (
              <div class='carousel-item active'>
                <BackgroundPost
                  key={index}
                  id={index}
                  title={arrayItem.title}
                  address={arrayItem.address}
                  content={arrayItem.content}
                />
              </div>
            );
          })}
        </div>
        <button
          class='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleControls'
          data-bs-slide='prev'
        >
          <span class='carousel-control-prev-icon' aria-hidden='true'></span>
          <span class='visually-hidden'>Previous</span>
        </button>
        <button
          class='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleControls'
          data-bs-slide='next'
        >
          <span class='carousel-control-next-icon' aria-hidden='true'></span>
          <span class='visually-hidden'>Next</span>
        </button>
      </div>
    </div>
  );
}

export default ControlledCarousel;
