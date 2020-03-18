import React, { FunctionComponent } from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaQuestionCircle, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa';
import styled from 'styled-components';
import { ISocialChannels } from '../../utils/models';

interface ISocialChannelListProps {
  channels: ISocialChannels;
}

// Returns a proper icon for a given channel
const createSocialIcon = (channel: keyof ISocialChannels) => {
  switch (channel) {
    case 'twitter':
      return <FaTwitter />;
    case 'facebook':
      return <FaFacebook />;
    case 'github':
      return <FaGithub />;
    case 'instagram':
      return <FaInstagram />;
    case 'linkedin':
      return <FaLinkedin />;
    case 'twitch':
      return <FaTwitch />;
    case 'youtube':
      return <FaYoutube />;
  }

  return <FaQuestionCircle />;
};

const StyledSocialChannels = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const StyledSocialChannel = styled.li`
  display: inline-block;
  margin: 0 10px;
  font-size: 1.6em;
  opacity: 0.7;
  transition: opacity 0.5s;
  &:hover {
    opacity: 1;
  }
`;

const SocialChannelList: FunctionComponent<ISocialChannelListProps> = ({ channels }) => (
  <StyledSocialChannels>
    {Object.keys(channels)
      .filter(c => channels[c] !== '')
      .map((channel, index) => (
        <StyledSocialChannel key={index}>
          <a href={channels[channel]} target={`_blank`} rel={`noopener`} aria-label={channel}>
            {createSocialIcon(channel as keyof ISocialChannels)}
          </a>
        </StyledSocialChannel>
      ))}
  </StyledSocialChannels>
);

export default SocialChannelList;
