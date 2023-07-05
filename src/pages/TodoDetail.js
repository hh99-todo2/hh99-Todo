// 상세보기 페이지
import React from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function TodoDetail() {
  const param = useParams();
  console.log("param", param);

  const todoList = useSelector((state) => state.todos.todos);

  const foundData = todoList.find((todo) => todo.id === parseInt(param.id));

  const page = todoList.find((page) => {
    return page.id === parseInt(param.id);
  });

  return (
    <StPageLayout>
      <StPageContainer>
        <div>
          <StPageTop>
            <StPageId>ID: {page.id}</StPageId>
            <Link to={`/`}>
              <StBackbutton>이전으로</StBackbutton>
            </Link>
          </StPageTop>
          <Stisdone>{foundData.isDone ? "완료됨" : "미완료"}</Stisdone>
          <StPageTitle>
            <div>{page.title}</div>
          </StPageTitle>
          <StPageBody>
            <div>{page.body}</div>
          </StPageBody>
        </div>
      </StPageContainer>
    </StPageLayout>
  );
}


export default TodoDetail;

// CSS 부분
const StPageLayout = styled.div`
  border: 2px solid rgb(238, 238, 238);
  width: 100%;
  height: 100vh;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`;

const StPageContainer = styled.div`
  width: 600px;
  height: 400px;
  border: 3px solid rgb(238, 238, 238);
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

const StPageTop = styled.div`
  display: flex;
  height: 80px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0px 24px;
  -webkit-box-align: center;
  align-items: center;
`;

const StPageId = styled.div`
  display: flex;
  height: 30px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
`;

const StBackbutton = styled.button`
  border: 1px solid rgb(221, 221, 221);
  height: 40px;
  width: 120px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  cursor: pointer;
`;

const StPageTitle = styled.h1`
  padding: 0px 24px;
`;

const StPageBody = styled.main`
  padding: 0px 24px;
`;

const Stisdone = styled.div`
padding: 0px 24px;
`;
