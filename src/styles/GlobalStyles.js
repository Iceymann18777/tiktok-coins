import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
    }

    html, body {
        height: 100%;
    }

    body {
        min-width: 320px;
    }

    .Icon {
        margin: 0 auto;
    }

    .ant-form-item-label > label {
        color: ${theme.colors.text.additional};
    }
`;
