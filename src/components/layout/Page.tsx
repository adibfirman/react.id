import * as React from 'react';
import styled from '@emotion/styled';
import { widths, heights } from '../../styles/variables';

const Article = styled('article')`
  position: relative;
  display: grid;
  flex: 1;
  grid-template-columns: 1fr 1fr minmax(auto, ${widths.md}px) 1fr 1fr;
  margin-top: ${heights.header}px;
`;

const Div = styled('div')`
  display: block;
  flex: 1;
  position: relative;
`;

interface PageProps {
  className?: string;
  isArticle?: boolean;
}

const Page: React.FC<PageProps> = ({ children, isArticle, className }) => {
  if (isArticle) {
    return <Article className={className}>{children}</Article>;
  }

  return <Div className={className}>{children}</Div>;
};

Page.defaultProps = {
  className: undefined,
  isArticle: false,
};

export default Page;
