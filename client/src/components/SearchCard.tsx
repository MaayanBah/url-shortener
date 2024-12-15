import {
  Card,
  CardBody,
  Text,
  CardHeader,
  useColorModeValue,
} from "@chakra-ui/react";
import SearchInput from "./SearchInput";

const SearchCard = () => {
  const cardBgColor = useColorModeValue("gray.200", "gray.700");
  const cardHoverBgColor = useColorModeValue("gray.200", "gray.600");
  return (
    <>
      <Card bg={cardBgColor} marginTop={6} padding={4}>
        <CardHeader>
          <Text fontSize="2xl">Paste the URL to be shortened</Text>
        </CardHeader>
        <CardBody>
          <SearchInput />
        </CardBody>
      </Card>
    </>
  );
};

export default SearchCard;
