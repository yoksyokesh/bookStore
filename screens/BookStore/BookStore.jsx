import React, { useEffect, useState } from "react";
import { ScrollView, Fab, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { books } from "../../data/books";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Title from "../../components/molecules/Title";
import BookList from "./components/BookList";
import { useIsFocused } from "@react-navigation/native";
import BookDetailsModal from "../../components/molecules/BookDetailsModal";

const BookStore = (props) => {
  const { navigation, route } = props;
  const [bookData, setBookData] = useState(books);
  const focused = useIsFocused();
  const [showModal, setShowModal] = useState(false);
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookDesc, setBookDesc] = useState("");

  const saveModalInput = () => {
    let exisitingData = [...bookData];
    exisitingData.push({
      id: bookData.length > 0 ? bookData[bookData.length - 1].id + 1 : 1,
      name: bookTitle,
      author: bookAuthor,
      desc: bookDesc,
    });
    setBookData([...exisitingData]);
    setBookAuthor("");
    setBookTitle("");
    setBookDesc("");
  };

  return (
    <ScrollView _contentContainerStyle={{ bgColor: "#000000", padding: 4 }}>
      <Title>Books</Title>
      <BookList data={bookData} setData={setBookData} navigation={navigation} />
      {focused && (
        <Fab
          bgColor={"#6527f8"}
          onPress={() => setShowModal(true)}
          bottom={60}
          icon={<Icon color="white" as={<AntDesign name="plus" />} />}
        />
      )}
      <BookDetailsModal
        modalName="Add new book"
        showModal={showModal}
        setShowModal={setShowModal}
        bookAuthor={bookAuthor}
        setBookAuthor={setBookAuthor}
        bookTitle={bookTitle}
        setBookTitle={setBookTitle}
        saveModalInput={saveModalInput}
        bookDesc={bookDesc}
        setBookDesc={setBookDesc}
      />
    </ScrollView>
  );
};

export default BookStore;
