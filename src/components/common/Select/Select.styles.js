import styled from 'styled-components';
// import { Select as AntSelect } from 'antd';

// export const Select = styled(AntSelect)``;

export const Select = styled.select`
  width: 100%;
  padding: 0 11px;
  height: 42px;
  background: #f2f3f5;
  border: 1px solid #d9d9d9;
  transition: all 0.3s ease;

  border-radius: ${(props) => props.theme.border.base};

  &:hover {
    border-color: #8597ff;
    border-right-width: 1px !important;
  }

  &:focus {
    border-color: #8597ff;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgb(91 109 255 / 20%);
  }
`;
