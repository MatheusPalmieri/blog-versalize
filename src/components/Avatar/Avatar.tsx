import { BigHead, AvatarProps as CharacterProps } from '@bigheads/core';
import AvatarCharacter from '../CardPost/avatar.json';

interface AvatarOptionsProps {
  [key: string]: {
    accessory: string;
    body: string;
    circleColor: string;
    clothing: string;
    clothingColor: string;
    eyebrows: string;
    eyes: string;
    faceMask: boolean;
    faceMaskColor: string;
    graphic: string;
    hair: string;
    hairColor: string;
    hat: string;
    hatColor: string;
    lashes: boolean;
    lipColor: string;
    mask: boolean;
    mouth: string;
    skinTone: string;
  };
}

interface AvatarProps {
  userId: number;
}

export const Avatar = ({ userId }: AvatarProps) => {
  const options = AvatarCharacter as AvatarOptionsProps;
  const character = options[userId];

  if (character) {
    return <BigHead {...(character as CharacterProps)} />;
  } else {
    return <BigHead />;
  }
};
