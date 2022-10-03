import { NextComponentType, NextPage } from "next";
import Image from "next/image";
import { ReactNode } from "react";

interface Props {
  largeImage: string
  smallImage: string
  name: string
  details: string
  state: string
}

const ProfileActivity: NextPage<Props> = (props) => {
  const {largeImage, smallImage, name, details, state} = props

  return ( 
    <div>
      
    </div>
  )
};

export default ProfileActivity;
