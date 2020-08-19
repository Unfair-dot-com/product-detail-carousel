const React = require('react');
const PropTypes = require('prop-types');
const style = require('styled-components').default;
const { css } = require('styled-components');

const width = ({ score }) => css`width: ${(score / 5) * 84}px;`;

const fill = ({ color }) => css`fill='${color}'`;

const Container = style.div`
  position: relative;
  height: 16px;
  margin: 8px 0;`;

const StarsTemplate = style.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 84px;
  height: 14px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg'
  ${fill} viewBox='0 0 78 13' width='78' height='13'%3E%3Cpath
  d='M6.64 10.94L3.7
  12.48c-.97.52-1.6.05-1.43-1.04l.56-3.26-2.36-2.3c-.8-.78-.55-1.54.54-1.7L4.3
  3.7 5.75.76c.5-1 1.28-1 1.77 0L9 3.7l3.26.48c1.1.16 1.34.92.55
  1.7l-2.36 2.3.56 3.26c.2 1.1-.46 1.56-1.44 1.04l-2.92-1.54zm16 0l-2.93
  1.54c-.97.52-1.6.05-1.43-1.04l.56-3.26-2.36-2.3c-.8-.78-.55-1.54.54-1.7l3.28-.47L21.75.76c.5-1
  1.28-1 1.77 0L25 3.7l3.26.48c1.1.16 1.34.92.55 1.7l-2.36 2.3.56
  3.26c.2 1.1-.46 1.56-1.44 1.04l-2.92-1.54zm16 0l-2.93
  1.54c-.97.52-1.6.05-1.43-1.04l.56-3.26-2.36-2.3c-.8-.78-.55-1.54.54-1.7l3.28-.47L37.75.76c.5-1
  1.28-1 1.77 0L41 3.7l3.26.48c1.1.16 1.34.92.55 1.7l-2.36 2.3.56 3.26c.2
  1.1-.46 1.56-1.44 1.04l-2.92-1.54zm16 0l-2.93
  1.54c-.97.52-1.6.05-1.43-1.04l.56-3.26-2.36-2.3c-.8-.78-.55-1.54.54-1.7l3.28-.47L53.75.76c.5-1
  1.28-1 1.77 0L57 3.7l3.26.48c1.1.16 1.34.92.55 1.7l-2.36 2.3.56 3.26c.2
  1.1-.46 1.56-1.44 1.04l-2.92-1.54zm16 0l-2.93
  1.54c-.97.52-1.6.05-1.43-1.04l.56-3.26-2.36-2.3c-.8-.78-.55-1.54.54-1.7l3.28-.47L69.75.76c.5-1
  1.28-1 1.77 0L73 3.7l3.26.48c1.1.16 1.34.92.55 1.7l-2.36 2.3.56
  3.26c.2 1.1-.46 1.56-1.44 1.04l-2.92-1.54z'/%3E%3C/svg%3E");`;

const Background = style(StarsTemplate)``;

const Score = style(StarsTemplate)`
  ${width};`;

const Count = style.p`
  margin: 0;
  padding: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  font-size: 16px;
  font-weight: 400;
  color: #221924;
  line-height: 1.2;

  position: absolute;
  left: 88px;
  color: #615c65;
  line-height: 1;`;

const Reviews = ({ score, count }) => (
  <Container>
    <Background color="%23d9d8db" />
    <Score score={score} color="%23f6b71d" />
    <Count>{count}</Count>
  </Container>
);

Reviews.propTypes = {
  score: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};

module.exports = Reviews;
