import React from 'react';
import { useSwipeable } from 'react-swipeable';
import * as S from './Drawer.styles';

export const Drawer = ({ setDrawerVisible, children, ...props }) => {
  const handlers = useSwipeable({
    onSwipedDown: () => setDrawerVisible(false),
  });

  return (
    <S.Drawer height={450} placement="bottom" onClose={() => setDrawerVisible(false)} {...props}>
      <S.SwipeWrapper className="swipe" {...handlers}>
        {children}
      </S.SwipeWrapper>
    </S.Drawer>
  );
};
