import React from 'react';

interface Props {
    text: string
    className?: string
    tonic?: boolean
}

const Title: React.FC<Props> = ({ text, className, tonic }: Props) => {
  let classValue = 'title';
  if (tonic) classValue += ' tonic';
  if (className) classValue += ` ${className}`;

  return (
    <div className={classValue}>
      <h2>{text}</h2>
    </div>
  );
};

export default Title;
