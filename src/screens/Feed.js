import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Dimensions, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { styles } from '../ui/css/Feed';
import axios from 'axios';

const { width: screenWidth } = Dimensions.get('window');

export default function Feed({ navigation }) {
  const [historys, setHistorys] = useState([]);
  const [comment, setComment] = useState('');

  const IP = '192.168.0.110';
  const PORT = '3001';

  useEffect(() => {
    getPosts();
  }, []);

  async function pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: undefined,
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const { uri, width, height } = result.assets[0];

      // Verifique se width e height são válidos
      if (!isNaN(width) && !isNaN(height)) {
        const newPost = { uri, width, height, text: 'Nova História', comments: [] };
        setHistorys([...historys, newPost]);
        savePost(newPost);
      } else {
        console.error('Invalid dimensions for the selected image');
      }
    }
  };

  function addComment(index) {
    let newHistorys = [...historys];
    newHistorys[index].comments.push(comment);
    setHistorys(newHistorys);
    setComment(''); // Limpa o campo de comentário
  }

  async function savePost(post) {
    try {
      await axios.post(`http://${IP}:${PORT}/post`, post);
      alert('História salva com sucesso');
    } catch (err) {
      console.log(err);
      alert('Erro ao salvar história');
    }
  }

  async function getPosts() {
    try {
      const response = await axios.get(`http://${IP}:${PORT}/post`);
      console.log(response.data);
      const posts = response.data.map(post => ({
        ...post,
        comments: post.commentadBy || [],
      }))
      ;
      // setHistorys(posts);
    } catch (err) {
      console.log(err);
      alert('Erro ao buscar histórias');
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.historyContainer}>
        {historys.map((item, index) => (
          <View style={styles.historyFeed} key={index}>
            <View style={styles.historyNameContainer}>
              <Text style={styles.historyName}>História {index + 1}</Text>
            </View>
            <Image 
              source={{ uri: item.uri }} 
              style={[
                styles.image, 
                {
                  width: screenWidth, 
                  height: (item.height / item.width) * screenWidth 
                }
              ]}
            />
            <View style={[styles.historyFeedInfo, { width: screenWidth }]}>
              {item.comments.map((comment, commentIndex) => (
                <View key={commentIndex} style={styles.comments}>
                  <Text style={styles.commentName}>Lucas Abreu</Text>
                  <Text style={styles.commentText}>{comment}</Text>
                </View>
              ))}
              <View style={styles.commentContainer}>
                <TextInput
                  style={styles.commentInput}
                  placeholder="Adicione um comentário"
                  placeholderTextColor="#ddd"
                  value={comment}
                  onChangeText={setComment}
                />
                <TouchableOpacity style={styles.commentButton} onPress={() => addComment(index)}>
                  <Text style={styles.commentButtonText}>Enviar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.addButton} onPress={pickImage}>
        <Text style={styles.addButtonText}>Adicionar História</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.perfilButton} onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.addButtonText}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}
