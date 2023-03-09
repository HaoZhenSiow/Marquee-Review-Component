import styled from 'styled-components'

const ReviewStyled = styled.div`
  width: 40vw;
  height: 350px;
  padding: 4em;
  margin-left: 2em;
  border-radius: 20px;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    font-size: 28px;
    font-weight: bold;
    line-height: 1.2em;
    margin: 0;
  }

  .reviewer {
    display: flex;
    align-items: center;
  }

  .name, .title {
    font-size: 16px;
    font-weight: normal;
  }

  .name {
    font-weight: bold;
  }

  .title {
    color: grey;
  }

  .avatar {
    border-radius: 35px;
    margin-right: 10px;
  }
`

export default function Review(props) {
  return (
    <ReviewStyled>
      {props.children}
    </ReviewStyled>
  )
}