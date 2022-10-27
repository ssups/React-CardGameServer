import axios from "axios";

function getAllPosts() {
  return async (dispatch, state) => {
    const { data: response } = await axios({
      url: "http://13.125.105.174/get_all_posts",
    });
    // console.log(response);
    dispatch({ type: "GET_ALL_POSTS", payload: response });
  };
}

function registerPost(id, title, main, setIsPosting, setOrder) {
  return async (dispatch, state) => {
    const { data: response } = await axios({
      method: "post",
      url: "http://13.125.105.174/posting",
      data: { id, title, main },
    });
    alert(response.msg);
    if (response.msg === "등록 완료") {
      dispatch({ type: "GET_ALL_POSTS", payload: response.data });
      setIsPosting(false);
      setOrder("latest");
    }
  };
}

function modifyPost(postId, modifiedTitle, modifiedMain, setOrder, setMode) {
  return async (dispatch, state) => {
    const { data: response } = await axios({
      method: "post",
      url: "http://13.125.105.174/modify_post",
      data: { postId, modifiedTitle, modifiedMain },
    });
    alert(response.msg);
    if (response.msg === "수정 완료") {
      dispatch({ type: "GET_ALL_POSTS", payload: response.data });
      // console.log(response.modifiedPost);
      dispatch({ type: "SET_POP_UP_POST_DATA", payload: response.modifiedPost });
      setOrder("latest");
      setMode("normal");
    }
  };
}

function delPost(postId, setIsPostPop, setOrder) {
  return async (dispatch, state) => {
    const { data: response } = await axios({
      method: "post",
      url: "http://13.125.105.174/del_post",
      data: { postId },
    });
    alert(response.msg);
    if (response.msg === "삭제 완료") {
      dispatch({ type: "GET_ALL_POSTS", payload: response.data });
      setIsPostPop(false);
      setOrder("latest");
    }
  };
}

function increaseVisited(postId) {
  return async (dispatch, state) => {
    await axios({
      method: "post",
      url: "http://13.125.105.174/increase_visited",
      data: { postId },
    });
  };
}

const postAction = { registerPost, getAllPosts, delPost, increaseVisited, modifyPost };
export default postAction;
