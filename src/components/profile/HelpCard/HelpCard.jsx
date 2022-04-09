import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Link } from 'react-router-dom';
import { BaseCard } from 'components/common/cards/BaseCard/BaseCard';
import help from 'assets/images/help.png';
import { routesPaths } from 'routes/routesPaths';

export const HelpCard = () => {
  const theme = useContext(ThemeContext);

  return (
    <Link to={routesPaths.MORE_PAGE.path}>
      <BaseCard title="Помощь" icon={help} background={theme.colors.background.additional2} />
    </Link>
  );
};
