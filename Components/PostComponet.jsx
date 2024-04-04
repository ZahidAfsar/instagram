import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import  React, { useState } from "react";
import imageBallon from '../assets/imageBallon.png'
import cat from '../assets/flowers.jpg'
import StoriesComponent from "./StoriesComponent";
import { faHeart, faPaperPlane, faComment, faBookmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser, faUserCircle } from "@fortawesome/free-solid-svg-icons";

const PostComponet = () => {

  const [posts, setPosts] = useState([
    {
      ProfilePicture: imageBallon,
      Username: "Mr. imageBallon",
      Image: cat,
      NumOfLikes: "9,999",
      Description: "Look at this Cool cat! So Inspiring!",
      Comments: [{ UserWhoCommented: "caterpop_89", UsersComment: "Das me!" }],
    },
    {
      ProfilePicture: cat,
      Username: "caterpop_89",
      Image: imageBallon,
      NumOfLikes: "6,545",
      Description: "FOR FREE L O L XD??? Follow my boy on twitch!",
      Comments: [
        {
          UserWhoCommented: "Mr. imageBallon",
          UsersComment: "L O L Thanks caterpop_89!",
        },
      ],
    },
  ]);

  return (
   <ScrollView>
    <StoriesComponent />
    {
      posts.map((post, idx) => {
        return (
          <View key={idx} >

            {/* This div will be top of our posts user img, username, 3 dots */}
            <View style={Style.ProfileNav} >
              <View style={{ paddingTop: 10 }} >
                <Image source={post.ProfilePicture} style={Style.ImageStyle} />
              </View>
              <View style={Style.ProfileUsername}>
                <Text style={Style.UsernameText}>{post.Username}</Text>
              </View>
              <View style={Style.DotsDiv} >
                <Text style={Style.Dots} >.</Text>
                <Text style={Style.Dots} >.</Text>
                <Text style={Style.Dots} >.</Text>
              </View>
            </View>
            {/* This div will be our post image */}
            <View >
              <Image source={post.Image} style={Style.ImagePost} />
            </View>
            {/* This will be our icons div and likes parent div */}
            <View style={{ flexDirection: 'row' }}>
                   {/* this will be our icons div */}
              <View style={{ flex: 1, flexDirection: "row", paddingLeft: 5, paddingRight: 14, paddingTop: 10}} >
                <FontAwesomeIcon icon={faHeart} style={{ color: 'white', marginRight: 20 }} size={25} />
                <FontAwesomeIcon icon={faComment} style={{ color: 'white', marginRight: 20, transform: [{rotateY: '180deg'}] }} size={25} />
                <FontAwesomeIcon icon={faPaperPlane} style={{ color: 'white', marginRight: 20 }} size={25} />
              </View>
              <View style={{flex: 1, alignItems: "flex-end", paddingRight: 14, justifyContent: 'center', paddingTop: 10}} >
              <FontAwesomeIcon icon={faBookmark} style={{ color: 'white', marginRight: 20 }} size={25} />
              </View>
            </View>
            {/* likes div */}
            <View>
              <Text style={{ color: 'white', paddingLeft: 8, paddingTop: 5, fontWeight: 'bold' }} >{post.NumOfLikes} Likes</Text>
            </View>
            {/* Post Description div */}
            <View style={{ flex: 1, flexDirection: 'row' }} >
              <Text style={{ color: "white", fontWeight: 'bold', paddingLeft: 8, paddingTop: 5, paddingRight: 5 }} >{post.Username}</Text>
              <Text style={{ color: 'white', paddingTop: 5, }} >{post.Description}</Text>
            </View>
            {
              post.Comments.map((Comments, idx) => {
                return(
                  <View key={idx} style={{flex: 1, flexDirection: 'row'}} >
                    <Text style={{ color: "white", fontWeight: 'bold', paddingLeft: 8, paddingTop: 5, paddingRight: 5 }} >{Comments.UserWhoCommented}</Text>
                    <Text style={{ color: 'white', paddingTop: 5, }} >{Comments.UsersComment}</Text>
                  </View>
                )
              })
            }
            {/* Add Comment setion for user */}
            <View style={{ flex:1, flexDirection: 'row' }} >
              <Image source={imageBallon} style={{ width: 30, height: 30, borderRadius: 50, marginTop: 10, marginLeft: 8, borderWidth: 1, borderColor: 'gray' }} />
              <Text style={{ color: "gainsboro", paddingLeft: 14, alignSelf: 'center', paddingTop: 8 }} >Add a comment...</Text>
            </View>
            {/* Date of Our Post */}
            <View>
             <Text style={{ color: "gainsboro", paddingLeft: 8, paddingTop: 6, }} >
              12 Hours ago
             </Text>
            </View>
          </View>
        )
      })
    }

   </ScrollView>
  );
};

export default PostComponet;

const Style = StyleSheet.create({
  ProfileNav: {
    flexDirection: 'row',
    paddingBottom: 10
  },
  ImageStyle: {
    height: 40,
    width: 40,
    borderRadius: 50
  },
  ProfileUsername:{
    paddingLeft: 20,
    justifyContent: 'center',
    paddingTop: 10
  },
  UsernameText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  },
  DotsDiv: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10,
    marginBottom: -5
  },
  Dots: {
    color: 'white',
    fontSize: 30,
    lineHeight: 10
  },
  ImagePost: {
    height: 400,
    width: '100%',
  }
})
