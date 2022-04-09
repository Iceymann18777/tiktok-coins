import React from 'react';
import { Select as AntSelect } from 'antd';
import * as S from './Select.styles';

export const { Option } = AntSelect;

export const Select = ({ children, ...props }) => <S.Select {...props}>{children}</S.Select>;
