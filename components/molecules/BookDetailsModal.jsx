import React from "react";
import { Modal, VStack, Button } from "native-base";
import Text from "../atoms/Text";
import Input from "../atoms/Input";

const BookDetailsModal = (props) => {
  const {
    bookAuthor,
    bookTitle,
    showModal,
    setShowModal,
    setBookTitle,
    setBookAuthor,
    saveModalInput,
    bookDesc,
    setBookDesc,
    modalName,
  } = props;

  return (
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
      <Modal.Content bgColor={"gray.700"}>
        <Modal.CloseButton />
        <Modal.Body>
          <VStack space={4}>
            <Text fontSize={15} fontWeight={"semibold"} color="gray.200">
              {modalName}
            </Text>
            <VStack>
              <Text>Title</Text>
              <Input
                value={bookTitle}
                onChangeText={(text) => setBookTitle(text)}
              />
            </VStack>
            <VStack>
              <Text>Author</Text>
              <Input
                value={bookAuthor}
                onChangeText={(text) => {
                  setBookAuthor(text);
                }}
              />
            </VStack>
            <VStack>
              <Text>Description</Text>
              <Input
                value={bookDesc}
                onChangeText={(text) => {
                  setBookDesc(text);
                }}
              />
            </VStack>
            <Button.Group space={2} alignSelf={"flex-end"}>
              <Button
                _text={{ color: "gray.200" }}
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Cancel
              </Button>
              <Button
                borderRadius={32}
                bgColor={"#6527f8"}
                onPress={() => {
                  saveModalInput();
                  setShowModal(false);
                }}
              >
                Save
              </Button>
            </Button.Group>
          </VStack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default BookDetailsModal;
