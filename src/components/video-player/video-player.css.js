import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Browser = styled.div`
  padding: 35px 1px 1px;
  margin: 40px auto;
  width: 640px;
  max-width: 90%;
  height: auto;
  overflow: hidden;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  position: relative;
  transition: width 800ms, height 800ms, padding 100ms;
`;

export const Title = styled.h2`
  position: absolute;
  width: 100%;
  text-align: center;
  top: 5px;
  font-size: 14px;
  color: #666;
  -webkit-transition: opacity 200ms;
  -o-transition: opacity 200ms;
  -moz-transition: opacity 200ms;
  -ms-transition: opacity 200ms;
  transition: opacity 200ms;
  margin: 0;
`;

export const Buttons = styled.ul`
  position: absolute;
  top: 7px;
  left: 10px;
  margin: 0;
  padding: 0;

  & > li {
    display: inline-block;
    width: 11px;
    height: 11px;
    border-radius: 10px;
    margin-right: 10px;
    cursor: pointer;
    position: relative;
  }

  & > li:hover:after {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 4px;
    background: black;
    opacity: 0.5;
    position: absolute;
    top: 2px;
    left: 2px;
  }
`;

export const Close = styled.li`
  background-color: #ff5011;
`;

export const Minimize = styled.li`
  background-color: #ffc000;
`;

export const Maximize = styled.li`
  background-color: #4ee949;
`;

export const Screen = styled.div`
  position: relative;
  height: auto;
  width: auto;
  overflow-x: hidden;
  overflow-y: auto;
  transition: height 800ms;
`;

export const Overlay = styled.span`
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: ${props =>
    props.isPlaying
      ? `url(${props => props.overlayImage}) no-repeat center center;`
      : 'none'};
  z-index: 50;
  cursor: pointer;
`;

export const Video = styled.video`
  display: block;
  width: 100%;
  height: auto;
  background: #000;
  transition: height 800ms, width 800ms;
`;
