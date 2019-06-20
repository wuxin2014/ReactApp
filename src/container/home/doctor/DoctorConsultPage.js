import React from 'react';
import DoctorConsultItem from '../../../components/home/doctor/DoctorConsultItem';

const data = [
    {
      id: 1,
      name: '王',
      headUrl: '/static/img/list_pic.jpg',
      major: ['口腔科', '美白保养', '护齿保健'],
    },
    {
      id: 2,
      name: '李',
      headUrl: '/static/img/list_pic.jpg',
      major: ['口腔科', '美白保养', '护齿保健'],
    },
    {
      id: 3,
      name: '陆',
      headUrl: '/static/img/list_pic.jpg',
      major: ['口腔科', '美白保养'],
    },
];

const DoctorConsultPage = () => {
  return (
      <div style={{width: '100%'}}>
        <ul>
          {
            data.map((item) => {
              return (
                <DoctorConsultItem key={item.id} item={item} />
              );
            })
          }
        </ul>
      </div>
  );
};

export default DoctorConsultPage;