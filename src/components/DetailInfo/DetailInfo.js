import React from "react";
import { isEmpty } from "lodash";
import DetailInfoStyled from "./DetailInfo.styles";

const DetailInfo = props => {
  const { address, hours, closed, phone } = props;
  const noneText = "정보없음";

  return (
    <DetailInfoStyled>
      <h2 className="info-title">기본정보</h2>
      <div className="info-text">
        <p className="info-item">
          <span className="info-item-title">주소</span>
          <span className="info-item-text">{isEmpty(address) ? noneText : address}</span>
        </p>
        <div className="info-hours">
          <span className="info-item-title">영업시간</span>
          <div className="info-hours-box">
            {isEmpty(hours)
              ? noneText
              : hours?.map((h, i) => (
                  <p className="info-hours-paragraph" key={i}>
                    {h}
                  </p>
                ))}
          </div>
        </div>
        <p className="info-item">
          <span className="info-item-title">휴무일</span>
          <span className="info-item-text">{isEmpty(closed) ? noneText : closed}</span>
        </p>
        <p className="info-item">
          <span className="info-item-title">전화번호</span>
          <span className="info-item-text">{isEmpty(phone) ? noneText : phone}</span>
        </p>
      </div>
    </DetailInfoStyled>
  );
};

DetailInfo.defaultProps = {
  address: null,
  phone: null,
  // hours: ["평일 09:00 - 23:00", "주말 10:00 - 23:00"],
  hours: null,
  closed: null,
};

export default DetailInfo;
