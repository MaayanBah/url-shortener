import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <form>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={20}
          borderColor="gray.500"
          placeholder="Enter the URL here..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
