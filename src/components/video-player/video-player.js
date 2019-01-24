import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Browser, Title, Buttons, Close, Minimize, Maximize, Screen, Overlay, Video } from './video-player.css';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this.video = React.createRef();
    this.state = {
      isPlaying: false
    };
  }

  componentDidMount() {
    this.video.current.play();
  }

  overlayClicked = () => {
      if (this.state.isPlaying) {
        this.video.current.pause();
      }
      else {
        this.video.current.play();
      }
      this.setState({isPlaying: !this.state.isPlaying});
  };

  render() {
    const { title, overlay, poster, sources } = this.props;

    return (
      <Browser>
        <Title>{title}</Title>
        <Buttons>
          <Close />
          <Minimize />
          <Maximize />
        </Buttons>
        <Screen>
          <Overlay onClick={this.overlayClicked} isPlaying={this.state.isPlaying} overlayImage={overlay.publicURL}/>
          <Video ref={this.video} title={title} width="640" height="400" poster={poster}>
            {sources.map(source =>
              <source src={source.src} type={source.type} />
            )}
          </Video>
        </Screen>
      </Browser>
    );
  }
}


VideoPlayer.propTypes = {
  title: PropTypes.string,
  overlay: PropTypes.string,
  poster: PropTypes.string,
  sources: PropTypes.array
};

export default VideoPlayer;
