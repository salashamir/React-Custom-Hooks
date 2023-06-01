import { useState } from "react";
import axios from "axios";
import uuid from "uuid";

const useFlip = (initialState = true) => {
  const [value, setValue] = useState(initialState);

  const flip = () => {
    setValue((prev) => !prev);
  };

  return [value, flip];
};

const useAxios = (url) => {
  const [responses, setResponses] = useState([]);
  const addCard = async (endUrl = "") => {
    try {
      const { data } = await axios.get(url + endUrl);
      setResponses((responses) => [...responses, { ...data, id: uuid() }]);
    } catch (error) {
      alert(error);
    }
  };

  return [responses, addCard];
};

export { useFlip, useAxios };
