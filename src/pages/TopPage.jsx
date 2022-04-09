import React from 'react';
import { useTop } from 'hooks/useTop';
import { Col, Row } from 'antd';
import { Profile } from 'components/common/Profile/Profile';

export const TopPage = () => {
  const top = useTop();

  const profiles = top.map((profile, index) => (
    <Col span={24} key={index}>
      <Profile
        index={index + 1}
        src={profile.image_url}
        name={profile.name}
        description={`Посмотрел: ${profile.tiktoks_watched}`}
      />
    </Col>
  ));

  return <Row gutter={[0, 10]}>{profiles}</Row>;
};
