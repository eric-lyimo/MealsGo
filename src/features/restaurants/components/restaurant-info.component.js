import React from "react";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import Styled from 'styled-components/native'
import star from '../../../../assets/star'
import open from '../../../../assets/open'

const Tittle=Styled(Text) ` padding: ${(props)=>props.theme.sizes[1]}; color: ${(props)=> props.theme.colors.ui.primary};`

const RestaurantCardCover = Styled(Card.Cover)`background-color: ${(props)=>props.theme.colors.ui.tertiary}; padding:20px; `
  
const RestaurantCard=Styled(Card) `background-color: ${(props)=> props.theme.colors.ui.secondary}; margin: ${(props)=>props.theme.sizes[1]}`

const Spacer=Styled(View)`padding-left: ${(props)=>props.theme.sizes[1]}; padding-right: ${(props)=>props.theme.sizes[1]}`

const Rating=Styled(View)`flex-direction: row padding-left: ${(props)=>props.theme.sizes[1]}`

const Section=Styled(View)`
flex-direction: row
align-items: center`

const SectionEnd=Styled(View)`
flex: 1
flex-direction: row
justify-content: flex-end
padding-right: ${(props)=>props.theme.sizes[2]}`

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurants",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily=true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)))

  return (
    <RestaurantCard elevation={5} >
      <RestaurantCardCover key={name}  source={require("../../../../assets/piza.webp")} />
      <Tittle>{name}</Tittle>
      <Section>
        <Rating>
          {ratingArray.map(()=>( 
         <SvgXml xml={star} width={20} height={20}></SvgXml>
      ))}
      </Rating>
      <SectionEnd>
        {isClosedTemporarily &&(
          <Text variant="label" style={{color:"red"}}>CLOSED TEMPORARLY</Text>
        )}
        <Spacer/>
        {isOpenNow && <SvgXml xml={open} width={20} height={20}SvgXml/>}
        <Spacer/>
        <Image style={{width:20,height:20}} source={require("../../../../assets/index.png")}></Image>
      </SectionEnd>
      </Section>
      <Tittle>{address}</Tittle>
    </RestaurantCard>
  );
};



