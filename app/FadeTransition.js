import React from 'react';
import { CSSTransition } from 'react-transition-group';

const FadeTransition = ({ children, ...props }) => {
  return (
    <CSSTransition
      {...props}
      timeout={300} // 페이드 효과 지속 시간 (밀리초)
      classNames="fade"
    >
      {children}
    </CSSTransition>
  );
};

export default FadeTransition;