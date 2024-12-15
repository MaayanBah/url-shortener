import {
  Card,
  CardBody,
  Text,
  CardHeader,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import useShorten from "../hooks/useShorten";
import { useState } from "react";

const SearchCard = () => {
  const cardBgColor = useColorModeValue("gray.200", "gray.700");
  //   const cardHoverBgColor = useColorModeValue("gray.200", "gray.600");
  const [searchText, setSearchText] = useState<string>("");
  const { shortenUrl, error } = useShorten(searchText);

  return (
    <Card
      bg={cardBgColor}
      marginTop={6}
      padding={4}
      width={["90%", "80%", "50%"]}
    >
      <CardHeader>
        <Text fontSize="2xl">Paste the URL to be shortened</Text>
      </CardHeader>
      <CardBody>
        <SearchInput onSearch={(text) => setSearchText(text)} />
        {searchText && (
          <>
            <Text marginTop={5} fontSize="lg">
              Long URL:
            </Text>
            <Link href={searchText} target="_blank" color="teal.500">
              {searchText}
            </Link>
          </>
        )}
        {shortenUrl && (
          <>
            <Text marginTop={5} fontSize="lg">
              Shorten URL:
            </Text>
            <Link href={shortenUrl} target="_blank" color="teal.500">
              {shortenUrl}
            </Link>
          </>
        )}
        {error && <Text>{error}</Text>}
      </CardBody>
    </Card>
  );
};

export default SearchCard;
