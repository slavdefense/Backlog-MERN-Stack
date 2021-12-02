import './MyWork.css'

const MyWork = props => {
  return (  
    <>
    <div className="myWork">
      <h1>Hello, {props.user.name}</h1>
    </div>
    </>
  );
}

export default MyWork;