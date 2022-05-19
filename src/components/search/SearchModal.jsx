import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./searchModal.module.css";
const SearchModal = ({ setShowSearch }) => {
  const [list, setList] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const navigate = useNavigate();
  const searchHandler = (e) => {
    let inputVal = e.target.value.toLowerCase().trim();
    let inputLen = inputVal.length;
    let result = list.filter(
      (user) =>
        user.username.toLowerCase().substring(0, inputLen).includes(inputVal) ||
        user.firstName
          .toLowerCase()
          .substring(0, inputLen)
          .includes(inputVal) ||
        user.lastName.toLowerCase().substring(0, inputLen).includes(inputVal)
    );
    if (inputVal.length > 0) {
      result.length > 0
        ? setSearchResult(result)
        : setSearchResult([{ id: 0,firstName:"Not found",lastName:"",username:"" }]);
    } else setSearchResult([]);
  };
  const resultHandler=(id)=>{
    navigate(`/posts/user/${id}`);
    setShowSearch();
  }
  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/users");
      if (response.status === 200) {
        setList(response.data.users);
      }
    })();
  }, []);
  return (
    <div className={classes["modal-container"]}>
      <div className={classes["modal"]}>
        <i
          className={`fas fa-times text-white ${classes["close-btn"]}`}
          onClick={setShowSearch}
        ></i>
        <div className={classes["search-container"]}>
          <input
            type="text"
            placeholder="Search for user"
            onChange={searchHandler}
          />
          <div className={classes["search-list"]}>
            <ul>
              {searchResult.map((user) => {
                return (
                  <li key={user._id} onClick={()=>resultHandler(user._id)}>
                    <div>
                      <p>
                        {user.firstName} {user.lastName}
                      </p>
                      <small>
                        @ <strong>{user.username}</strong>
                      </small>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
