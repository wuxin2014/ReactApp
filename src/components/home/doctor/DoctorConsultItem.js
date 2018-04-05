import React from 'react';
import './doctorConsultItem.css';

const DoctorConsultItem = ({item}) => {
  return (
    <div className="doctor_consult_item_wrap">
      <img src={item.headUrl} alt="你好" />
      <div className="doctor_consult_item_right">
        <h4>{`${item.name}医生`}</h4>
        <div className="major_wrap">
          {
            item.major.map((majorItem, index) => {
              return (<span key={index}>{majorItem}</span>);
            })
          }
        </div>
      </div>
    </div>
  );
};

export default DoctorConsultItem;