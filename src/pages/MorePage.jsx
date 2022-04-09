import React, { useMemo } from 'react';
import { Row, Col } from 'antd';
import { moreLinksData } from 'constants/data/moreLinksData';
import { MoreLinkItem } from 'components/more/MoreLinkItem/MoreLinkItem';
import { MoreTitle } from 'components/more/MoreTitle/MoreTitle';
import { MoreTermsOfUse } from 'components/more/MoreTermsOfUse/MoreTermsOfUse';

export const MorePage = () => {
  const linksMemo = useMemo(
    () =>
      moreLinksData.map((link) => (
        <Col key={link.path} span={24}>
          <MoreLinkItem {...link} />
        </Col>
      )),
    [],
  );

  return (
    <Row gutter={[0, 20]}>
      <Col span={24}>
        <MoreTitle>ПОЛЕЗНЫЕ ССЫЛКИ</MoreTitle>
      </Col>

      <Row gutter={[0, 10]}>{linksMemo}</Row>

      <Col span={24}>
        <MoreTermsOfUse path="#">Пользовательское соглашение</MoreTermsOfUse>
      </Col>
    </Row>
  );
};
