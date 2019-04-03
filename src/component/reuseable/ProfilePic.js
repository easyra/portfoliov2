import React from 'react';

const ProfilePic = () => {
  //linkedin
  let src =
    'https://pbs.twimg.com/profile_images/1111520035514642432/CXhAHy-X_400x400.png';
  // 'https://media.licdn.com/dms/image/C5603AQHcTgDMY8JZZg/profile-displayphoto-shrink_200_200/0?e=1559779200&v=beta&t=tVwE7W4YQKUR2clFqjmfHxuG7yAA1PSzUnP0bYo-Yqs';

  return <img className='profilepic' src={src} />;
};

export default ProfilePic;
