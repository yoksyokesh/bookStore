import React, { useState } from "react";
import { VStack, HStack, Icon, Pressable } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import BookDetailsModal from "../../../components/molecules/BookDetailsModal";
import Text from "../../../components/atoms/Text";

const BookList = (props) => {
  const { data, setData, navigation } = props;
  const [showModal, setShowModal] = useState(false);
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookDesc, setBookDesc] = useState("");
  const [idx, setIdx] = useState(undefined);

  const saveModalInput = () => {
    let bookData = [...data];
    bookData[idx] = {
      id: idx + 1,
      name: bookTitle,
      author: bookAuthor,
      desc: "test",
    };
    setData([...bookData]);
  };

  const deleteBook = (id) => {
    const filteredData = data.filter((book) => book.id !== id);
    setData([...filteredData]);
  };

  return data && data.length > 0 ? (
    data.map((bookData, index) => {
      return (
        <VStack
          space={2}
          p={4}
          key={bookData.id}
          bgColor={"gray.800"}
          borderRadius={10}
          mb={4}
        >
          <HStack justifyContent={"space-between"} alignItems={"center"}>
            <Pressable
              flex={1}
              onPress={() => {
                navigation.navigate("BookDescription", { book: bookData });
              }}
            >
              <VStack space={3}>
                <HStack space={1} alignItems={"center"}>
                  <Icon as={MaterialIcons} name="book" size={5} />
                  <Text fontWeight={"bold"}>{bookData.name}</Text>
                </HStack>
                <HStack space={1} alignItems={"center"}>
                  <Icon as={Ionicons} name="person" size={5} />
                  <Text>{bookData.author}</Text>
                </HStack>
              </VStack>
            </Pressable>
            <VStack space={5}>
              <Icon
                as={Entypo}
                name="pencil"
                size={5}
                color="blue.500"
                onPress={() => {
                  setIdx(index);
                  setBookTitle(data[index].name);
                  setBookAuthor(data[index].author);
                  setBookDesc(data[index].desc);
                  setShowModal(true);
                }}
              />
              <Icon
                as={Ionicons}
                name="trash"
                size={5}
                color="red.500"
                onPress={() => deleteBook(bookData.id)}
              />
            </VStack>
          </HStack>
          {/* <Divider /> */}
          <BookDetailsModal
            modalName="Edit book details"
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
        </VStack>
      );
    })
  ) : (
    <Text>No books found!</Text>
  );
};

export default BookList;
