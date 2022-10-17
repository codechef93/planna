import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const CommentInput = ({ name, text, setRef, placeholder, style, onChange }) => {
  return (
    <div style={style} className="input comment-input">
      <div className={'flex_1'}>
        <textarea
          ref={setRef}
          name={name}
          value={text}
          placeholder={placeholder}
          type={'text'}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          rows={4}
        />
      </div>
    </div>
  );
};

CommentInput.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  isSecure: PropTypes.bool,
  style: PropTypes.object,
  onChange: PropTypes.func,
  setRef: PropTypes.object
};
export default CommentInput;
