import styled from 'styled-components';

export default styled.div`
  max-width: 1200px;
  margin: auto;

  .page-header {
    margin-top: 20px;

    a {
      font-size: 0.8em;
      font-weight: initial;
    }
  }

  .page-subheader {
    margin-top: 20px;
    margin-bottom: 10px;

    button {
      margin-left: 10px;
    }
  }

  .ingredient-list {
    /* padding-left: 40px; */
    ul {
      margin-top: 0;
    }
  }
`;
