import React from 'react';
import './_PersonalPage.scss';

const PersonalPage = () => {
  return (
    <div className='personalPage'>
        <p className='personalPage_p'> Made with <span className='fa fa-heart personalPage_p_span'/> by <a href='https://juanurani.netlify.app/' target='_blank' rel='noopener noreferrer' className='personalPage_p_a'>Juan</a></p>
    </div>
  )
}

export default PersonalPage;